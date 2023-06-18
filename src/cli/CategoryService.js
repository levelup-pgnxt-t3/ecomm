import chalk from "chalk"
import fs from 'fs';

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

  static async createCategory(caminho){
    try{
      const lerArquivo = await fs.promises.readFile(caminho, 'utf-8');
      const adicionaCategoria = await fetch('http://localhost:3000/categories',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: lerArquivo
      })
      .then(response => {
        console.log('response status: ' + chalk.yellow(response.status))
        return response.json()})
      .catch(error => console.log('Erro em inserir categoria: ' + error))
  
      return adicionaCategoria;
    } catch(error){
      return chalk.red('Erro ao tentar adicionar categoria');
    }
  }
}
