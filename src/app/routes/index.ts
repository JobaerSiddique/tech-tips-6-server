import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { PostRoute } from "../modules/Post/post.route";


const router = Router();


const moduleRoutes = [
    {
        path:'/user',
        route:AuthRoutes
    },
    {
        path:'/post',
        route:PostRoute
    },
  
]


moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;