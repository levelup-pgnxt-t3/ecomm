import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return /^(?!\d)\w{3,}$/.test(value);
                },
                message: "O nome da categoria é inválido. Deve ter mais de 3 caracteres e não pode começar com números."
            }
        },
        status: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const categorias = mongoose.model("categories", categoriaSchema)

export default categorias;