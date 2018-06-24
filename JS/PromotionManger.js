function PromotionManger() {

    const reduce_10_percent_off = 0.9;
    let products = [];

    this.checkPromotion = function (products){
       this.products = products;
       let distinctProductIDs = new Set(products.map(x => x.id));
       distinctProductIDs.forEach(IDs =>{
            // Get the quantity
            let quantity = products.filter(x => x.id == IDs).length;
            // Get the product 
            let theProduct = products.find(x => x.id == IDs);
            switch (IDs) {
                case 1:
                    if(quantity >= 6 && quantity <= 23) {
                        let i = quantity / 6;
                        let fraction = (i - Math.floor(i)) * 6;
                        let newPrice = ((Math.floor(i) * 14.99) + (fraction * 3.50)) / quantity;
                        this.setPrice(newPrice, theProduct);
                    } else if (quantity >= 24) {
                        // --Logic explanation--
                        // suppose the quantity is 33 we have meet the promotion criteria of 24 for $49.99 and 6 for $14.99
                        // to calculate the total value we will need to divide 33 : 24 which equal to -> 1.375 
                        // from this number we will need to split it two portion the whole number and the fraction. 
                        // whole number is 1 which is 24 items the price is $49.99
                        // The fraction is 0.375 * 24 -> 9 items reminding 
                        // we need to take 9 and divide by 6 for second promotion 9 : 6 -> 1.5
                        // whole number is 1 which is 6 itmes the price is $14.90
                        // the fraction is 0.5 multiply by 6 to get the remaining items which is 3.
                        
                        let i = quantity / 24;
                        let iFraction = (i - Math.floor(i)) * 24; 
                        let j = iFraction / 6; 
                        let jFraction = (j - Math.floor(j)) * 6;
                        let newPrice = ((Math.floor(i) * 49.99) + (Math.floor(j) * 14.99) + (jFraction * 3.50)) / quantity;
                        this.setPrice(newPrice, theProduct);
                    } 
                    break;
                case 2:
                    if(quantity % 2 == 0){
                        let newPrice = (15.00 / 2);
                        this.setPrice(newPrice, theProduct);
                    } else {
                        let newPrice = (7.5 * (quantity - 1) + 9.99) / quantity;
                        this.setPrice(newPrice, theProduct);   
                    }
                    break;
                case 3:
                    if(quantity == 3) {
                        let newPrice = (15.00 / 3);
                        this.setPrice(newPrice, theProduct);
                    } else if(quantity >= 5) {
                        let newPrice = (24.00 / 5);
                        this.setPrice(newPrice, theProduct);
                    } 
                    break;
                default:
                   console.error("no such product");
                   break;
            }
       });
       return this.products;
    }

    this.setPrice = function (newPrice, theProduct) {
     
        for (let product of this.products) {
            if (product.id == theProduct.id) {
                product.price = newPrice;
            }
        }
        this.setDiscount();
    }

    this.setDiscount = function(){
        if(this.products.length >= 6){
            for (let product of this.products) {
                if (product.isDiscountable) {
                    product.price = product.price * reduce_10_percent_off;
                }
            }
        }
    }
}