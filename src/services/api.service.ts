import type {IUser} from "../models/IUser.ts";

export const getUsers = async (): Promise<IUser[]> => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());
}

export const getUser = async (userId: string): Promise<IUser[]> => {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json());
}