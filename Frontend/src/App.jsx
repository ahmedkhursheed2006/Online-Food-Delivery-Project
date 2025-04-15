import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CustomerLayout from "./components/CustomerLayout";
import SignupPage from "./pages/SignupPage";
import CreateKitchenPage from "./pages/CreateKitchenPage";
import Cart from "./pages/Cart";
import RestaurantUI from "./pages/RestaurantUI";
import AdminLayout from "./components/AdminLayout";
import AdminUI from "./pages/AdminUI";
import Orders from "./restaurantComponents/Orders";
import Analytics from "./restaurantComponents/Analytics";
import Products from "./restaurantComponents/Products";
import RestaurantLayout from "./components/RestaurantLayout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/restaurant-dashboard" element={<RestaurantLayout />}>
            <Route index element={<RestaurantUI />} />
            <Route path="orders" element={<Orders />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="products" element={<Products />} />
          </Route>

          <Route path="/admin-dashboard" element={<AdminLayout />}>
            <Route index element={<AdminUI />} />
          </Route>
          
          <Route path="/" element={<CustomerLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<SignupPage />} />
            <Route path="create-kitcken" element={<CreateKitchenPage />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
