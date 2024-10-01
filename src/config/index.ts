import * as dotenv from 'dotenv'
dotenv.config()


export default{
    port:process.env.PORT ,
    database_url:process.env.DATABASE_URL,
    NODE_ENV:process.env.Node_env,
    bcrypt_salt_rounds:process.env.SALT
}