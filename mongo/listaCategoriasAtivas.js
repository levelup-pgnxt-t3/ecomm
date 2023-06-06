use("ecomm");

let activeCategories = db.categories.find({"status": "ATIVA"});
console.log(activeCategories);

