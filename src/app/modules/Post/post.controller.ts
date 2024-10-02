import catchAsync from "../../utils/catchAsync";
import { PostService } from "./post.service";


const createPostUser = catchAsync(async(req,res)=>{
    const {userId}= req.user;
    const addPost = req.body;
    const result = await PostService.createPostDB(userId, addPost);
})






export const PostController ={
    createPostUser
}