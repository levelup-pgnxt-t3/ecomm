use("ecomm")

db.createCollection("orders", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["_id", "dataPedido"],
            properties: {
                _id: {
                    bsonType:"objectId",
                    description: "Informe o id único da categoria."
                },
                dataPedido: {
                    bsonType: "date",
                    description: "Informe o nome da categoria.",
                },
                account: {
                    bsonType: "object",
                    required: ["accountId", "nome"],
                    properties: {
                        accountId: {
                            bsonType: "objectId",
                            description: "Informe o id do usuário"
                        },
                        nome: {
                            bsonType: "string",
                            description: "Informe o nome do usuário",
                            minLength: 5
                        }
                    }
                },
                enderecoEntrega: {
                    bsonType: "object",
                    required: ["bairro", "rua", "numero", "complemento", "cep", "cidade", "uf"],
                    properties: {
                        bairro: {
                            bsonType: "string",
                            description: "Informe o bairro deste endereço.",
                            minLength: 1
                        },
                        rua: {
                            bsonType: "string",
                            description: "Informe a rua deste endereço.",
                            minLength: 1
                        },
                        numero: {
                            bsonType: "string",
                            description: "Informe o número deste endereço.",
                            minLength: 1
                        },
                        complemento: {
                            bsonType: "string",
                            description: "Informe o complemento deste endereço.",
                        },
                        cep: {
                            bsonType: "string",
                            description: "Informe o cep deste endereço.",
                            minLength: 8
                        },
                        cidade: {
                            bsonType: "string",
                            description: "Informe o bairro deste endereço.",
                            minLength: 5
                        },
                        uf: {
                            bsonType: "string",
                            description: "Informe o estado deste endereço.",
                            minLength: 2,
                            maxLength: 2
                        }
                    }
                },
                itens: {
                    bsonType: "array",
                    required: ["productId", "quantidade", "precoUnitario"],
                    properties: {
                        productId: {
                            bsonType: "objectId",
                            description: "Informe corretamente o id do produto."
                        },
                        quantidade: {
                            bsonType: "int",
                            description: "Informe a quantidade de produtos.",
                            minimum: 1,
                        },
                        desconto: {
                            bsonType: ["int", "double"],
                            description: "Informe o desconto maior que 0%.",
                            minimum: 0,
                            exclusiveMinimum: true,
                        },
                        precoUnitario: {
                            bsonType: ["int", "double"],
                            description: "Informe o preço da unidade do produto.",
                            minimum: 0,
                            exclusiveMinimum: true,
                        }
                    }
                }
            } 
        }
    }
})