use("ecomm")

const allAccounts = ([
    {
        "nome": "User1",
        "email": "user1@mail.com",
        "senha": "123456",
        "dataCriacao": new Date(),
        "cpf": "39382112022",
        "telefone": "(83)99999-9999",
        "endereço": {
            "bairro": "Centro",
            "rua": "Rua Major João Gomes",
            "numero": "21",
            "complemento": "ap 203",
            "cep": "55150-050",
            "cidade": "Belo Jardim",
            "uf": "PE"
        }
    },
    {
        "nome": "User2",
        "email": "user2@mail.com",
        "senha": "123456",
        "dataCriacao": new Date(),
        "cpf": "37928812096",
        "telefone": "(83)9999-9998",
        "endereço": {
            "bairro": "Bonfim",
            "rua": "Rua Adair Costa Antônio",
            "numero": "555",
            "complemento": "casa 4",
            "cep": "29047-032",
            "cidade": "Vitória",
            "uf": "ES"
        }
    },
    {
        "nome": "User3",
        "email": "user3@mail.com",
        "senha": "123456",
        "dataCriacao": new Date(),
        "cpf": "92623703000",
        "telefone": "(83)99999-9997",
        "endereço": {
            "bairro": "Pindorama",
            "rua": "Avenida São Sebastião",
            "numero": "21",
            "cep": "64215-261",
            "complemento": "s/ complemento",
            "cidade": "Parnaíba",
            "uf": "PI"
        }
    }
])

const inserAccounts = db.accounts.insertMany(allAccounts)
console.log(inserAccounts)