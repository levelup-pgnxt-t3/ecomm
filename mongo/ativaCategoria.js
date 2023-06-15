/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
use("ecomm")
let result = db.categories.updateOne({"nome": "ESPORTE"}, {$set: {"status": "ATIVA"}})
console.log(result)
