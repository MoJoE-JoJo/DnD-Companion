import { createSignal, JSXElement } from "solid-js";
import { InputField } from "../../Components/InputField";


export function Login() : JSXElement {
    
    const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");

    async function SubmitLogin() {
        httpCall("POST", "url", {
            username: username,
            password: password
        },
        (result) => {})
    }
    
    
    return <div>
        <InputField label="Username" setField={setUsername}  />
        <InputField label="Password" setField={setPassword}  />
        <button>Submit</button>
    </div>
}