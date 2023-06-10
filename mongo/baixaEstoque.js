use("ecomm")

const baixaEstoqueProduto = db.products.updateOne(
    {nome: "Galaxy Tab S8", estoque: {$gte: 2, $gte: 2}},
    {$inc: {estoque: -2}}
)

console.log(baixaEstoqueProduto)