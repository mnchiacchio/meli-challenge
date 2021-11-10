const axios = require("axios")

class CategoryService{
    constructor() {}

    getCategories = async (idCategory) => {
        const urlCategories = `https://api.mercadolibre.com/categories/${idCategory}`;
        try {
            const response = await axios.get(urlCategories);
      
            if (response) {
              return response.data;
            }
        } catch (error) {
            throw new Error(error);
        }
    };
}
      
module.exports = CategoryService;