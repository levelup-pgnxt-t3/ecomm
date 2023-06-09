use("ecomm")

db.createCollection("accounts", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["_id", "username", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
          properties: {
            _id: {
               bsonType: "objectId"
            },
             username: {
                bsonType: "string",
                minLength: 5
             },
             email: {
                bsonType: "string",
                minLength: 5
             },
             senha: {
                bsonType: "string",
                minLength: 5
             },
             dataCriacao: {
                bsonType: "date"
             },
             cpf: {
                bsonType: "string",
                pattern: "^[0-9]{11}$"
             },
             telefone: {
                bsonType: "string",
                minLength: 10
             },
             endereco: {
                bsonType: "object",
                required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
                properties: {
                   bairro: {
                      bsonType: "string",
                      minLength: 1
                   },
                   rua: {
                      bsonType: "string",
                      minLength: 1
                   },
                   numero: {
                      bsonType: "string",
                      minLength: 1
                   },
                   complemento: {
                      bsonType: "string"
                   },
                   cep: {
                      bsonType: "string",
                      pattern: "^[0-9]{8}$"
                   },
                   cidade: {
                      bsonType: "string",
                      minLength: 5
                   },
                   uf: {
                      bsonType: "string",
                      pattern: "^[A-Z]{2}$"
                   }
                },
                additionalProperties: false
             }
          },
          additionalProperties: false
       }
    }
 })