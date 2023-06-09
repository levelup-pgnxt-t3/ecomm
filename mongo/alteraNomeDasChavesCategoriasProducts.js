use("ecomm")

let alteraChavesCategoriasProducts = db.products.updateMany({},
  {$rename: {"DESCRIÇÃO": "DESCRICAO", "PREÇO UNITÁRIO": "PRECO", "QUANTIDADE EM ESTOQUE": "ESTOQUE"}});

  console.log(alteraChavesCategoriasProducts);
