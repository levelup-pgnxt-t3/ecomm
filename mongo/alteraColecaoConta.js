use("ecomm")

let alteraColecaoConta = db.runCommand(({collMod: "accounts",
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
          pattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
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
          pattern: "^[0-9]{11}$",
          description: "Insira um cpf válido."
        },
        telefone:{
          bsonType: "string",
          pattern: "^[0-9]+$",
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
              pattern: "^(\\d+|S/N)$",
              description:"Insira um número de casa válido."
            },
            complemento:{
              bsonType: "string",
              description:"Insira um endereço válido."
            },
            cep:{
              bsonType: "string",
              pattern:  "^[0-9]{8}$",
              description:"Insira um endereço válido."
            },
            cidade:{
              bsonType: "string",
              minLength: 5,
              description:"Insira uma cidade válida."
            },
            uf:{
              bsonType: "string",
              pattern: "^(AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO)$",
              description:"Insira um endereço correto."
            }
          }
        },
      },
      additionalProperties: false
    }
  }
}))

console.log(alteraColecaoConta)