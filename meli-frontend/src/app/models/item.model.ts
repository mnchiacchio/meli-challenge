import { PriceModel } from "./price.model";

export class ItemModel {
    id: string;
    title: string;
    price: PriceModel;
    picture: string;
    condition: string;
    free_shipping: boolean;
    address: string
    
    constructor(id: string, title: string, price: PriceModel, picture: string, condition: string, free_shipping: boolean, address: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = free_shipping;
        this.address = address;
    }

}