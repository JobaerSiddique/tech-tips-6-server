
import  bcrypt  from 'bcrypt';
import httpStatus from "http-status"
import AppError from "../Error/AppError"

import { createToken } from './auth.utils';
import config from '../../../config';
import { User } from './auth.model';



const createUserDB= async(payload:any)=>{
    const existUser = await User.findOne({email:payload.email})

    if(existUser){
        throw new AppError(httpStatus.FORBIDDEN,"User already exists")
    }

    const newUser = await User.create(payload)
    return newUser;
   
}

const loginDB= async(payload:any)=>{
    const user= await User.findOne({email:payload.email})
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"User not found")
    }
    if(user.isDeleted){
        throw new AppError(httpStatus.FORBIDDEN,"User is deleted")
    }
    if(user.status === 'blocked'){
        throw new AppError(httpStatus.FORBIDDEN,"User is blocked")
    }

    const matchPassword = await bcrypt.compare(payload.password,user.password)
    if(!matchPassword){
        throw new AppError(httpStatus.UNAUTHORIZED,"Invalid credentials")
    }

    const JwtPayload ={
        userId:user?._id.toString(),
        role:user?.role
    }

    const accessToken = createToken(
        JwtPayload,
        config.JWT_ACCESS_TOKEN as string,
        config.JWT_ACCESS_EXPIRE as string

    )

    const refreshToken = createToken(
        JwtPayload,
        config.JWT_REFRESH_TOKEN as string,
        config.JWT_REFRESH_EXPIRE as string

    )

    return {accessToken,refreshToken}
}

const getUserDB = async(userId:string,role:string)=>{
    let result = null;

    if(role){
        result = await User.findOne({_id:userId})
    }
    return result;
}

export const AuthService={
    createUserDB,
    loginDB,
    getUserDB
}