class CategoryService {
    static findCategories() {
      return fetch('http://localhost:3000/categories')
        .then((response) => {
          return response.json()
            .then((data) => {
              return {
                statusCode: response.status,
                data: data
              };
            });
        })
        .catch((error) => {
          throw error;
        });
    }
    static findCategoryById(id) {
    return fetch(`http://localhost:3000/categories/${id}`)
        .then((response) => {
          return response.json()
            .then((data) => {
              return {
                statusCode: response.status,
                data: data
              };
            });
        })
        .catch((error) => {
          throw error;
        });
    }
  }
  
 export default CategoryService
  