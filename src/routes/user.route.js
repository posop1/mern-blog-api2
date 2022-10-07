import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const userRoute = new Router();

userRoute.post('/login', userController.login);
userRoute.get('/register', userController.register);
userRoute.get('/me', userController.getMe);

export default userRoute;
