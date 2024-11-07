// routes/blogRoutes.js
import express from 'express';
import * as blogController from '../controllers/blogController.js'; 

const router = express.Router();

router.post('/createBlog', blogController.createBlog);
router.get('/readBlog', blogController.readBlog);
router.put('/updateBlog', blogController.updateBlog);
router.delete('/deleteBlog', blogController.deleteBlog);

export default router;
