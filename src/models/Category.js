import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, match: /^[A-z][A-z)-9]{3,}/, required: true },
  status: { type: String, required: true },
});

const categories = mongoose.model('categories', CategoriesSchema);

export default categories;
