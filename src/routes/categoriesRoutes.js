import express from 'express';
import CategoryController from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/api/categories', CategoryController.listCategories);
router.post('/api/categories', CategoryController.createCategory);
router.get('/api/categories/:id', CategoryController.getCategoryById);
router.put('/api/categories/:id', CategoryController.updateCategory);

export default router;
