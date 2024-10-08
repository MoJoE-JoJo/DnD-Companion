import { createResource, createSignal, JSXElement, Show, Suspense } from "solid-js";
import { Characteristics } from "./../../../../Shared/Character/Characteristics/Characteristics";
import { Character } from "./../../../../Shared/Character/Character"
import { Stats } from "./../../../../Shared/Character/Stats/Stats";
import { AbilityScore } from "../../../../Shared/Character/Stats/Abilities";

type CharacterViewProps = {
    id: number
}

const fetchCharacter = async (id: number): Promise<Character> => {
    const res = await httpCall("GET", `${import.meta.env.VITE_API_URL}/character/${id}/`)

    console.log(res, id);

    return res;
}

function DetailsView(props: { characteristics: Characteristics | undefined }): JSXElement {
    return <Show when={props.characteristics}>{details =>
        <div>{details().name} is a {details().age} year old {details().race}.</div>
    }</Show>
}

function CalcModifier(statValue: number): number {
    return Math.floor((statValue - 10) / 2)
}

function StatView(props: { statName: string, statValue: number }): JSXElement {
    return <div>{props.statName} score: {props.statName}. Modifier: {props.statValue}</div>
}


function StatsView(props: { stats: Stats | undefined }): JSXElement {
    return <Show when={props.stats}>{stats => <>
        <StatView statName="Strength" statValue={stats().abilitieScores.strength} />
        <StatView statName="Dexterity" statValue={stats().abilitieScores.dexterity} />
        <StatView statName="Constitution" statValue={stats().abilitieScores.constitution} />
        <StatView statName="Intelligence" statValue={stats().abilitieScores.intelligence} />
        <StatView statName="Wisdom" statValue={stats().abilitieScores.wisdom} />
        <StatView statName="Charisma" statValue={stats().abilitieScores.charisma} />
    </>}</Show>
}

export function CharacterView(props: CharacterViewProps): JSXElement {

    const [characterId, setCharacterId] = createSignal(props.id);
    const [chell] = createResource(characterId, fetchCharacter);

    return <>
        <select name="Character" onChange={(e) => {
            const id = Number(e.currentTarget.value)
            setCharacterId(id);
        }}>
            <option value={0}>Chell</option>
            <option value={1}>Fleck</option>
            <option value={2}>Rafan</option>
            <option value={3}>Kasimir</option>
        </select>
        <Suspense fallback={<div>Loading...</div>}>
            <DetailsView characteristics={chell()?.characteristics} />
            <StatsView stats={chell()?.stats} />
        </Suspense>
    </>
}