import { createResource, createSignal, JSXElement, Show, Suspense } from "solid-js";
import { Character, Details, Stats } from "../../../../Shared/Models/index";



type CharacterViewProps = {
    id: number
}

const fetchCharacter = async (id : number) => {

    const res = (await fetch(`http://localhost:8080/character/${id}/`)).json();

    console.log(res, id);

    return res;
}

function DetailsView(props: {details : Details | undefined}) : JSXElement {
    return <Show when={props.details}>{details => 
        <div>{details().name} is a {details().age} year old {details().race}.</div>
    }</Show>
}

function CalcModifier(statValue: number) : number {
    return (statValue - 10) / 2
}

function StatView(props: {statName: string, statValue: number}) : JSXElement {
    return <div>{props.statName} score: {props.statValue}. Modifier: {CalcModifier(props.statValue)}</div>
}


function StatsView(props: {stats : Stats | undefined}) : JSXElement {
    return <Show when={props.stats}>{stats => <>
        <StatView statName="Strength" statValue={stats().strength} /> 
        <StatView statName="Dexterity" statValue={stats().dexterity} /> 
        <StatView statName="Constitution" statValue={stats().constitution} /> 
        <StatView statName="Intelligence" statValue={stats().intelligence} /> 
        <StatView statName="Wisdom" statValue={stats().wisdom} /> 
        <StatView statName="Charisma" statValue={stats().charisma} /> 
    </>}</Show>
}

export function CharacterView(props : CharacterViewProps) : JSXElement {

    const [characterId, setCharacterId] = createSignal(props.id);
    const [chell] = createResource(characterId, fetchCharacter);
    
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
        {/* <input value={characterId()} onChange={newVal => setCharacterId(newVal.target.value)} /> */}
        <Suspense fallback={<div>Loading...</div>}>
            <DetailsView details={chell()?.details} />
            <StatsView stats={chell()?.stats} />
        </Suspense>
    </> 
}