function Cart() {
    this.products = [];
    let promotion = new PromotionManger();
    this.addItem = (product) => {
        if (product instanceof Product) {
            this.products.push(product);
        } else {
            console.error("unable to add item to cart not instance of product");
        }
    };

    this.removeItem = (productID) => {
        for (let i = this.products.length - 1; i >= 0; i--) {
           if(this.products[i].id == productID){
                this.products.splice(i, 1);
           }
        }
    }

    this.calculateTotal = () => {
        this.products = promotion.checkPromotion(this.products);
        return this.products.reduce((a, b) => a + b.price, 0);
    }
}