import { writable } from "svelte/store"


export interface UserInfo {
    id: number
    pid: number
    providers: {
        DISCORD: {info: DiscordUser}
    },
    principal?: CecPrincipal
}

export interface ProvidedUser {
    info: DiscordUser
}

export interface DiscordUser {
    id: number
    username: string
    discriminator: string
    globalName: string
}

export interface CecPrincipal {
    name: string
    isAdmin: boolean
    state: string
}

export type UserOrNull = UserInfo | undefined | null; 

export let currentUser = writable<UserOrNull>(undefined)

export function getCurrentUser() {
    const user = writable<UserOrNull>(undefined)
    fetch("/api/v1/users/me").then((response) =>
            response.status === 200 ?response.json().then(user.set) : user.set(null)
    )
    return user
}
