import { ItemModel } from "./item.model";
import { PriceModel } from "./price.model";

export class ItemDetailModel extends ItemModel {
    sold_quantity: number;
    description: string;
    categories: [string];
  
    constructor(id: string, title: string, price: PriceModel, picture: string, condition: string, free_shipping: boolean, sold_quantity: number, description: string, categories: [string]) {
        super(id, title, price, picture, condition, free_shipping, "");
        this.sold_quantity = sold_quantity;
        this.description = description;
        this.categories = categories;
    }
  }
  