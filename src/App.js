import './App.css';
import ProductPage from './Components/productsPage/ProductPage';
import { CartProvider } from './context/CartContext';
import {Route, Routes} from 'react-router-dom';
import ProductDetails from './Components/productDetails/ProductDetails.js';
import CartPage from './Components/cartPage/CartPage';
import CheckoutPage from './Components/checkoutPage/CheckoutPage';
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<ProductPage></ProductPage>}></Route>
          <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/cart' element={<CartPage></CartPage>}></Route>
          <Route path='/checkout' element={<CheckoutPage></CheckoutPage>}></Route>
        </Routes>
        
      </div>
    </CartProvider>
  );
}

export default App;
