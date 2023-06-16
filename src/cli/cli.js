import CategoryService from "./CategoryService.js";

function processarComando() {
    const argsLinhaDeComando = process.argv
    const comando = argsLinhaDeComando[2]
    switch (comando) {
        case '--listarCategorias':
          CategoryService.findCategories()
            .then((categorias) => {
              console.log('Status Code:', categorias.statusCode);
              console.log('Categorias:', categorias.data);
            })
            .catch((error) => {
              console.error('Erro ao listar categorias:', error);
            });
          break;
    
        default:
          console.log('Comando inválido.');
      }
}

processarComando()