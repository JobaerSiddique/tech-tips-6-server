
import httpStatus from "http-status";
import { User } from "../Auth/auth.model"
import AppError from "../Error/AppError";
import { Post } from "./post.model";




const createPostDB = async(userId:string,payload:any)=>{
    const user = await User.findById(userId);
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"User not found")
    }

    const newPost = await Post.create(payload);
    return newPost

}

const getUserPostDB = async(userId:string)=>{
    const userPost = await Post.find({userId:userId}).populate("userId")
    if(!userPost){
        throw new AppError(httpStatus.NOT_FOUND,"No post found")
    }

    return userPost;
}

const updateUserPostDB = async(id:string,payload:any)=>{
    const findPost = await Post.findById(id)
    if(!findPost){
        throw new AppError(httpStatus.NOT_FOUND,"Post not found")
    }

    if(findPost.isDeleted){
        throw new AppError(httpStatus.FORBIDDEN,"Post is deleted")
    }

    const updateInfo = await Post.findByIdAndUpdate(id,payload);
    return updateInfo
}

const deleteUserPostDB = async(id:string)=>{
    const post = await Post.findById(id);

    if(!post){
        throw new AppError(httpStatus.NOT_FOUND,"There have no post to delete")
    }

    const deletePost = await Post.findByIdAndUpdate(id,{isDeleted:true})
    return deletePost;
}

const upvoteUserDB = async(postId:string,userId:string)=>{
    const post = await Post.findById(postId);
    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    if(post.isDeleted){
        throw new AppError(httpStatus.FORBIDDEN,"Post is deleted")
    }
    
    const hasUpvoted = post.votedBy.includes(userId);
    if (hasUpvoted) {
      throw new AppError(httpStatus.FORBIDDEN, 'You have already upvoted this post');
    }

    
    post.upvotes += 1;
    post.votedBy.push(userId);
    await post.save();
    return post;
}


export const PostService ={
    createPostDB,
    getUserPostDB,
    updateUserPostDB,
    deleteUserPostDB,
    upvoteUserDB
}