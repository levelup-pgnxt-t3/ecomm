import CategoryService from "./CategoryService.js"

const command = process.argv

async function processarComando(args) {
    const command = args[2]
    const id = args[3]

    switch (command) {
        case '--listarCategorias':
            await CategoryService.findCategories()
            break
        case '--recuperarCategoriaPorId':
            await CategoryService.findCategoryById(id)
            break
    }
}

await processarComando(command)