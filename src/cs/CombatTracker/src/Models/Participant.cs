namespace CombatTracker.Domain;
public class Participant
{
    public string Name { get; set; }
    public int InitiativeBonus { get; set; }
    public InitiativeType Type { get; set; }
    public int MaxHealth { get; set; }
    public int CurrentHealth { get; set; }
    public int? FigureNumber { get; set; }
    public string? Notes { get; set; }
    public int? InitiativeRoll { get; set; }

    public Participant(string name, int bonus, InitiativeType type, int maxHealth, int? figureNumber = null, string? notes = null)
    {
        Name = name;
        InitiativeBonus = bonus;
        Type = type;
        MaxHealth = maxHealth;
        CurrentHealth = maxHealth;
        FigureNumber = figureNumber;
        Notes = notes;
    }

}
