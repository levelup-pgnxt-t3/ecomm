use("ecomm")

let insereContasNaColecaoAccounts = db.accounts.insertMany([
  {
  "_id": ObjectId(),
  "nome": "John Doe",
  "email": "johndoe@example.com",
  "senha": "password123",
  "dataCriacao": ISODate("2021-06-09T00:00:00Z"),
  "cpf": "12345678901",
  "telefone": "(12) 3456-7890",
  "endereco": {
    "bairro": "Centro",
    "rua": "Rua Principal",
    "numero": "123",
    "complemento": "Apto 4",
    "cep": "12345678",
    "cidade": "São Paulo",
    "uf": "SP"
  }
},
{
  "_id": ObjectId(),
  "nome": "Jane Smith",
  "email": "janesmith@example.com",
  "senha": "pass123",
  "dataCriacao": ISODate("2021-07-15T00:00:00Z"),
  "cpf": "98765432109",
  "telefone": "(98) 98765-4321",
  "endereco": {
    "bairro": "Vila Nova",
    "rua": "Avenida Central",
    "numero": "456",
    "cep": "87654321",
    "cidade": "Rio de Janeiro",
    "uf": "RJ"
  }
},
{
  "_id": ObjectId(),
  "nome": "Bob Johnson",
  "email": "bobjohnson@example.com",
  "senha": "abc123",
  "dataCriacao": ISODate("2021-08-22T00:00:00Z"),
  "cpf": "65432109876",
  "telefone": "(98) 98765-4321",
  "endereco": {
    "bairro": "Lagoa",
    "rua": "Rua das Flores",
    "numero": "789",
    "complemento": "Casa",
    "cep": "56789012",
    "cidade": "Belo Horizonte",
    "uf": "MG"
  }
}
])

console.log(insereContasNaColecaoAccounts);