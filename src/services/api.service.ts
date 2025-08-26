import type {IUser} from "../models/IUser.ts";

const baseUrl = import.meta.env.VITE_API_URL;

export const getUsers = async (): Promise<IUser[]> => {
    return await fetch(baseUrl)
        .then(res => res.json());
}

export const getUser = async (userId: string): Promise<IUser> => {
    return await fetch(baseUrl + userId)
        .then(res => res.json());
}