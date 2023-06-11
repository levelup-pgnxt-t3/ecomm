use("ecomm");

const insertedCorrectOrders = db.orders.insertMany([
	{
		dataPedido: new Date(),
		account: {
			accountId: ObjectId('6483c8bd7a5f7b2af4ffc0c0'),
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
				productId: ObjectId('647956e57bfb756efdaa868d'),
				quantidade: 1,
				precoUnitario: NumberDecimal('1276.79'),
				desconto: NumberDecimal('276.79'),
			},
			{
				productId: ObjectId('647956e57bfb756efdaa868e'),
				quantidade: 1,
				precoUnitario: NumberDecimal('95.17'),
			},
		],
	},
	{
		dataPedido: new Date(),
		account: {
			accountId: ObjectId('6483c8bd7a5f7b2af4ffc0be'),
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
				productId: ObjectId('64795753e68ce27f83a8c841'),
				quantidade: 3,
				precoUnitario: NumberDecimal('1276.79'),
			},
		],
	},
	{
		dataPedido: new Date(),
		account: {
			accountId: ObjectId('6483c8bd7a5f7b2af4ffc0c0'),
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
				productId: ObjectId('647956e57bfb756efdaa868e'),
				quantidade: 1,
				precoUnitario: NumberDecimal('3678.98'),
			},
		],
	},
]);

console.log(insertedCorrectOrders);
