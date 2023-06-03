use("ecomm");

const criandoIndicesParaProdutos = db.products.createIndex({nome: 1});
const criandoIndicesParaCategorias = db.products.createIndex({categoria: 1});

console.log(criandoIndicesParaProdutos, criandoIndicesParaCategorias);