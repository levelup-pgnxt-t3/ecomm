use("ecomm")
let upgradeDeEstoqueDosProdutosLivrosParaZero = db.products.updateMany(
  {CATEGORIA: 'LIVROS'}, {$set: {'QUANTIDADE EM ESTOQUE' : 0}}
);

console.log(upgradeDeEstoqueDosProdutosLivrosParaZero);