import { model, Schema } from "mongoose";
import { IPost } from "./post.interface";



const PostSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type:String,
        required: true,
        trim:true
    },
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now().toLocaleString()
    },
    isDeleted:{
        type: Boolean,
        default: false
    }

})


export const Post = model<IPost>('Post',PostSchema)