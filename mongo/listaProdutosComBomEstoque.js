use("ecomm")
var produtosComBomEstoque = db.products.find(
    {"QUANTIDADE EM ESTOQUE": { $gt: 2}}
);

console.log(produtosComBomEstoque);