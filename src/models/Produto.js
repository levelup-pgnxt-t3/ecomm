import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^(?!\\d)\\w{3,}$/.test(value);
        },
        message:
          "O nome do produto é inválido. Deve ter mais de 3 caracteres e não pode começar com números.",
      },
    },
    slug: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9-]+$/.test(value);
        },
        message:
          "A slug do produto é inválida. Deve conter apenas letras maiúsculas ou minúsculas, números e hífens.",
      },
    },
    precoUnitario: {
      type: Number,
      required: true,
      min: 0.01,
    },
    quantidadeEstoque: {
      type: Number,
      required: true,
      min: 1,
      max: 10000,
    },
    categoriaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categorias",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const produtos = mongoose.model("products", produtoSchema);

export default produtos;