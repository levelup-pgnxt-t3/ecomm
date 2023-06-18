use("ecomm")

const alterarConta = db.runCommand(
    {
        collMod: "accounts",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                additionalProperties: false,
                required: ["_id", "nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereço"],
                properties: {
                    _id: {
                        bsonType:"objectId",
                        description: "Informe o id único do usuário."
                    },
                    nome: {
                        bsonType: "string",
                        description: "Informe o nome do usuário.",
                        minLength: 5
                    },
                    email: {
                        bsonType: "string",
                        description: "Informe o email do usuário.",
                        minLength: 5,
                        pattern: "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$"
                    },
                    senha: {
                        bsonType: "string",
                        description: "Informe a senha do usuário.",
                        minLength: 5
                    },
                    dataCriacao: {
                        bsonType: "date",
                        description: "Informe a data de criação do usuário."
                    },
                    cpf: {
                        bsonType: "string",
                        description: "Informe o cpf do usuário.",
                        minLength: 11,
                        maxLength: 11,
                        pattern: "^[0-9]{11}$"
                    },
                    telefone: {
                        bsonType: "string",
                        description: "Informe o telefone do usuário.",
                        minLength: 10,
                        pattern: "^[0-9]{10,}$"
                    },
                    endereço: {
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
                                minLength: 1,
                                pattern: "^(\\d+|S/N)$"
                            },
                            complemento: {
                                bsonType: "string",
                                description: "Informe o complemento deste endereço.",
                            },
                            cep: {
                                bsonType: "string",
                                description: "Informe o cep deste endereço.",
                                minLength: 8,
                                pattern: "^[0-9]{8}$"
                            },
                            cidade: {
                                bsonType: "string",
                                description: "Informe o bairro deste endereço.",
                                minLength: 5
                            },
                            uf: {
                                bsonType: "string",
                                description: "Informe o estado deste endereço.",
                                pattern: "^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$"
                            }
                        }
                    }
                } 
            }
        }
    }
)