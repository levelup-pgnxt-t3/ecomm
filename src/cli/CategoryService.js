import fs from 'fs';

export class CategoryService {
    static async findCategories(){
        try{
            const categoriesList = await fetch('http://localhost:3000/categories')
            console.log(`Response status: ${categoriesList.status}`);
    
            return categoriesList.json();
        }
        catch (error){
            console.log(error)
        }

    };

    static async findCategoryById(id){
        try{
            const categoriesList = await fetch('http://localhost:3000/categories')
            const categoriesListJson = categoriesList.json()
            const categoryById = categoriesListJson.find(category => {
                if(category.id === id){
                    return category
                }
            })

            if(categoryById != undefined){
                console.log(`Response status: ${categoriesList.status}`)

                return categoryById
            } else {
                return (`Response status: 404. Id not found`)
            }
        }
        catch (error){
            console.log(error)
        }
    };
    
    static async createcategory(){
        const encoding = 'utf-8'
        const newcategory = fs.promises.readFile('./src/cli/novaCategoria.json', encoding)

        try {
            const category = await newcategory
            const categoryCreated = await fetch('http://localhost:3000/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: category
            })
            categoryResponse = await categoryCreated.json()
            console.log(`Response status: ${categoryCreated.status}`)
            return categoryResponse
        }
        catch (error){
            console.log(error)
        }
    };

    static async updateCategory(id, data){
        try{
            const categoryUpdated = await fetch(`http://localhost:3000/categories/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            })
            categoryResponse = await categoryUpdated.json()
            console.log(`Response status: ${categoryUpdated.status}`)
            return categoryUpdated
        }
        catch (error){
            console.log(error)
        }
    };

    static async deleteCategory(id){
        try{
            const deletedCategory = await fetch(`http://localhost:3000/categories/${id}`, {method: 'DELETE'})
            console.log(`Response status: ${deletedCategory.status}`)
            return true;
        }
        catch (error){
            console.log(error)
        }
    }
}