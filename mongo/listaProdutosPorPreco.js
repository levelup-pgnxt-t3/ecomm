use("ecomm");

<<<<<<< HEAD
const produtos = db.products.find({ $and: [{ preco: { $gte: 1000 } }, { preco: { $lte: 2000 } }] },
    { nome: 1, preco: 1 }
);

console.log(produtos);
=======
const products = db.products.find({$and: [
    {preco: { $gte: 1000 }},
    {preco: { $lte: 2000 }}
  ]},
  {nome: 1, preco: 1}
);

console.log(products);
>>>>>>> 572562ec47f97cf93f3fd1fc2ac11a781908805b
