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

