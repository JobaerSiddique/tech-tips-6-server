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
        default: Date.now
    },
    category: { 
        type: String, 
        required: true 
    },
    imageUrls: { 
        type: [String], 
        default: [] 
    },
    tags: { 
        type:[String], 
        default: [] 
    },
    isPremium: { 
        type: Boolean, 
        default: false 
    },
    upvotes: { 
        type: Number, 
        default: 0
    },
    votedBy: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }],
    downvotes: { 
        type: Number, 
        default: 0 
    },
    isDeleted:{
        type: Boolean,
        default: false
    }

},{
    timestamps:true
})


export const Post = model<IPost>('Post',PostSchema)