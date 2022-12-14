import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";

//User Protected Routes 
import ProtectedRoutesComponent from './component/ProtectedRoutesComponent';
import UserProfilePage from './user/UserProfilePage';
import UserOrderDetailsPage from './user/UserCartDetailsPage'
import UserOrdersPage from './user/UserOrdersPage'
import UserCartDetailsPage from './user/UserCartDetailsPage'
// Admin Protected Routes 
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage'
import AdminChatsPage from './pages/admin/AdminChatsPage'
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage'
import AdminEditProductPage from './pages/admin/AdminEditProductPage'
import AdminEditUserPage from './pages/admin/AdminEditUserPage'
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import AdminUsersPage from './pages/admin/AdminUsersPage'



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
        
        {/* User Protected Routes  */}
        <Route element={<ProtectedRoutesComponent admin={false}/>}>
          <Route path="/user" element={<UserProfilePage/>}/>
          <Route path="/user/my-orders" element={<UserOrdersPage/>}/>
          <Route path="/user/cart-details" element={<UserCartDetailsPage/>}/>
          <Route path="/user/order-details" element={<UserOrderDetailsPage/>}/>
        </Route>
        
        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoutesComponent admin={true}/>}>
          <Route path="/admin/users" element={<AdminUsersPage/>}/>
          <Route path="/admin/edit-user" element={<AdminEditUserPage/>}/>
          <Route path="/admin/products" element={<AdminProductsPage/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
