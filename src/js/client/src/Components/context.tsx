import { createContext, createSignal, JSXElement, useContext } from "solid-js";
import {Character} from "./../../../Shared/Character/Character"
import { LingeringInjuryDefinition } from "../../../Shared/Character/LingeringInjury";

function useDndcContextProvider() {

    const [character, setCharacter] = createSignal<Character | null>(null)
    const [loadingCharacter, setLoadingCharacter] = createSignal(false)
    const [characterLoadingError, setCharacterLoadingError] = createSignal<string | null>(null)

    const [lingeringInjuriesDefinitions, setLingeringInjuriesDefinitions] = createSignal<LingeringInjuryDefinition[] | undefined>(undefined);
    const [loadingLingeringInjuriesDefinitions, setLoadingLingeringInjuriesDefinitions] = createSignal(false);

    // TODO: Move these actions into dedicated file
    const fetchCharacter = async (id : number) => {
        try {
            setCharacterLoadingError(null);
            setLoadingCharacter(true);
            const response = await fetch(`http://localhost:8080/character/${id}/`);
            const result = await response.json();
            setCharacter(result)
        }
        catch(err) {
            console.error(err)
            setCharacterLoadingError("Error while fetching character:" + err)
        }
        finally {
            setLoadingCharacter(false);
        }
    }

    const fetchLingeringInjuryDefinitions = async () => {
        try {
            setLoadingLingeringInjuriesDefinitions(true);
            const response = await fetch(`/static/lingering_injuries.json`);
            const result = await response.json();
            setLingeringInjuriesDefinitions(result)
        }
        catch(err) {
            console.error(err)
        }
        finally {
            setLoadingLingeringInjuriesDefinitions(false);
        }
    }

    return { 
        character,
        loadingCharacter, 
        characterLoadingError, 
        fetchCharacter,
        lingeringInjuriesDefinitions,
        loadingLingeringInjuriesDefinitions,
        fetchLingeringInjuryDefinitions
    };
}

export type DndcContextModel = ReturnType<typeof useDndcContextProvider>;

const DndcContext = createContext<DndcContextModel | undefined>(undefined);

export function DndcContextProvider(props: { children: JSXElement }) {
    const value = useDndcContextProvider();
    return <DndcContext.Provider value={value}>
        {props.children}
    </DndcContext.Provider>;
};

export function safeDndcContext() {
    const context = useContext(DndcContext);
    if (context === undefined) throw new Error("DndcContext must be used within a DndcContextProvider");
    return context;
}

export function useDndcContext() {    
    return safeDndcContext();
}