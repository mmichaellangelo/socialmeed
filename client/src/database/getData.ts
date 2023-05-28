import { User } from "../types/user";


export async function getUser(username: string): Promise<User | null> {
    try {
        const url = `http://localhost:8000/users/${username}`
        const userData: User = await fetch(url)
        .then((res) => res.json())
        return userData
    } catch {
        return null
    }
}

