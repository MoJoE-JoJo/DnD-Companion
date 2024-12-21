using CombatTracker.Models;

namespace CombatTracker.src.Utilities;

public class GlobalStore
{

    public List<Participant> Participants { get; set; }

    public int CurrentParticipantIndex { get; set; }

    private double _windowHeight = 0;
    public double WindowHeight
    {
        get => _windowHeight;
        set
        {
            _windowHeight = value;
            WindowHeightChanged?.Invoke();
        }
    }

    public event Action? WindowHeightChanged;

    public event Action? InitiativeRolled;


    public GlobalStore()
    {
        //Participants = new ObservableCollection<ParticipantViewModel>
        //    {
        //        new ParticipantViewModel(new Participant("Arthur", 2, InitiativeType.Player, 19)),
        //        new ParticipantViewModel(new Participant("Jett", -1, InitiativeType.Player, 15)),
        //        new ParticipantViewModel(new Participant("Haaldwiin", 5, InitiativeType.Player, 15)),
        //        new ParticipantViewModel(new Participant("Ricket", 0, InitiativeType.Player, 14)),
        //        new ParticipantViewModel(new Participant("Skeleton Minotaur", 0, InitiativeType.Enenmy, 67)),
        //        //new ParticipantViewModel(new Participant("Gnoll, 2", 1, InitiativeType.Enenmy, 22)),
        //        //new ParticipantViewModel(new Participant("Gnoll, 3", 1, InitiativeType.Enenmy, 22)),
        //        //new ParticipantViewModel(new Participant("Gnoll, 4", 1, InitiativeType.Enenmy, 22)),
        //    };
        Participants = new List<Participant>
            {
                new Participant(
                    name: "Arthur",
                    initiativeBonus: 2,
                    type: InitiativeType.Player,
                    maxHealth: 19
                    ),
                new Participant(
                    name:"Jett",
                    initiativeBonus: -1,
                    type: InitiativeType.Player,
                    maxHealth: 15
                    ),
                new Participant(
                    name:"Haaldwiin",
                    initiativeBonus: 5,
                    type: InitiativeType.Player,
                    maxHealth: 15
                    ),
                new Participant(
                    name : "Ricket",
                    initiativeBonus: 0,
                    type: InitiativeType.Player,
                    maxHealth: 14
                    ),
                new Participant(
                    name : "Skeleton Minotaur",
                    initiativeBonus: 0,
                    type: InitiativeType.Enenmy,
                    maxHealth: 67,
                    currentHealth: 22
                    )
            };
    }

    public void AddParticipant(Participant participant)
    {
        Participants.Add(participant);
    }

    public void InvokeInitiativeRolled()
    {
        InitiativeRolled?.Invoke();
    }
}

