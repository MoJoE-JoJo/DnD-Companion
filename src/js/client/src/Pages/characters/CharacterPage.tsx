import { createResource, createSignal, JSXElement, Setter, Show } from "solid-js";
import { Column } from "@Components/Container/Column";
import { Row } from "@Components/Container/Row";
import { httpCall } from "@Helpers/FetchHelper";
import { Character } from "@Models/Character/Character";
import { CharacterView } from "./CharacterView";


const fetchCharacter = async (id: number): Promise<Character> => {
    const res = await httpCall("GET", `${import.meta.env.VITE_API_URL}/character/${id}/`)
    return res;
}

function CharacterSelect(props: { setCharacterId: Setter<number> }) {
    return <select name="Character" onChange={(e) => {
        const id = Number(e.currentTarget.value)
        props.setCharacterId(id);
    }}>
        <option value={0}>Chell</option>
        <option value={1}>Fleck</option>
        <option value={2}>Rafan</option>
        <option value={3}>Kasimir</option>
    </select >
}

export function CharacterPage(): JSXElement {
    const [characterId, setCharacterId] = createSignal(0);
    const [character] = createResource(characterId, fetchCharacter);

    return <Column height="100%">
        <Row>
            <CharacterSelect setCharacterId={setCharacterId} />
        </Row>
        <Show when={character()} fallback={<div>Loading...</div>}>{c =>
            <CharacterView character={c()} />
        }</Show>
    </Column>
}