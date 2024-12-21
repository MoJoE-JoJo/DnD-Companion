namespace CombatTracker.Models;
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
    public bool Surprised { get; set; }

    public Participant(
        string name,
        int initiativeBonus,
        InitiativeType type,
        int maxHealth,
        int? currentHealth = null,
        int? figureNumber = null,
        string? notes = null)
    {
        Name = name;
        InitiativeBonus = initiativeBonus;
        Type = type;
        MaxHealth = maxHealth;
        CurrentHealth = currentHealth == null ? maxHealth : currentHealth.Value;
        FigureNumber = figureNumber;
        Notes = notes;
        Surprised = false;
    }

}
