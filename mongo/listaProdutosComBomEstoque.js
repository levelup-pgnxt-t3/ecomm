use("ecomm");
var products = db.products.find({"quantidadeEmEstoque":{$gte: 3}});

var productFields = [];

products.forEach(element => {
    var product = {
        _id: element._id,
        nome: element.nome,
        estoque: element.quantidadeEmEstoque
    };
    productFields.push(product);
});

console.log(productFields);