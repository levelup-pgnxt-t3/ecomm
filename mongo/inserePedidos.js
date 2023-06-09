use("ecomm")

let inserePedidosEmOrders = db.orders.insertMany([
  {
    _id: ObjectId(),
    dataPedido: ISODate("2023-06-08"),
    account: {
      accountId: ObjectId("60c9f25fe11a4718dc238b7f"),
      nome_cliente: "Maria Oliveira"
    },
    enderecoEntrega: {
      bairro: "Vila Nova",
      rua: "Avenida das Palmeiras",
      numero: "456",
      cep: "98765432",
      cidade: "Rio de Janeiro",
      uf: "RJ"
    },
    itens: [
      {
        productId: ObjectId(),
        quantidade: 3,
        precoUnitario: 8.5
      }
    ]
  },
  {
    _id: ObjectId(),
    dataPedido: ISODate("2023-06-09"),
    account: {
      accountId: ObjectId(),
      nome_cliente: "João da Silva"
    },
    enderecoEntrega: {
      bairro: "Centro",
      rua: "Rua das Flores",
      numero: "123",
      cep: "12345678",
      cidade: "São Paulo",
      uf: "SP"
    },
    itens: [
      {
        productId: ObjectId(),
        quantidade: 2,
        precoUnitario: 10.99
      },
      {
        productId: ObjectId(),
        quantidade: 1,
        precoUnitario: 5.99
      }
    ]
  }  
])