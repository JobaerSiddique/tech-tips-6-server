import catchAsync from "../../utils/catchAsync";
import { AuthService } from "./auth.service";




const createUser = catchAsync(async(req,res)=>{
    const addUser = req.body;
    const result = await AuthService.createUserDB(addUser)
    console.log(result);
})





export const AuthController = {
    createUser
}