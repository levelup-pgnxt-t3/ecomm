use("ecomm")

db.createCollection("accounts", {
    validator: {
        $jsonSchema:{
            "bsonType": "object",
            "additionalProperties": false,
            "required": ["_id", "nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereço"],
            "properties": {
                "_id": {
                    "bsonType":"objectId",
                    "description": "Informe o id único do usuário."
                },
                "nome": {
                    "bsonType": "string",
                    "description": "Informe o nome do usuário.",
                    "minLength": 5
                },
                "email": {
                    "bsonType": "string",
                    "description": "Informe o email do usuário.",
                    "minLength": 5
                },
                "senha": {
                    "bsonType": "string",
                    "description": "Informe a senha do usuário.",
                    "minLength": 5
                },
                "dataCriacao": {
                    "bsonType": "date",
                    "description": "Informe a data de criação do usuário."
                },
                "cpf": {
                    "bsonType": "string",
                    "description": "Informe o cpf do usuário.",
                    "minLength": 11,
                    "maxLength": 11
                },
                "telefone": {
                    "bsonType": "string",
                    "description": "Informe o telefone do usuário.",
                    "minLength": 10
                },
                "endereço": {
                    "bsonType": "object",
                    "required": ["bairro", "rua", "numero", "complemento", "cep", "cidade", "uf"],
                    "properties": {
                        "bairro": {
                            "bsonType": "string",
                            "description": "Informe o bairro deste endereço.",
                            "minLength": 1
                        },
                        "rua": {
                            "bsonType": "string",
                            "description": "Informe a rua deste endereço.",
                            "minLength": 1
                        },
                        "numero": {
                            "bsonType": "string",
                            "description": "Informe o número deste endereço.",
                            "minLength": 1
                        },
                        "complemento": {
                            "bsonType": "string",
                            "description": "Informe o complemento deste endereço.",
                        },
                        "cep": {
                            "bsonType": "string",
                            "description": "Informe o cep deste endereço.",
                            "minLength": 8
                        },
                        "cidade": {
                            "bsonType": "string",
                            "description": "Informe o bairro deste endereço.",
                            "minLength": 5
                        },
                        "uf": {
                            "bsonType": "string",
                            "description": "Informe o estado deste endereço.",
                            "minLength": 2,
                            "maxLength": 2
                        }
                    }
                }
            } 
        }
    }
})