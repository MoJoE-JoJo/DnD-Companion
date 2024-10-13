export type Wealth = {
    hands: number,
    bags: number,
    chest: number,
    hoards: number,
    fortunes: number
}

export const WealthConstants = {
    handsPerBag: 5,
    bagsPerChest: 4,
    chestPerHoard: 3,
    hoardsPerFortune: 2
}

export function ReduceCurrency(wealth: Wealth): Wealth
{
    throw new Error("Not implemented")
}