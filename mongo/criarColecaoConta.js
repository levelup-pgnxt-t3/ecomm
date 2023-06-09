use("ecomm")

let criaColecaoDeContas = db.createCollection("accounts",{
  validator:{
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
      properties:{
        _id: {
          "bsonType": "objectId",
          "description": "Insira um ID válido."
        },
        nome:{
          bsonType: "string",
          minLength: 5,
          description: "Insira um nome válido."
        },
        email:{
          bsonType: "string",
          minLength: 5,
          description: "Insira um e-mail válido."
        },
        senha:{
          bsonType: "string",
          minLength: 5,
          description: "Insira uma senha válido."
        },
        dataCriacao:{
          bsonType: "date",
          description: "Insira uma data válida."
        },
        cpf:{
          bsonType: "string",
          minLength: 11,
          maxLength: 11,
          description: "Insira um cpf válido."
        },
        telefone:{
          bsonType: "string",
          minLength: 10,
          description: "Insira um telefone válido."
        },
        endereco:{
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
      },
      additionalProperties: false
    }
  }
})


console.log(criaColecaoDeContas);