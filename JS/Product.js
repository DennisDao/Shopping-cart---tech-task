function Product(name, price, id, description, isDiscountable) {
    this.name = name;
    this.price = price;
    this.id = id;
    this.description = description;
    this.isDiscountable = isDiscountable;
    this.displayPrice = `$${this.price.toFixed(2)}`
    this.FrontendID = Math.random(0, 100);
}