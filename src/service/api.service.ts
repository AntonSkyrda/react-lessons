import type {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";

export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
        .then(response => response.json())
    }
}