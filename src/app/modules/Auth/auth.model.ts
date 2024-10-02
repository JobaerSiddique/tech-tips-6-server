import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../../config";
import { TUser } from "./auth.interface";

const AuthSchema = new Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        
        
    },
    password:{
        type:String,
        required: true,
       
    },
    phone:{
        type:String,
        required: true,
        unique: true,
        
    },
    status:{
        type:String,
        enum:["active","blocked"],
        default: "active"

    },
    role:{
        type:String,
        enum:["user","admin"],
        default: "user"
    },
    isDeleted:{
        type:Boolean,
        default: false
    }
},{
    timestamps:true
})



AuthSchema.pre('save', async function (next) {
  
    const user = this; 
  
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds)
    );
  
    next();
  });

  AuthSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });

  export const User = model<TUser>('User',AuthSchema)