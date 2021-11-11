import { AuthorModel } from "./author.model";
import { ItemModel } from "./item.model";

export class SearchResponse{
    author: AuthorModel;
    categories: [string];
    items: [ItemModel];
    
    constructor(author: AuthorModel, categories: [string], items: [ItemModel]){
        this.author = author;
        this.categories = categories;
        this.items = items;
    }
}