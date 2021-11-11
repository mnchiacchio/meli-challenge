import { AuthorModel } from "./author.model";
import { ItemDetailModel } from "./item-detail.model";

export class ItemResponseModel{
    author: AuthorModel;
    categories: [string];
    item: ItemDetailModel;
    
    constructor(author: AuthorModel, categories: [string], item: ItemDetailModel){
        this.author = author;
        this.categories = categories;
        this.item = item;
    }
}