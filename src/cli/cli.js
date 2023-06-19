import CategoryService from "./CategoryService.js";

const caminho = process.argv;

async function processarComando(argumento){
  const comando = argumento[2]
  switch(comando){
    case "--listarCategorias":
      const result = await CategoryService.findCategories();
      console.log(result);
      break
    case "--recuperarCategoriaPorId":
      const resultId = await CategoryService.findCategoriesById(4);
      console.log(resultId);
      break
    case "--inserirCategoria":
      const insereCategoria = await CategoryService.createCategory(argumento[3]);
      console.log(insereCategoria)
    case "--atualizarCategoria":
      const atualizaCategoria = await CategoryService.updateCategory(argumento[3],argumento[4]);
      console.log('response data:', atualizaCategoria)
  }
}

processarComando(caminho)