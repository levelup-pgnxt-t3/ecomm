use("ecomm");

const goodStockNivelProducts = db.products.find({
	$and: [{ precoUnitario: { $gte: 1000 } }, { precoUnitario: { $lte: 2000 } }],
});

console.log(goodStockNivelProducts);
