use("ecomm");

<<<<<<< HEAD
const indicesUm = db.categories.createIndex({ nome: 1 })
const indicesDois = db.categories.createIndex({ categoria: 1 })

console.log("índice 1:", indicesUm)
console.log("índice 2:", indicesDois)

//Professor, não entendi muito bem o pq da criação desses índices. Seria legal uma explicação sobre isso.
=======
const index1result = db.categories.createIndex({ nome: 1 })
const index2result = db.categories.createIndex({ categoria: 1 })

console.log("index1result", index1result)
console.log("index2result", index2result)
>>>>>>> 572562ec47f97cf93f3fd1fc2ac11a781908805b
