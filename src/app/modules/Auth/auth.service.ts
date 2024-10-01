import httpStatus from "http-status"
import AppError from "../Error/AppError"
import { Auth } from "./auth.model"



const createUserDB= async(payload:any)=>{
    const existUser = await Auth.findOne({email:payload.email})

    if(existUser){
        throw new AppError(httpStatus.FORBIDDEN,"User already exists")
    }

   
}


export const AuthService={
    createUserDB
}