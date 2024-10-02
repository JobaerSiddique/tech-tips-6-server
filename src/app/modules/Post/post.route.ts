import express from 'express';
import { PostController } from './post.controller';
import Auth from '../../middleware/auth';
import { USER_ROLE } from '../Auth/auth.constant';


const router = express.Router()


router.post('/createPost',Auth(USER_ROLE.user), PostController.createPostUser)






export const PostRoute = router;