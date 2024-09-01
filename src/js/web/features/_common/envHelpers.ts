export function getUserPrefix() {
    return "USER_"
}

export function getPort() {
    return process.env.PORT;
}

export function getAuthDuration() {
    return process.env.AUTH_DURATION as string;
}

export function getAuthKey() {
    return process.env.AUTH_KEY as string;
}
