import { createSignal, JSXElement } from "solid-js";
import { InputField } from "../../Components/InputField";
import { httpCall } from "../../Helpers/FetchHelper";
import { useNavigate } from "@solidjs/router";


export function Login() : JSXElement {
    const navigate = useNavigate(); 
    
    const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");

    async function SubmitLogin() {
        httpCall("POST", `${import.meta.env.VITE_API_URL}/auth/login`, {
            username: username(),
            password: password()
        }, true).then(result => {
            localStorage.setItem('jwt', result.token);
        }).then(() => {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);
            const redirectUrl = params.get("redirect");

            if (redirectUrl) {
                navigate(redirectUrl)
            }
        })
    }
    
    
    return <div>
        <InputField label="Username" setField={setUsername}  />
        <InputField label="Password" setField={setPassword}  />
        <button onClick={() => SubmitLogin()}>Submit</button>
    </div>
}