import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../../config";

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
        
    }
})



AuthSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
  
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

  export const Auth = model('User',AuthSchema)