use("ecomm")

const allOrders = [
    {
        "dataPedido": new Date(),
        "account": {
            "accountId": ObjectId('6484dda4616770e4f6849ebf'),
            "nome": "User1"
        },
        "enderecoEntrega": {
            "bairro": "Centro",
            "rua": "Rua Major João Gomes",
            "numero": "21",
            "complemento": "ap 203",
            "cep": "55150-050",
            "cidade": "Belo Jardim",
            "uf": "PE"
        },
        itens: [{
            "productId": ObjectId('6484c8a94e9f88c64089603e'),
            "quantidade": 1,
            "desconto": 0.10,
            "precoUnitario": NumberDecimal('3523')
        }]
    },
    {
        "dataPedido": new Date(),
        "account": {
            "accountId": ObjectId('6484debcd6aa5b080a5e1a53'),
            "nome": "User2"
        },
        "enderecoEntrega": {
            "bairro": "Bonfim",
            "rua": "Rua Adair Costa Antônio",
            "numero": "555",
            "complemento": "casa 4",
            "cep": "29047-032",
            "cidade": "Vitória",
            "uf": "ES"
        },
        itens: [{
            "productId": ObjectId('6484c8a94e9f88c64089603f'),
            "quantidade": 2,
            "desconto": 0.15,
            "precoUnitario": NumberDecimal('2500')
        }]
    }
]

const inserOrders = db.orders.insertMany(allOrders)