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
                new ParticipantViewModel(new Participant("Arthur", 5, InitiativeType.Player, 50)),
                new ParticipantViewModel(new Participant("Jett", 5, InitiativeType.Player, 50)),
                new ParticipantViewModel(new Participant("Haaldwiin", 5, InitiativeType.Player, 50)),
                new ParticipantViewModel(new Participant("Ricket", 5, InitiativeType.Player, 50)),
                new ParticipantViewModel(new Participant("Gnoll, 12", 2, InitiativeType.Enenmy, 30)),
                new ParticipantViewModel(new Participant("Gnoll, 2", 2, InitiativeType.Enenmy, 200)),
            };
    }

    public void AddParticipant(Participant participant)
    {
        Participants.Add(new ParticipantViewModel(participant));
    }
}

