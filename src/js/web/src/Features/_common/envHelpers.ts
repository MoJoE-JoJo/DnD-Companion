export function getUserPrefix() {
    return "USER_"
}

export function getPort() {
    return process.env.PORT;
}

export function getAuthDuration() {
    return (process.env.AUTH_DURATION_IN_HOURS + "h") as string;
}

export function getAuthKey() {
    return process.env.AUTH_KEY as string;
}

export function getCopyModels(){
    return process.env.COPY_MODELS ?? false 
}
