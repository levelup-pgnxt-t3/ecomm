use("ecomm");

const accountId = new ObjectId("648075b1818f4290c8107964");

db.orders.aggregate([
    {
        $match: { "account.accountId": accountId }
    },

    {
        $group: {
            _id: null,
            total_quantidade: { $sum: { $sum: "$itens.quantidade" } },

            montante_total: {
                $sum: {
                    $sum: {
                        $map: {
                            input: "$itens",
                            as: "item",
                            in: { $multiply: ["$$item.quantidade", "$$item.precoUnitario"] }
                        }
                    }
                }
            },

            montante_descontos: {
                $sum: {
                    $sum: {
                        $map: {
                            input: "$itens",
                            as: "item",
                            in: { $multiply: ["$$item.precoUnitario", "$$item.desconto"] }
                        }
                    }
                }
            }
        }
    }
]);

