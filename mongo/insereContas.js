db.use("ecomm");

db.accounts.insertMany([{
    nome: "Bival",
    email: "bival@teste.com",
    senha: "12345",
    data_criacao: new Date(),
    cpf: "15632871029",
    telefone: "4999999999",
    endereco:{
        bairro: "B",
        rua: "R",
        numero: "1",
        cep: "88888888",
        cidade: "Terezinha",
        uf: "MG"
    }
},
{
    nome: "Ariel",
    email: "Ariel@teste.com",
    senha: "54321",
    data_criacao: new Date(),
    cpf: "06314901081",
    telefone: "51988888888",
    endereco:{
        bairro: "BC",
        rua: "Q",
        numero: "2",
        cep: "99999999",
        cidade: "Cachoeiras de Itapemirim",
        uf: "ES"
    }
},
{
    nome: "Gwen Stacy",
    email: "gwen@teste.com",
    senha: "gwen_verse",
    data_criacao: new Date(),
    cpf: "85938892040",
    telefone: "62977777777",
    endereco:{
        bairro: "T",
        rua: "FA",
        numero: "46",
        cep: "66666666",
        cidade: "São T",
        uf: "PR"
    }
}
]);