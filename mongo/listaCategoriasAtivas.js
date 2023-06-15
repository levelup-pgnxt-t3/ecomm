/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
use("ecomm");

let activeCategories = db.categories.find({"status": "ATIVA"});
console.log(activeCategories);

