class ItemModel {
    
    constructor(id, title, price, picture, condition, free_shipping, address) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = free_shipping;
        this.address = address;
    }

}

module.exports = ItemModel