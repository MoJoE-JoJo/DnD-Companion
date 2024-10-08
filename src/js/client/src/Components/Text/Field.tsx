import { JSXElement } from "solid-js";
import { Column } from "../Container/Column";


export function Field(props: { value: JSXElement, underneath: JSXElement }): JSXElement {
    return <Column width="100%" style={{ padding: "10px" }}>
        <div style={{ "font-size": "16px" }}>
            {props.value ?? '\u200B'}
        </div>
        <hr style={{ "width": "90%", "margin-top": "-2px", "margin-left": "-10px" }} />
        <div style={{ "font-size": "12px", "color": "darkblue", "margin-top": "-10px" }}>
            {props.underneath}
        </div>
    </Column>
}