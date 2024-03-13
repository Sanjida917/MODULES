const addProduct = () => {

    const productField = document.getElementById('Product-name');
    const quantityField = document.getElementById('Product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;


    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);

}


const displayProduct = (product, quantity) => {

    const containerUl = document.getElementById('product-container')

    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    containerUl.appendChild(li);

}

const getStoredShoppingCart = () => {

    let cart = {};
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {

        //parse - Converts a JavaScript Object Notation (JSON) string into an object.
        cart = JSON.parse(storedCart);
    }

    {
        return cart;
    }
}


const saveProductToLocalStorage = (product, quantity) => {

    const cart = getStoredShoppingCart();
    console.log(cart);

    cart.product = quantity;

    // also possible ways
    // cart.product = [quantity] ;
    // cart.product = quantity ;
    // cart[product] = [quantity] ;

    cart[product] = quantity;
    console.log(cart);

    //as we cannot set the values as object so we have to change it as stringyfy
    const cartStringyfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyfied);

}


const displayProductsFromLocalStorage = () => {


    const savedCart = getStoredShoppingCart();
    console.log(savedCart);

    for (const product in savedCart) {

        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }

}

displayProductsFromLocalStorage();
