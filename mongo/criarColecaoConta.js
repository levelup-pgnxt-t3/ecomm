/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */

use('ecomm')

const createAccountCollection = db.createCollection("accounts",
{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["_id","nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
            "additionalProperties": false,
            properties:{
              _id: {
                bsonType: 'objectId',
                description: 'informe corretamente o id da conta'
              },
              nome:{
                bsonType: "string",
                description: "informe corretamente o nome de usuario da conta",
                minLength:5,
              },
              email:{
                bsonType: "string",
                description: "informe corretamente o email do usuario da conta",
                minLength:5,
              },
              senha:{
                bsonType: "string",
                minLength:5,
                description: "informe corretamente a senha do usuario da conta"
              },
                dataCriacao:{
                bsonType: "date",
                description: "informe corretamente o data de criacao da conta"
                },
                cpf:{
                bsonType: "string",
                description: "informe corretamente o cpf do usuario da conta",
                minLength:11,
                maxLength:11,
                },
                telefone: {
                    bsonType: "string",
                    description: "informe corretamente o telefone do usuario da conta",
                    minLength:10,
                },
                endereco:{
                    bsonType: "object",
                    required:["rua","numero","bairro","cidade","complemento","CEP", "UF"],
                    "additionalProperties": false,
                    properties:{
                        rua:{
                            bsonType: "string",
                            minLength:1,
                        },
                        numero:{
                            bsonType: "string",
                            minLength:1,
                        },
                        bairro:{
                            bsonType: "string",
                            minLength:1,
                        },
                        cidade:{
                            bsonType: "string",
                            minLength:5,
                        },
                        complemento:{
                            bsonType: ["string", "null"]},
                        CEP:{
                            bsonType: "string",
                            minLength:5,
                            maxLength:5,
                        },
                        UF: {
                            bsonType: "string",
                            minLength:2,
                            maxLength:2,
                        }
                    }
                },
            }
        }
    }
})


