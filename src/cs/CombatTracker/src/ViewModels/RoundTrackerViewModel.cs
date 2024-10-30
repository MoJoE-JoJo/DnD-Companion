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
            pvm.InitiativeRoll = Random.Shared.Next(1, 21) + pvm.Participant.InitiativeBonus;
        }

        var sortedParticipants = GlobalStore.Participants
            .Where(p => p.CurrentHealth > 0)
            .OrderByDescending(p => p.InitiativeRoll)
            .Concat(
                GlobalStore.Participants
                .Where(p => p.CurrentHealth <= 0)
                .OrderByDescending(p => p.InitiativeRoll)
            )
            .ToList();

        sortedParticipants.ForEach(participant => participant.CurrentHealth = Math.Max(0, participant.CurrentHealth));
        GlobalStore.Participants.Clear();
        sortedParticipants.ForEach(GlobalStore.Participants.Add);
        //GlobalStore.Participants.ResumeNotifications();
    }

}