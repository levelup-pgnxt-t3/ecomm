/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
use("ecomm");

const result = db.products.updateMany({categoria: "LIVROS"}, {$set: {estoque: 0}});

console.log(result)