use("ecomm")

let estatisticaUsuarioConsumo = db.orders.aggregate([
  {$match: {"account.accountId": ObjectId("6483a46d12fedf53b5302051") }},
  {$unwind: "$itens"},
  {
    $addFields:{
        qntd_total_de_itens: "$itens.quantidade",
        valor_total_sem_desconto: {$multiply: ["$itens.quantidade", "$itens.precoUnitario"]},
        valor_de_desconto: "$itens.desconto"
      }
  },
  {
    $group:{
      _id: "$account.accountId",
      soma_quantidade: {$sum: "$qntd_total_de_itens"},
      soma_total_sem_desconto: {$sum: "$valor_total_sem_desconto"},
      soma_valor_de_desconto: {$sum: "$valor_de_desconto"}
    }
  },
  {
    $project:{
      soma_quantidade: 1,
      soma_total_sem_desconto: 1,
      soma_valor_de_desconto: 1
    }
  }
])

console.log(estatisticaUsuarioConsumo);