use("ecomm")

let decrescimoEmEstoque = db.products.updateOne(
  {$and: [{NOME:"Galaxy Tab S8"}, {ESTOQUE:{$gt: 0}}]},
  {$inc: {ESTOQUE: -2}}
)

console.log(decrescimoEmEstoque)