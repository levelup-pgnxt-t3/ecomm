use("ecomm");
var products = db.products.find(
    {$and: 
    [
        {"precoUnitario":{$gte: 1000}},
        {"precoUnitario":{$lte: 2000}}
    ]});

var productFields = [];

products.forEach(element => {
    var product = {
        _id: element._id,
        nome: element.nome,
        estoque: element.precoUnitario
    };
    productFields.push(product);
});

console.log(productFields);