class PriceModel {
    constructor(currency, amount, decimals){
        this.currency = currency;
        this.amount = amount;
        this.decimals = decimals;
    }
}

module.exports = PriceModel