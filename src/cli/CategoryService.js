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
    }catch(error) {trataErro(error);}
  }

  static async findCategoriesById(id){
    try{
      const response = await fetch(`http://localhost:3000/categories/${id}`);
      if(response.ok){
        const listaFiltrada = await response.json();
        console.log('status:', chalk.yellow(response.status));
        return listaFiltrada;}
    }catch(error){trataErro(error)}
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
    } catch(error){trataErro(error)}
  }

  static async updateCategory(id, caminhoUpgrade){
    try{
      const lerArquivoUpgrade = await fs.promises.readFile(caminhoUpgrade, 'utf-8');
      const atualizaCategoria = await fetch(`http://localhost:3000/categories/${id}`,
      {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
      },
      body: lerArquivoUpgrade
      })
      .then(response => {
        console.log('response status: ' + chalk.yellow(response.status))
        return response.json()})
      .catch(error => console.log('Erro em inserir categoria: ' + error))
  
      return atualizaCategoria;
    } catch(error){trataErro(error)}
  }

  static async deleteCategory(id){
    try{
      const deletaCategoria = await fetch(`http://localhost:3000/categories/${id}`,
      {
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => {
        console.log('response status: ' + chalk.yellow(response.status))
        return response.json()})
      .catch(error => console.log('Erro em deletar categoria: ' + error))
  
      return deletaCategoria;
    } catch(error){trataErro(error)}
  }
}

function trataErro(error){
   console.log(chalk.red('Erro ao tentar executar ação:' + error))
}