use("ecomm")

const user = db.accounts.findOne({nome: "User1"});

const orderStatsResume = db.orders.aggregate([
    {
        $match: {
            "account.accountId": user._id
        }
    },
    {
        $unwind: "$itens"
    },
    {
        $group: {
          _id: user._id,
          qtd_total_pedidos: {
            $sum: {
                $sum: "$itens.quantidade"
            }
          },
          total_sem_desconto: {
            $sum: {
                $sum: {
                    $map: {
                        input: "$itens",
                        as: "item",
                        in: {$multiply: ["$$item.quantidade, $$item.precoUnitario"]}
                    }
                }
            }
          },
          total_descontos: {
            $sum: {
                $sum: {
                    $map: {
                        input: "$itens",
                        as: "item",
                        in: {$multiply: ["$$item.precoUnitario, $$item.desconto"]}
                    }
                }
            }
          }
        }
    }
])