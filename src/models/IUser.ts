import type {ICompany} from "./ICompany";
import type {IAddress} from "./IAddress.ts";


export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}