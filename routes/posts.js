import express from "express";

import { getPostsBySearch, getPost, getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

//http://localhost:5000/posts

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost); //patch is used for updating existing value
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;