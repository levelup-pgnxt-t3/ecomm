
//01 - inserindo pedido 
db.orders.insertOne(
  {
  dataPedido: new Date(),
  account: {
    accountId: ObjectId("648075b1818f4290c8107964"),
    nomeCliente: "Juliana Eloá Brito",
  },
  enderecoEntrega: {
      bairro: "centro",
      rua: "limoeiro",
      numero: "255",
      CEP: "12345",
      cidade: "porto alegre",
      UF: "RS",
    },
  itens: [
    {
      productId: ObjectId("6479ed04de2889b561119a41"),
      quantidade: 1,
      precoUnitario: 5939.1,
    },
    {
      productId: ObjectId("6479ed04de2889b561119a41"),
      quantidade: 1,
      precoUnitario: 5939.1,
    },
  ],
}

)

//02 - fazendo baixa do estoque nos produtos 

db.products.updateOne({
  NOME: 'Galaxy Tab S8',
  },{
  $set: {'QUANTIDADE EM ESTOQUE': 2},
})

db.orders.updateOne({
  itens: [{
       productId: '6479ed04de2889b561119a41'
   }], 
 }, { $set: {itens: [
     {quantidade: 2}
     ]}}
 )