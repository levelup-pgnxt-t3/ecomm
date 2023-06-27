/* eslint-disable no-underscore-dangle */
import { afterEach, beforeEach } from '@jest/globals';
import request from 'supertest';
import app from '../main.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /api/categorias', () => {
  it('Deve retornar uma lista de categorias', async () => {
    const resposta = await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-Type', /json/)
      .expect(200);
  });
});

let idResposta;
describe('POST em /api/categories', () => {
  it('Deve adicionar uma nova categoria', async () => {
    const resposta = await request(app)
      .post('/api/categories')
      .send({
        nome: 'Teste 123',
        status: 'ATIVA',
      })
      .expect(201);
    idResposta = resposta.body._id;
  });

  it('Deve nao adicionar nada ao passar o body vazio', async () => {
    await request(app).post('/api/categories').send({}).expect(400);
  });
});

describe('GET em /categories/id', () => {
  it('Deve retornar o recurso selecionado', async () => {
    await request(app).get(`/api/categories/${idResposta}`).expect(200);
  });
});

// Deleta o dado criado no teste
describe('DELETE em /api/categories/id', () => {
  it('Deletar o recurso adicionado', async () => {
    console.log(idResposta);
    await request(app).delete(`/api/categories/${idResposta}`).expect(200);
  });
});
