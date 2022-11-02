import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product-list" element={<ProductListPage/>}/>
        <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
