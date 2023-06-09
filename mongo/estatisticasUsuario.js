use("ecomm");

db.orders.aggregate([
    {
        $match: { "account.accountId": ObjectId("648075b1818f4290c8107964") }
    },

    {
        $group: {
            _id: null,
            quantidadeTotal: { $sum: { $sum: "$itens.quantidade" } },

            montante: {
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

            montanteDeDescontos: {
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

