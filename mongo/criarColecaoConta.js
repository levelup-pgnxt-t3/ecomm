use("ecomm");

db.createCollection("accounts", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: [
				"usuario",
				"email",
				"senha",
				"dataCriacao",
				"cpf",
				"telefone",
				"endereço",
			],
			additionalProperties: false,
			properties: {
				usuario: {
					bsonType: "string",
					minLength: 5,
				},
				email: {
					bsonType: "string",
					minLength: 5,
				},
				senha: {
					bsonType: "string",
					minLength: 5,
				},
				dataCriacao: {
					bsonType: "date",
				},
				cpf: {
					bsonType: "string",
					minLength: 11,
					maxLength: 11,
				},
				telefone: {
					bsonType: "string",
					minLength: 10,
				},
				endereço: {
					bsonType: "object",
					required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
					additionalProperties: false,
					properties: {
						bairro: {
							bsonType: "string",
							minLength: 1,
						},
						rua: {
							bsonType: "string",
							minLength: 1,
						},
						numero: {
							bsonType: "string",
							minLength: 1,
						},
						complemento: {
							bsonType: "string",
						},
						cep: {
							bsonType: "string",
							minLength: 8,
							maxLength: 8,
						},
						cidade: {
							bsonType: "string",
							minLength: 5,
						},
						uf: {
							bsonType: "string",
							minLength: 2,
							maxLength: 2,
						},
					},
				},
			},
		},
	},
});
