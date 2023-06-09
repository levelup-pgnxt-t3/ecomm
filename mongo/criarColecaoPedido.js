use("ecomm")

let criaColecaoDePedidos = db.createCollection("orders",{
  validator:{
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "dataPedido", "account", "enderecoEntrega", "itens"],
      properties:{
        _id: {
          bsonType: "objectId",
          description: "Insira um ID válido."
        },
        dataPedido:{
          bsonType: "date",
          description: "Insira uma data válida."
        },
        account:{
          bsonType: "object",
          required: ["accountId", "nome_cliente"],
          properties: {
            accountId:{
              bsonType: "objectId",
              description:"Insira um ID de conta válido."
            },
            nome_cliente:{
              bsonType: "string",
              minLength: 5,
              description:"Insira um nome válido."
            }
          }
        },
        enderecoEntrega:{
          bsonType: "object",
          required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
          properties: {
            bairro:{
              bsonType: "string",
              minLength: 1,
              description:"Insira um bairro válido."
            },
            rua:{
              bsonType: "string",
              minLength: 1,
              description:"Insira um nome de rua válida."
            },
            numero:{
              bsonType: "string",
              minLength: 1,
              description:"Insira um número de casa válido."
            },
            complemento:{
              bsonType: "string",
              description:"Insira um endereço válido."
            },
            cep:{
              bsonType: "string",
              minLength: 8,
              maxLength: 8,
              description:"Insira um endereço válido."
            },
            cidade:{
              bsonType: "string",
              minLength: 5,
              description:"Insira uma cidade válida."
            },
            uf:{
              bsonType: "string",
              minLength: 2,
              maxLength: 2,
              description:"Insira um endereço correto."
            }
          }
        },
        itens:{
          bsonType: "array",
          minItems: 1,
          items:{
            bsonType: "object",
            required: ["productId", "quantidade", "precoUnitario"],
            properties:{
              productId:{
                bsonType:"objectId",
                description:"Insira um ID válida para produto."
              },
              quantidade:{
                bsonType: "int",
                minimum: 1,
                description: "Insira um valor válido."
              },
              precoUnitario:{
                bsonType: "number",
                minimum: 0,
                exclusiveMinimum: true,
                description: "Insira um valor válido."
              },
              desconto:{
                bsonType: "number",
                minimum: 0,
                exclusiveMinimum: true,
                description: "Insira um valor válido."
              }
            }
          }
        }
      },
      additionalProperties: false
    }
  }
})


console.log(criaColecaoDePedidos);