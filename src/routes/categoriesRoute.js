import express from 'express';
import CategoriasController from '../controllers/categoriesController.js';

const router = express.Router();

router
  .get('/api/categories', CategoriasController.listarCategorias)
  .get('/api/categories/:id', CategoriasController.listarCategoriasId)
  .post('/api/categories', CategoriasController.cadastrarCategoria)
  .delete('/api/categories/:id', CategoriasController.excluirCategoria);

export default router;
