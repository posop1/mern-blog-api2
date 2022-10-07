import { Router } from 'express';
import postController from '../controllers/post.controller.js';

const postRoute = new Router();

postRoute.post('/', postController.create);
postRoute.get('/', postController.getAll);
postRoute.get('/:id', postController.getOne);
postRoute.put('/:id', postController.update);
postRoute.delete('/:id', postController.delete);

export default postRoute;
