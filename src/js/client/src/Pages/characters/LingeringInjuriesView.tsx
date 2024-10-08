import { createResource, createSignal, JSXElement, Show, Suspense } from "solid-js";
import { LingeringInjury, LingeringInjuryDefinition } from "../../../../Shared/Character/LingeringInjury";
import { Column } from "../../Components/Container/Column";

type LingeringInjuriesViewProps = {
    lingeringInjuries: LingeringInjury[] | undefined
}

const fetchLingeringInjuryDefinitions = async (): Promise<LingeringInjuryDefinition[]> => {

    const res = (await fetch(`/static/lingering_injuries.json`)).json();

    console.log(res);

    return res;
}

export function LingeringInjuriesView(props: LingeringInjuriesViewProps): JSXElement {

    const [lingeringInjuryDefinitions] = createResource(fetchLingeringInjuryDefinitions);

    const characterInjuries = () => {
        const definitions = lingeringInjuryDefinitions();
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

    return <Column width="50%">
        <div style={{ "background-color": "grey", "text-align": "left" }}>
            <div>
                <h4 style={{ "margin": "8px 0", "display": "inline" }}>Lingering injuries</h4>
                <button>+</button>
            </div>
            <ul style={{ "padding": "0", "list-style": "none" }}>
                {characterInjuries()?.map(li =>
                    <li title={li.rule} style={{ "border": "solid 2px white" }}>
                        <div>
                            <b>{li.name}</b>
                            <button>Edit</button>
                        </div>
                        <p style={{ "margin": "4px 0" }}><i>Source:</i> {li.source}</p>
                        <p style={{ "margin": "4px 0" }}><i>Appearance:</i> {li.visualDescription}</p>
                    </li>
                )}
            </ul>
        </div>
    </Column>
}