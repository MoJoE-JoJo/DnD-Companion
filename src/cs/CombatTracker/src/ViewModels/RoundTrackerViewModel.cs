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
        //GlobalStore.AddParticipant(new Participant("Dragon", 8, InitiativeType.Enenmy, 200));
    });

    public void UpdateInitiative()
    {
        //GlobalStore.Participants.SuspendNotifications();

        foreach (var pvm in GlobalStore.Participants)
        {
            RollInitiative(pvm);
        }

        var sortedParticipants = SortInitiatives();

        sortedParticipants.ForEach(participant => participant.CurrentHealth = Math.Max(0, participant.CurrentHealth));
        GlobalStore.Participants.Clear();
        sortedParticipants.ForEach(GlobalStore.Participants.Add);
        //GlobalStore.Participants.ResumeNotifications();
    }

    private List<ParticipantViewModel> SortInitiatives() // Should be in a service method
    {
        var sortedParticipants = GlobalStore.Participants
            .Where(p => p.CurrentHealth > 0 || p.Type == InitiativeType.Player)
            .OrderByDescending(p => p.InitiativeRoll)
            .Concat(
                GlobalStore.Participants
                .Where(p => p.CurrentHealth <= 0 && p.Type != InitiativeType.Player)
                .OrderByDescending(p => p.InitiativeRoll)
            )
            .ToList();
        return sortedParticipants;
    }

    private void RollInitiative(ParticipantViewModel pvm)
    {
        var surprised = pvm.Surprised;
        if (surprised)
        {
            pvm.InitiativeRoll = Dice.RollWithDisadvantage(pvm.Participant.InitiativeBonus);
            pvm.Surprised = false;
        }
        else
        {
            pvm.InitiativeRoll = Dice.Roll(DiceType.d20, pvm.Participant.InitiativeBonus);
        }
    }
}