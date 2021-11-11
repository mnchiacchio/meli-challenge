const axios = require("axios")

class ItemService {
    constructor({ ItemRepository }){
        this._itemRepository = ItemRepository;
    }

    searchItems = async (query) => {
        
        const urlSearch = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
        try {
            const response = await axios.get(urlSearch);
            if (response) {
                const result = await this._itemRepository.makeResponseSearch(
                    response.data.results
                );
                return result || [];
            }
        } catch (error) {
            throw new Error(error);
        }
      };
    
    getItemById = async (id) => {
        const urlItem = `https://api.mercadolibre.com/items/${id}`;
        const urlItemDetail = `https://api.mercadolibre.com/items/${id}/description`;

        try {
            const itemResponse = await axios.get(urlItem);
            let itemDetailResponse
            try {
                itemDetailResponse = await axios.get(urlItemDetail);
            } catch (error) {
                if(error.response.data.status == 404 && error.response.data.error == 'not_found'){
                    const data = { plain_text: null };
                    itemDetailResponse = { data }
                }
            }
            
            if (itemResponse && itemDetailResponse) {
                const result = await this._itemRepository.makeResponseItem(
                    itemResponse.data,
                    itemDetailResponse.data
                );
                return result;
            }
            else{
                return [];
            }
        } catch (error) {
            return error.response.data;
        }
    };

    
    getCategories = async (idCategory) => {
        const urlCategories = `https://api.mercadolibre.com/categories/${idCategory}`;

        try {
            const categoriesResponse = await axios.get(urlCategories);

            if (categoriesResponse) {
                return categoriesResponse;
            }
        } catch (error) {
            throw new Error(error);
        }
    };

}

module.exports = ItemService