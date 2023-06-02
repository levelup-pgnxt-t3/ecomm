use("ecomm")
let criaIndicesUnicosAosProdutos = db.products.createIndex(
  {'ÍNDICE': 1}, {unique: true, sparse: true, expireAfterSeconds: 3600}
);

console.log(criaIndicesUnicosAosProdutos);