import { createSignal, JSXElement } from "solid-js";
import { InputField } from "../../Components/InputField";
import { httpCall } from "../../Helpers/FetchHelper";


export function Login() : JSXElement {
    
    const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");

    async function SubmitLogin() {
        httpCall("POST", `${import.meta.env.VITE_API_URL}/auth/login`, {
            username: username(),
            password: password()
        },
        (result) => {
            console.log(result)
        })
    }
    
    
    return <div>
        <InputField label="Username" setField={setUsername}  />
        <InputField label="Password" setField={setPassword}  />
        <button onClick={() => SubmitLogin()}>Submit</button>
    </div>
}