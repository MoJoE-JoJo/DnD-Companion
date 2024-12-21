using CombatTracker.Models;
using CombatTracker.src.Utilities;
using System.Windows.Input;

namespace CombatTracker.ViewModels;

public class RoundTrackerViewModel : BaseViewModel
{
    private GlobalStore GlobalStore { get; set; }

    private int _round;

    public int Round
    {
        get => _round;
        set
        {
            SetProperty(ref _round, value);
            OnPropertyChanged(nameof(RoundText));
        }
    }

    public string RoundText => $"Round: {Round}";


    public RoundTrackerViewModel(GlobalStore globalStore)
    {
        GlobalStore = globalStore;
    }

    public ICommand NextRoundCommand => new Command(() =>
    {
        Round++;
        UpdateInitiative();
    });

    public void UpdateInitiative()
    {
        foreach (var participant in GlobalStore.Participants)
        {
            RollInitiative(participant);
        }

        SortInitiatives();
        GlobalStore.Participants.ForEach(participant => participant.CurrentHealth = Math.Max(0, participant.CurrentHealth));
        GlobalStore.InvokeInitiativeRolled();
    }

    private void SortInitiatives() // Should be in a service method
    {
        GlobalStore.Participants.Sort((p1, p2) =>
        {
            int priorityComparison = GetPriority(p2) - GetPriority(p1);
            if (priorityComparison != 0)
                return priorityComparison;

            // Secondary sort: Sort by InitiativeRoll in descending order
            return CompareNullableInts(p2.InitiativeRoll, p1.InitiativeRoll);
        });
    }

    // Helper method to determine the priority of a participant
    static int GetPriority(Participant p)
    {
        if (p.CurrentHealth > 0 || p.Type == InitiativeType.Player)
            return 1; // High priority
        return 0; // Low priority
    }
    static int CompareNullableInts(int? a, int? b)
    {
        if (a.HasValue && b.HasValue)
            return a.Value - b.Value; // Compare actual values
        if (a.HasValue)
            return -1; // Non-null values come before null
        if (b.HasValue)
            return 1; // Null values come after non-null
        return 0; // Both are null, they are equal
    }

    private void RollInitiative(Participant participant)
    {
        var surprised = participant.Surprised;
        if (surprised)
        {
            participant.InitiativeRoll = Dice.RollWithDisadvantage(participant.InitiativeBonus);
            participant.Surprised = false;
        }
        else
        {
            participant.InitiativeRoll = Dice.Roll(DiceType.d20, participant.InitiativeBonus);
        }
    }
}