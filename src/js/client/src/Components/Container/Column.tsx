import { JSX, JSXElement } from "solid-js";

type ColumnProps = {
    children: JSXElement
    width?: string
    height?: string
    style?: JSX.CSSProperties | undefined
}

export function Column(props: ColumnProps): JSXElement {
    return <div style={{ "display": "flex", "flex-direction": "column", height: props.height, width: props.width, ...props.style }}>
        {props.children}
    </div>
}