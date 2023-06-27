import Categories from '../models/Category.js';

class CategoriasController {
  static listarCategorias = async (req, res) => {
    try {
      const categorias = await Categories.find().exec();
      res.status(200).json(categorias);
    } catch (err) {
      res.status(404).send({
        message: `${err.message} - falha ao buscar lista de categorias.`,
      });
    }
  };

  static listarCategoriasId = async (req, res) => {
    try {
      const { id } = req.params;
      const categorias = await Categories.findById(id).exec();
      if (categorias) {
        res.status(200).send(categorias);
      } else {
        res.status(404).send({ message: 'Categoria não encontrada.' });
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: `${err.message} - ID da categoria inválido` });
    }
  };

  static cadastrarCategoria = async (req, res) => {
    try {
      const categoria = new Categories(req.body);
      await categoria.save();
      res.status(201).send(categoria.toJSON());
    } catch (err) {
      res.status(400).send({
        message: `${err.message} - falha ao cadastrar categoria.`,
      });
    }
  };

  static excluirCategoria = async (req, res) => {
    const { id } = req.params;
    try {
      await Categories.findByIdAndDelete(id);
      return res.status(200).json({ message: 'categoria excluída' });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default CategoriasController;
