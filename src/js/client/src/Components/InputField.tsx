

export type InputFieldProps = {
    label: string
    setField: (newValue : string) => void
}

export function InputField(props: InputFieldProps) {

    return <div>
        <span>{props.label}</span>
        <input onChange={newVal => props.setField(newVal.currentTarget.value)}></input>
    </div>
}