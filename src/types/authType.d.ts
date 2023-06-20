import { string } from "zod";

export interface SignInType {
    username: string;
    password: string;
}

export interface UserInformation {
    name: string
    image: string
    basketCount: string
    email: string
    username: string
}