export interface IUserAuth {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}
