use('ecomm')

const categoriesBooksAndCellPhones = db.products.find(
    {$or:[
        {"CATEGORIA": "LIVROS"},
        {"CATEGORIA": "CELULARES"}
    ]}
)

console.log(categoriesBooksAndCellPhones)