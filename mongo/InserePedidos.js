use("ecomm");

const allOfAccounts = db.accounts
	.find({
		$or: [
			{ usuario: "Filipe Garrote" },
			{ usuario: "Joaquim José" },
			{ usuario: "Roberto Carlos" },
		],
	})
	.toArray();

const filipeAccountId = allOfAccounts.find(
	(account) => account.usuario === "Filipe Garrote"
)._id;
const joaquimAccountId = allOfAccounts.find(
	(account) => account.usuario === "Joaquim José"
)._id;
const robertoAccountId = allOfAccounts.find(
	(account) => account.usuario === "Roberto Carlos"
)._id;

const allOfProducts = db.products
	.find({
		$or: [
			{ nome: "Notebook Samsung" },
			{ nome: "Sofá 3 lugares" },
			{ nome: "Clean Architecture" },
			{ nome: "Mesa de jantar 6 lugares" },
		],
	})
	.toArray();

const notebookId = allOfProducts.find(
	(product) => product.nome === "Notebook Samsung"
)._id;
const sofaId = allOfProducts.find(
	(product) => product.nome === "Sofá 3 lugares"
)._id;
const cleanArchitectureId = allOfProducts.find(
	(product) => product.nome === "Clean Architecture"
)._id;
const mesaId = allOfProducts.find(
	(product) => product.nome === "Mesa de jantar 6 lugares"
)._id;

const insertedCorrectOrders = db.orders.insertMany([
	{
		dataPedido: new Date(),
		account: {
			accountId: filipeAccountId,
			nomeCliente: "Filipe Garrote",
		},
		enderecoEntrega: {
			bairro: "Jd. Monte Kemel",
			rua: "Av. da Renovação",
			numero: "13",
			cep: "01313-13",
			complemento: "apto 50",
			cidade: "São Paulo",
			uf: "SP",
		},
		itens: [
			{
				productId: notebookId,
				quantidade: 1,
				precoUnitario: NumberDecimal("1276.79"),
				desconto: NumberDecimal("276.79"),
			},
			{
				productId: sofaId,
				quantidade: 1,
				precoUnitario: NumberDecimal("95.17"),
			},
		],
	},
	{
		dataPedido: new Date(),
		account: {
			accountId: joaquimAccountId,
			nomeCliente: "Joaquim José",
		},
		enderecoEntrega: {
			bairro: "Alegria",
			rua: "Av. da Vitória",
			numero: "13",
			cep: "01313-13",
			complemento: "apto 50",
			cidade: "São Paulo",
			uf: "SP",
		},
		itens: [
			{
				productId: cleanArchitectureId,
				quantidade: 3,
				precoUnitario: NumberDecimal("1276.79"),
			},
		],
	},
	{
		dataPedido: new Date(),
		account: {
			accountId: robertoAccountId,
			nomeCliente: "Roberto Carlos",
		},
		enderecoEntrega: {
			bairro: "Felicidade",
			rua: "Av. da Democracia",
			numero: "13",
			cep: "01313-13",
			cidade: "São Paulo",
			uf: "SP",
		},
		itens: [
			{
				productId: mesaId,
				quantidade: 1,
				precoUnitario: NumberDecimal("3678.98"),
			},
		],
	},
]);

console.log(insertedCorrectOrders);
