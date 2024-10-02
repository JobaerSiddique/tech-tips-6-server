

import { Model } from "mongoose";
import { USER_ROLE } from "./auth.constant";


export interface TUser {
    name: string,
    email: string,
    password: string,
    phone: string,
    status: 'active'|'blocked',
    role: 'admin'|'user',
    isDeleted: boolean
    
   
}

// function defination 
export interface UserModel extends Model <TUser>{
    isUserExistByEmail(email:string):Promise<TUser>;
    isPasswordMatch(plainTextPassword:string,hashPassword:string):Promise<boolean>;
}


export  type TUserRole = keyof typeof USER_ROLE