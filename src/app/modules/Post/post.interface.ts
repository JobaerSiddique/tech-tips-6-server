import mongoose from "mongoose";
import { Document } from "mongoose";

export interface IPost extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    content: string;
    createdAt: Date;
    category: string; // e.g., "Web", "Software Engineering", "AI"
  imageUrls: string[];
    isPremium:boolean,
    tags:string[];
    upvotes:number;
    downvotes:number;
    isDelete:boolean,
    


  }