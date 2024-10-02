import * as dotenv from 'dotenv'
dotenv.config()


export default{
    port:process.env.PORT ,
    database_url:process.env.DATABASE_URL,
    NODE_ENV:process.env.Node_env,
    bcrypt_salt_rounds:process.env.SALT,
    JWT_ACCESS_TOKEN:process.env.Jwt_access_token,
    JWT_REFRESH_TOKEN:process.env.Jwt_refresh_token,
    JWT_ACCESS_EXPIRE:process.env.Jwt_access_Expire,
    JWT_REFRESH_EXPIRE:process.env.Jwt_refresh_Expire
}