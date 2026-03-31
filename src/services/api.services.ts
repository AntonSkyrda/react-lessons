import axios from "axios";
import type {IUserAuth} from "../models/IUserAuth.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMin: number,
}

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}auth/`,
    headers: {},
})

const retrieveLocalStorage = <T>(key: string) => {
    const object = localStorage.getItem(key) || "";

    if (!object) {
        return {} as T;
    }

    const parse = JSON.parse(object);

    return parse as T;
}

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === "GET") {

        request.headers.Authorization = `Bearer ${retrieveLocalStorage<IUserAuth>("user").accessToken}`;

    }
    return request;
})

export const login = async ({username, password, expiresInMin}: LoginData): Promise<void> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserAuth>("login", {username, password, expiresInMin});
    console.log(userWithTokens);
    localStorage.setItem("user", JSON.stringify(userWithTokens));
}

export const refresh = async (): Promise<void> => {

    const iUserWithTokens = retrieveLocalStorage<IUserAuth>("user")

    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>("refresh", {
        refresh_token: iUserWithTokens.refreshToken,
        expiresInMin: 2,
    })
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem("user", JSON.stringify(iUserWithTokens));
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {

    const {data} = await axiosInstance.get<IProductsResponseModelType>("products");

    return data.products;

}