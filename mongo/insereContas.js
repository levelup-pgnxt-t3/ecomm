/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */

use('ecomm')

const insertAccounts = db.accounts.insertMany([
  {
    "nome": "Juliana Eloá Brito",
    "email": "juliana.brito@gmail.com",
    "senha": "pass123",
    "dataCriacao": new Date(),
    "cpf": "12365478931",
    "telefone": "5551980289185", 
    "endereco": {
      "rua": "limoeiro",
      "numero": "255",
      "bairro": "centro",
      "cidade": "porto alegre",
      "complemento": "apartamento 310",
      "CEP": "12345",
      "UF": "RS"
    }
  },
  {
    "nome": "Roberto Antonio Silva",
    "email": "roberto.silva@gmail.com",
    "senha": "pass12334",
    "dataCriacao": new Date(),
    "cpf": "12345678912",
    "telefone": "5551680289189", 
    "endereco": {
      "rua": "polonia",
      "numero": "775",
      "bairro": "centro",
      "cidade": "camaqua",
      "complemento": "apartamento 20",
      "CEP": "54321",
      "UF": "RS"
    }
  },

])

