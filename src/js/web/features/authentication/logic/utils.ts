import { getUserPrefix } from "../../_common/envHelpers";
import { User } from "../models/user";


export function getAllUsers(): User[] {
    const prefix = getUserPrefix();
    const users = Object.keys(process.env)
    .filter((key) => key.startsWith(prefix))
    .map((key) => {
        const [username, password] = (process.env[key] || "").split(";");
        return { username, password };
    });

    console.log(users);
    return users;
}