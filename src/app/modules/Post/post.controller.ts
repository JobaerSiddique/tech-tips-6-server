import { Response } from 'express';
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PostService } from "./post.service";


const createPostUser = catchAsync(async(req,res)=>{
    const {userId}= req.user;
    const addPost = req.body;
    const result = await PostService.createPostDB(userId, addPost);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Post created successfully',
        data:result
    })
})

const getUserPost = catchAsync(async(req,res)=>{
    const {userId} = req.user;
    const result = await PostService.getUserPostDB(userId);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Post fetched successfully',
        data:result
    })
})

const updateUserPost = catchAsync(async(req,res)=>{
    const  {id} =req.params;
    const updateData = req.body;
    const result = await PostService.updateUserPostDB(id,updateData)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Post updated successfully',
        data:result
    })
})

const deleteUserPost = catchAsync(async(req,res)=>{
    const {id}= req.params;
    const result = await PostService.deleteUserPostDB(id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Post deleted successfully',
        data:""
    })
})

const upVoteUser = catchAsync(async(req,res)=>{

})

export const PostController ={
    createPostUser,
    getUserPost,
    updateUserPost,
    deleteUserPost,
    upVoteUser
}