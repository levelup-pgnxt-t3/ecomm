use("ecomm");

const produtosPorCategoria = db.categories.find({$or: [{categoria: "LIVROS"}, {categoria: "CELULARES"}]});

console.log(produtosPorCategoria);