import {createContext, useContext, useState, useEffect} from "react";
const CartContext = createContext({})
//custom hook to get state values across entire application
export function useCartInfo() {
    return useContext(CartContext)
}
//context provider for application
export function CartProvider({children}) {
//creating state for API products
    const [products, setProducts] = useState([])

    const [quantity, setQuantity] = useState(1)

    const [cart, setCart] = useState([])
//pulling API data and turnig it into json
    const apiInfo = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        return json
    }
//runs function using API data and inserts into product array
    useEffect(() => {
        apiInfo().then(data => {return setProducts(data)})
    }, [])
//rendering provider and all children    
    return (
        <CartContext.Provider value={{products, quantity, setQuantity, cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}
