const ItemModel = require("../models/item")
const ItemDetailModel = require("../models/item-detail")
const AuthorModel = require("../models/author");
const PriceModel = require("../models/price");

class ItemRepository {
    responseData;
    constructor({ CategoryService, config }) {
        this.responseData = {};
        this._categoryService = CategoryService;
        this._config = config;
    }
  
    async makeResponseSearch(data) {
        let res = {};
        const response = await this.makeResponseSearchs(data);
        res.author = response.author;
        res.categories = response.categories;
        res.items = response.items;
        return res;
    }
  
    async makeResponseItem(item, description) {
        let res = {};
        let data = { item, description };
        const response = await this.getResponseItem(data);
        res.author = response.author;
        res.item = response.item;
        return response;
    }

    getAuthor() {
        const name = this._config.AUTHOR_NAME;
        const lastname = this._config.AUTHOR_LASTNAME;
        const authorModel = new AuthorModel(name, lastname);
        return authorModel;
    }
  
    async makeCategories(categoryId) {
        let categories = [];
        const responseCategories = await this._categoryService.getCategories(categoryId);
        if (responseCategories) {
            const response = responseCategories.path_from_root;
            for (const category of response) {
                const name = category.name;
                categories.push(name);
            }
        }
        return categories;
    }
  
    makeItems(id, title, currency, price, picture, condition, free_shipping) {
        const priceObj = new PriceModel(currency, price, this.getDecimals(price));
        const itemModel = new ItemModel(id, title, priceObj, picture, condition, free_shipping);
        return itemModel;
    }
  
    makeItemsExtended(id, title, currency, price, picture, condition, free_shipping, sold_quantity, description) {
        const priceObj = new PriceModel(currency, price, this.getDecimals(price));
        const itemDetailModel = new ItemDetailModel(id, title, priceObj, picture, condition, free_shipping, sold_quantity, description);
        return itemDetailModel;
    }
  
    getDecimals(number) {
        const numberStr = number.toString();
        const numberSplit = numberStr.split("." || ",");
        if (numberSplit.length > 1) {
            return numberSplit[1].length;
        } else {
            return 0;
        }
    }
  
    async makeResponseSearchs( results ) {
        const author = this.getAuthor();
        let itemsList = [];
        
        if ( results.length == 0 ){
            return { author, categories: [], items: results };
        }

        const category_id = results[0].category_id;
        const categories = await this.makeCategories(category_id);
        
        let count = results.length >= 4 ? 4 : results.length;

        for (let index = 0; index < count; index++) {
            const data = results[index];
            const itemModel = this.makeItems(data.id, data.title, data.currency_id, data.price, data.thumbnail, data.condition, data.shipping.free_shipping);
            itemsList.push(itemModel);
        }
        return { author, categories, items: itemsList };
    }
  
    async getResponseItem({ item, description }) {
        const author = this.getAuthor();
        const itemDetailModel = this.makeItemsExtended(item.id, item.title, item.currency_id, item.price, item.pictures[0].url, item.condition, item.shipping.free_shipping, item.sold_quantity, description.plain_text);
        return { author: author, item: itemDetailModel };
    }
  }
  
  module.exports = ItemRepository;
  