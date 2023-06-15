/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
use("ecomm")

const downStock = db.products.updateOne(
  {nome: 'Galaxy Tab S8', estoque: {$gte: 2}},
  {$inc: {estoque: -2 }}
)
