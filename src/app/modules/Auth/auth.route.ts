import express from 'express';
import { AuthController } from './auth.controller';
import validationZod from '../../middleware/validateZod';
import { AuthZod } from './auth.zod';
import Auth from '../../middleware/auth';
import { USER_ROLE } from './auth.constant';

const router = express.Router()


router.post('/register',validationZod(AuthZod.createUserZod),AuthController.createUser)
router.post('/login',AuthController.login);
router.get('/',Auth(USER_ROLE.user,USER_ROLE.admin),AuthController.getUser)





export const AuthRoutes = router