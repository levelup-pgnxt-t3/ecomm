/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
use("ecomm");

const products = db.products.find({
  $or: [{ categoria: "LIVROS" }, { categoria: "CELULARES" }],
});

console.log(products);