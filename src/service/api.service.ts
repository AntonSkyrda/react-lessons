import {urls} from "../constants/urls.ts";
import type {IUser} from "../models/IUser.ts";
import type {IPost} from "../models/IPost.ts";

export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
        .then(response => response.json())
    }
}

export const postsService = {
    getUserPostsByUserId: async (userId: number): Promise<IPost[]> => {
        return await fetch(urls.posts.allPostsByUserId(userId))
        .then(response => response.json())
    }
}