$(document).ready(function() {

    // Create Cart object
    let cart = new Cart();
    let products = [];
    
    init = () => {
        // Seed some product object
        let product1 = new Product("Product 1", 3.50, 1, "a blue hat", true);
        let product2 = new Product("Product 2", 9.99, 2, "a green hat", false);
        let product3 = new Product("Product 3", 3.99, 3, "a red hat", true);
        // Add product to product array
        products.push(product1);
        products.push(product2);
        products.push(product3);
        // Render template
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var output = template(products);
        $(".panel-body").append(output); 
    };
    init();
       
   $('input[type=text]').change((event) => {
        let productID = parseInt($(event.target).attr('data-productID'));
        let quantity = parseInt(event.target.value);
        let item = products.find(x => x.id === productID);
        cart.removeItem(productID);
        addItem(item, quantity);
        displayTotal();
    });

   addItem = (item, quantity) => {
        for(let i = 0; i <= quantity -1; i++) {
            let product = new Product(item.name, item.price, item.id, item.description, item.isDiscountable);
            cart.addItem(product);
        };
   };

   displayTotal = () => {
       let total = cart.calculateTotal().toFixed(2);
       $("#total").html(`$${total}`);
   };

});