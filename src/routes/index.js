import { Router } from 'express';
import postRoute from './post.router.js';
import userRoute from './user.route.js';

const routes = new Router();

routes.use('/post', postRoute);
routes.use('/auth', userRoute);

export default routes;
