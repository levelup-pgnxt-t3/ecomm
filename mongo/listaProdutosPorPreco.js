use("ecomm")
let listaDeProdutosPorPreco = db.products.find(
  {$and: [ {'PREÇO UNITÁRIO': {$gte:1000}}, {'PREÇO UNITÁRIO': {$lte:2000}}]}, {_id: 1, NOME: 1, 'PREÇO UNITÁRIO': 1})
  
console.log(listaDeProdutosPorPreco);