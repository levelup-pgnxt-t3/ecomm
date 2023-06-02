use("ecomm");
let result = db.categories.update({nome: "ESPORTE"}, {$set: {status: "ATIVA"}});
console.log(result);