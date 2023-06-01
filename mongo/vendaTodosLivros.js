use("ecomm");
var books = db.products.find({"categoria":"LIVROS"}).toArray();
console.log(books);

var productFields = [];

books.forEach(element => {
    var product = {
        _id: element._id,
        nome: element.nome,
        estoque: element.precoUnitario
    };
    productFields.push(product);
});

//console.log(productFields);
console.log("Atualizando livros");

productFields.forEach(element => {
    db.products.updateOne({nome: element.nome},{$set: {quantidadeEmEstoque: 0}});
});


/*
---------- OBS IMPORTANTE -----------
Existe um problema onde ao tentar buscar os dados contidos na variável books e usando um foreach
direto nesse objeto, temos um problema, ele me retorna que o objeto não é iterável e 
não consigo atualizar.
PERGUNTAR: A variável books é que tipo de objeto? É um cursor ou um array de produtos?
*/

//db.products.updateOne({nome: books[0].nome},{$set: {quantidadeEmEstoque: 0}});
/*books.forEach(element => {
    db.products.updateOne({_id: element._id},{$set: {quantidadeEmEstoque: 0}});
});*/

//books = db.products.find({"categoria":"LIVROS"});
//console.log(books);