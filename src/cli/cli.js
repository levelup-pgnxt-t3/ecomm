import CategoryService from './CategoryService.js';

const caminho = process.argv;

async function processarComando(argumento) {
  const comando = argumento[2];
  let result;
  let resultId;
  let insereCategoria;
  let atualizaCategoria;
  let excluiCategoria;
  switch (comando) {
    case '--listarCategorias':
      result = await CategoryService.findCategories();
      console.log(result);
      break;
    case '--recuperarCategoriaPorId':
      resultId = await CategoryService.findCategoriesById(argumento[3]);
      console.log(resultId);
      break;
    case '--inserirCategoria':
      insereCategoria = await CategoryService.createCategory(argumento[3]);
      console.log(insereCategoria);
      break;
    case '--atualizarCategoria':
      atualizaCategoria = await CategoryService.updateCategory(argumento[3], argumento[4]);
      console.log('response data:', atualizaCategoria);
      break;
    case '--excluirCategoria':
      excluiCategoria = await CategoryService.deleteCategory(argumento[3]);
      console.log(excluiCategoria);
      break;
    default:
      console.log('Comando inválido');
      break;
  }
}

processarComando(caminho);
