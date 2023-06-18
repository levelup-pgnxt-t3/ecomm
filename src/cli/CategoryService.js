import chalk from "chalk"

export default class CategoryService{
  static async findCategories(){
    try{
      const response = await fetch('http://localhost:3000/categories')
      if(response.ok){
        const listaDeCategorias = await response.json();
        console.log('status:', chalk.yellow(response.status))
        return listaDeCategorias}
    }catch(erro) {return chalk.red("Erro ao buscar lista de categorias")}
  }

  static async findCategoriesById(id){
    try{
      const response = await fetch(`http://localhost:3000/categories/${id}`);
      if(response.ok){
        const listaFiltrada = await response.json();
        console.log('status:', chalk.yellow(response.status));
        return listaFiltrada;}
    }catch(error){
      return chalk.red('Erro ao filtrar lista de categorias');
    }
  }
}
