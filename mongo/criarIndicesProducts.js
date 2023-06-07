use("ecomm")
let criaIndicesUnicosAosProdutos = db.products.createIndex(
  {SLUG: 1}
);

//console.log(criaIndicesUnicosAosProdutos);
console.log(db.products.getIndexes());