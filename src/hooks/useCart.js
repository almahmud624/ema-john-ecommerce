import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const stroedCart = [];
            for (const key in savedCart) {
                const addedproducts = products.find(product => product.key === key);
                if (addedproducts) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedproducts.quantity = quantity;
                    stroedCart.push(addedproducts);
                }
            }
            setCart(stroedCart);
        }
    }, [products])
    return [cart, setCart];
}

export default useCart;