import express from 'express';
import categories from './categoriesRoute.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'ECOMM Alura' });
  });
  // para usar as outras rotas
  app.use(
    express.json(),
    categories,
  );
};

export default routes;
