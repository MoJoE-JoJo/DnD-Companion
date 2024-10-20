
namespace CombatTracker.Domain;
public record InititiativeItem
{
    public string Name { get; set; }
    public int InitiativeBonus { get; set; }
    public InitiativeType Type { get; set; }
    public int MaxHealth { get; set; }
    public int CurrentHealth { get; set; }
    public int? FigureNumber { get; set; }
    public string? Description { get; set; }
    public int? InitiativeRoll { get; set; }

    public InititiativeItem(string name, int bonus, InitiativeType type, int maxHealth, int? figureNumber = null, string? description = null)
    {
        Name = name;
        InitiativeBonus = bonus;
        Type = type;
        MaxHealth = maxHealth;
        CurrentHealth = maxHealth;
        FigureNumber = figureNumber;
        Description = description;
    }

}
