import { Router } from 'express';
import postRoute from './post.router.js';

const routes = new Router();

routes.use('/post', postRoute);

export default routes;
