import { JSX, JSXElement } from "solid-js";


type RowProps = {
    children: JSXElement
    width?: string
    height?: string
    style?: JSX.CSSProperties | undefined
}

export function Row(props: RowProps): JSXElement {
    return <div style={{ "display": "flex", "flex-direction": "row", height: props.height, width: props.width, ...props.style }} >
        {props.children}
    </div>
}