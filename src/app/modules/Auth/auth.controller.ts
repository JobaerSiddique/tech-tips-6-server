import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";




const createUser = catchAsync(async(req,res)=>{
    const addUser = req.body;
  
    const result = await AuthService.createUserDB(addUser)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'User created successfully',
        data:result
    })
})


const login = catchAsync(async(req,res)=>{
    const logindata = req.body;
    const result = await AuthService.loginDB(logindata)
    const {accessToken,refreshToken} = result;
    res.cookie('refreshToken',refreshToken)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Logged in successfully',
        data:accessToken
    })
})

const getUser = catchAsync(async(req,res)=>{
    const {userId,role} = req.user;
    const result = await AuthService.getUserDB(userId,role)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'User fetched successfully',
        data:result
    })
})





export const AuthController = {
    createUser,
    login,
    getUser
}