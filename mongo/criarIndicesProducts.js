use("ecomm");

const nameIndex = db.products.createIndex({ nome: 1 });
const priceIndex = db.products.createIndex({ precoUnitario: 1 });
const categoryIndex = db.products.createIndex({ categoria: 1 });

console.log(db.products.getIndexes());
