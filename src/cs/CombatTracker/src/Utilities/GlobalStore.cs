using CombatTracker.Models;
using CombatTracker.ViewModels;
using System.Collections.ObjectModel;

namespace CombatTracker.src.Utilities;

public class GlobalStore
{

    public ObservableCollection<ParticipantViewModel> Participants { get; set; }

    public int CurrentParticipantIndex { get; set; }


    public GlobalStore()
    {
        Participants = new ObservableCollection<ParticipantViewModel>
            {
                new ParticipantViewModel(new Participant("Arthur", 2, InitiativeType.Player, 11)),
                new ParticipantViewModel(new Participant("Jett", 2, InitiativeType.Player, 9)),
                new ParticipantViewModel(new Participant("Haaldwiin", 5, InitiativeType.Player, 9)),
                new ParticipantViewModel(new Participant("Ricket", 1, InitiativeType.Player, 8)),
                new ParticipantViewModel(new Participant("Gnoll, 1", 1, InitiativeType.Enenmy, 22)),
                new ParticipantViewModel(new Participant("Gnoll, 2", 1, InitiativeType.Enenmy, 22)),
                new ParticipantViewModel(new Participant("Gnoll, 3", 1, InitiativeType.Enenmy, 22)),
                new ParticipantViewModel(new Participant("Gnoll, 4", 1, InitiativeType.Enenmy, 22)),
            };
    }

    public void AddParticipant(Participant participant)
    {
        Participants.Add(new ParticipantViewModel(participant));
    }
}

