import { User } from "../Auth/auth.model"




const createPostDB = async(userId:string,payload:string)=>{
    const user = await User.findById(userId);
    console.log(user);
}







export const PostService ={
    createPostDB
}