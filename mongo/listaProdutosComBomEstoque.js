use("ecomm");

<<<<<<< HEAD
const resultado = db.products.find({estoque: {$gte: 3}}, {nome: 1, estoque: 1});

console.log(resultado);
=======
const products = db.products.find({estoque: {$gte: 3}}, {nome: 1, estoque: 1});

console.log(products);
>>>>>>> 572562ec47f97cf93f3fd1fc2ac11a781908805b
