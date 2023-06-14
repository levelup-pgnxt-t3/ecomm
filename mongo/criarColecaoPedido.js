use('ecomm')

const createOrderCollection = db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["dataPedido", "account", "enderecoEntrega", "itens"],
      additionalProperties: false,
      properties: {
        dataPedido: {
          bsonType: "date",
          description: "informe corretamento a data do pedido",
        },
        account: {
          bsonType: "object",
          required: ["accountId", "nomeCliente"],
          additionalProperties: false,
          properties: {
            accountId: {
              bsonType: "objectId",
              description: "informe corretanete o id da conta",
            },
            nomeCliente: {
              bsonType: "string",
              description: "informe corretanete o nome do cliente",
            },
          },
        },
        enderecoEntrega: {
          bsonType: "object",
          required: ["bairro", "rua", "numero", "CEP", "cidade", "UF"],
          additionalProperties: false,
          properties: {
            bairro: {
              bsonType: "string",
              minLength: 1,
            },
            rua: {
              bsonType: "string",
              minLength: 1,
            },
            numero: {
              bsonType: "string",
              minLength: 1,
            },
            complemento: {
              bsonType: ["string", "null"],
            },
            CEP: {
                bsonType: "string",
                minLength: 5,
                maxLength: 5
            },
            cidade: {
              bsonType: "string",
              minLength: 5,
            },
            UF: {
                bsonType: "string",
                minLength: 2,
                maxLength: 2
            },
          },
        },
        itens: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["productId", "quantidade", "precoUnitario"],
            additionalProperties: false,
            properties: {
              productId: {
                bsonType: "objectId",
                description: "informe corretamente o id do produto",
              },
              quantidade: {
                bsonType: "int",
                minimum: 1,
                description: "informe corretamente a quantidade",
              },
              desconto: {
                bsonType: "number",
                minimum: 0,
                exclusiveMinimum: true,
                description: "informe corretamente o valor do desconto",
              },
              precoUnitario: {
                bsonType: "number",
                minimum: 0,
                exclusiveMinimum: true,
                description: "informe corretamente o preco por unidade",
              },
            },
          },
        },
      },
    },
  },
});