const addProduct = ()  => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
};
const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${quantity}`;

    ul.appendChild(li);
};

const getStoredProduct = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredProduct();
    cart [product] = quantity;
    console.log(cart)

    const cartStringify = JSON.stringify(cart);
    console.log(cartStringify)

    localStorage.setItem('cart', cartStringify)
};

const displayProductFromLocalStorage = () =>{
    const savedInLocalStorage = getStoredProduct();
    console.log(savedInLocalStorage)

    for(const product in savedInLocalStorage){
        const quantity = savedInLocalStorage[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}
displayProductFromLocalStorage();