import { getStoredCart } from '../../utilities/fakedb';

export const dataLoader = async () => {

    //get products
    const productData = await fetch('products.json');
    const product = await productData.json();


    //get cart
    const savedCart = getStoredCart();
    const previousCart = [];
    // console.log(savedCart);
    for (const id in savedCart) {
        const addedProducts = product.find(product => product.id === id);
        const quantity = savedCart[id];
        addedProducts.quantity = quantity;
        previousCart.push(addedProducts);

    }

    return { product, previousCart };
}