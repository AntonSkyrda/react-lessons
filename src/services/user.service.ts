import axios from "axios";
import type {IUser} from "../models/IUser.ts";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>("users");
    return data;
}

export const saveUser = async (user: IUser): Promise<void> => {
    return await axiosInstance.post("users", user);
}

axiosInstance.interceptors.request.use((request) => {
        return request;
})

axiosInstance.interceptors.response.use((response) => {
    return response;
})