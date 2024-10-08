import { createResource, createSignal, JSXElement, Show, Suspense } from "solid-js";
import { LingeringInjury, LingeringInjuryDefinition } from "../../../../Shared/Character/LingeringInjury";
import { useDndcContext } from "./../../Components/context";

type LingeringInjuriesViewProps = {
    characterId: number,
    lingeringInjuries: LingeringInjury[] | undefined
}

export function LingeringInjuriesView(props : LingeringInjuriesViewProps) : JSXElement {
    const { lingeringInjuriesDefinitions, loadingLingeringInjuriesDefinitions, fetchLingeringInjuryDefinitions } = useDndcContext();

    // TODO: We should probably do this somewhere else...
    fetchLingeringInjuryDefinitions();

    const characterInjuries = () => {
        const definitions = lingeringInjuriesDefinitions();
        if (!definitions) return undefined;

        return props.lingeringInjuries?.map(li => {
            const definition = definitions.find(def => def.type === li.type);
            return {
                ...li,
                rule: definition ? definition.rule : "Undefined rule",
                name: definition ? definition.name : "Undefined rule name",
            };
        }) || [];
    };
    
    return <>
        <div style={{"background-color": "grey", "text-align": "left"}}>
            {loadingLingeringInjuriesDefinitions() ?
                <p>Loading lingering injuries...</p>
            :
            <div>
                <div>
                    <h4 style={{"margin": "8px 0", "display": "inline"}}>Lingering injuries</h4>
                    <button>+</button>
                </div>
                <ul style={{"padding": "0", "list-style": "none"}}>
                    {characterInjuries()?.map(li =>
                        <li title={li.rule} style={{"border": "solid 2px white"}}>
                            <div>
                                <b>{li.name}</b> 
                                <button>Edit</button>
                            </div>
                            <p style={{"margin": "4px 0"}}><i>Source:</i> {li.source}</p>
                            <p style={{"margin": "4px 0"}}><i>Appearance:</i> {li.visualDescription}</p>
                        </li>
                    )}
                </ul>
            </div>
            }
        </div>
    </> 
}