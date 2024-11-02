namespace CombatTracker.src.Utilities;
public static class Dice
{

    public static int Roll(DiceType dice, int modifier) =>
        (dice switch
        {
            DiceType.d4 => Random.Shared.Next(1, 5),
            DiceType.d6 => Random.Shared.Next(1, 7),
            DiceType.d8 => Random.Shared.Next(1, 9),
            DiceType.d10 => Random.Shared.Next(1, 11),
            DiceType.d12 => Random.Shared.Next(1, 13),
            DiceType.d20 => Random.Shared.Next(1, 21),
            _ => throw new ArgumentOutOfRangeException(nameof(dice), "Unknown dice type")
        }) + modifier;

    public static int RollWithAvantage(int modifier)
    {
        var roll1 = Roll(DiceType.d20, modifier);
        var roll2 = Roll(DiceType.d20, modifier);
        return Math.Max(roll1, roll2);
    }

    public static int RollWithDisadvantage(int modifier)
    {
        var roll1 = Roll(DiceType.d20, modifier);
        var roll2 = Roll(DiceType.d20, modifier);
        return Math.Min(roll1, roll2);
    }
}
