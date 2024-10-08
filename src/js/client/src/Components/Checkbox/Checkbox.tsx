import { JSXElement, Show } from "solid-js";

export function Checkbox(props: { checked?: boolean, customCheckmark?: JSXElement }) {
    return <Show when={props.checked} fallback="❌">
        {props.customCheckmark ? props.customCheckmark : "✅"}
    </Show>
}