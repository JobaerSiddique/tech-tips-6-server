import { z } from "zod";



const createUserZod = z.object({
    body:z.object({
        name:z.string({message:"Name must be required"}),
        email:z.string().email({message:"Invalid email"}),
        password:z.string(),
        phone:z.string({message:"Invalid phone number"})
       
    })
})

export const AuthZod = {
    createUserZod
}