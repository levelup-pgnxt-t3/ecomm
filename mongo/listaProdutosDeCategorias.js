use("ecomm");
let listaPorCategoriasLivroCelular = db.products.find(
  {CATEGORIA: {$in: ['LIVROS','CELULARES']}});

console.log(listaPorCategoriasLivroCelular);