/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */

use("ecomm")

const insertOrders = db.orders.insertMany([
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
        productId: ObjectId("6479ed56fcf0289783661cf9"),
        quantidade: 1,
        precoUnitario: 3678.98,
      },
      {
        productId: ObjectId("6479ed56fcf0289783661cf8"),
        quantidade: 1,
        precoUnitario: 102.9,
      },
    ],
  },
  {
    dataPedido: new Date(),
    account: {
      accountId: ObjectId("648075b1818f4290c8107965"),
      nomeCliente: "Roberto Antonio Silva",
    },
    enderecoEntrega: {
        bairro: "centro",
        rua: "polonia",
        numero: "755",
        CEP: "54321",
        cidade: "camaqua",
        UF: "RS",
      },
    itens: [
      {
        productId: ObjectId("6479ed56fcf0289783661cf7"),
        quantidade: 1,
        precoUnitario: 2500,
      },
    ],
  },
]);



