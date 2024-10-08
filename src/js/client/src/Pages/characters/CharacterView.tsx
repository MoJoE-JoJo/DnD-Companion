import { createResource, createEffect, createSignal, JSXElement, Show, Suspense } from "solid-js";
import { Characteristics } from "./../../../../Shared/Character/Characteristics/Characteristics";
import {Character} from "./../../../../Shared/Character/Character"
import { Stats } from "./../../../../Shared/Character/Stats/Stats";
import { AbilityScore } from "../../../../Shared/Character/Stats/Abilities";
import { LingeringInjuriesView } from "./LingeringInjuriesView";
import { useDndcContext } from "./../../Components/context";

type CharacterViewProps = {
    id: number
}

function DetailsView(props: {characteristics : Characteristics | undefined}) : JSXElement {
    return <Show when={props.characteristics}>{details => 
        <div>{details().name} is a {details().age} year old {details().race}.</div>
    }</Show>
}

function CalcModifier(statValue: number) : number {
    return Math.floor((statValue - 10) / 2)
}

function StatView(props: {statName: string, statValue: number}) : JSXElement {
    return <div>{props.statName} score: {props.statName}. Modifier: {props.statValue}</div>
}


function StatsView(props: {stats : Stats | undefined}) : JSXElement {
    return <Show when={props.stats}>{stats => <>
        <StatView statName="Strength" statValue={stats().abilitieScores.strength} /> 
        <StatView statName="Dexterity" statValue={stats().abilitieScores.dexterity} /> 
        <StatView statName="Constitution" statValue={stats().abilitieScores.constitution} /> 
        <StatView statName="Intelligence" statValue={stats().abilitieScores.intelligence} /> 
        <StatView statName="Wisdom" statValue={stats().abilitieScores.wisdom} /> 
        <StatView statName="Charisma" statValue={stats().abilitieScores.charisma} /> 
    </>}</Show>
}

export function CharacterView(props : CharacterViewProps) : JSXElement {
    const { character, loadingCharacter, fetchCharacter } = useDndcContext();
    const [characterId, setCharacterId] = createSignal(props.id);
    
    createEffect(() => {
        const id = characterId();
        if (id != null) {
            fetchCharacter(id); // Fetch character data when the id changes
        }
    });

    if (loadingCharacter())
    {
        return <>
            <p>Loading character...</p>
        </>
    }
    
    return <>
        <select name="Character" onChange={(e) => {
            const id = Number(e.currentTarget.value)
            setCharacterId(id);
            console.log(id)
        }}>
            <option value={0}>Chell</option>
            <option value={1}>Fleck</option>
            <option value={2}>Rafan</option>
            <option value={3}>Kasimir</option>
        </select>
        <Suspense fallback={<div>Loading...</div>}>
            <DetailsView characteristics={character()?.characteristics} />
            <StatsView stats={character()?.stats} />
            <LingeringInjuriesView characterId={characterId()} lingeringInjuries={character()?.lingeringInjuries}></LingeringInjuriesView>
        </Suspense>
    </> 
}