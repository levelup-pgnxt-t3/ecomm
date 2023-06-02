<<<<<<< HEAD
use("ecomm")

const categorias = db.products.find({ $or: [{ categoria: "LIVROS" }, { categoria: "CELULARES" }] })

console.log(categorias)
=======
use("ecomm");

const products = db.products.find({
  $or: [{ categoria: "LIVROS" }, { categoria: "CELULARES" }],
});

console.log(products);
>>>>>>> 572562ec47f97cf93f3fd1fc2ac11a781908805b
