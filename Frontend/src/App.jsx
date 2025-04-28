import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CustomerLayout from "./components/CustomerLayout";
import SignupPage from "./pages/SignupPage";
import CreateKitchenPage from "./pages/CreateKitchenPage";
import Cart from "./pages/Cart";
import RestaurantUI from "./pages/RestaurantUI";
import AdminLayout from "./components/AdminLayout";
import AdminUI from "./pages/AdminUI";
import RestaurantLayout from "./components/RestaurantLayout";
import { Toaster } from "react-hot-toast";
import { useCustomerStore } from "./useStores/useCustomerStore";
import { useRestaurantStore } from "./useStores/useRestaurantStore";
import { useAdminStore } from "./useStores/useAdminStore";
import { useEffect } from "react";
import RestaurantLoginPage from "./restaurantComponents/RestaurantLoginPage";
import AdminLogin from "./adminComponents/AdminLogin";
import FAQs from "./components/FAQs";
function App() {
  const { checkRestaurantAuth, authRestaurant } = useRestaurantStore();
  const { checkAuth, authCustomer } = useCustomerStore();
  const { authAdmin } = useAdminStore();
  useEffect(() => {
    checkRestaurantAuth();
  }, [checkRestaurantAuth]);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<CustomerLayout />}>
            <Route
              index
              element={authCustomer ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!authCustomer ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!authCustomer ? <SignupPage /> : <Navigate to="/" />}
            />
            <Route path="/FAQs" element={<FAQs />} />

            <Route
              path="/cart"
              element={!authCustomer ? <LoginPage /> : <Cart />}
            />
          </Route>

          <Route path="/restaurant" element={<RestaurantLayout />}>
            <Route
              path="signup"
              element={
                !authRestaurant ? (
                  <CreateKitchenPage />
                ) : (
                  <Navigate to="/restaurant" />
                )
              }
            />
            <Route
              path="login"
              element={
                !authRestaurant ? (
                  <RestaurantLoginPage />
                ) : (
                  <Navigate to="/restaurant" />
                )
              }
            />
            <Route
              index
              element={
                authRestaurant ? <RestaurantUI /> : <Navigate to="/login" />
              }
            />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route
              index
              element={authAdmin ? <AdminUI /> : <Navigate to="login" />}
            />
            <Route
              path="login"
              element={!authAdmin ? <AdminLogin /> : <Navigate to="/admin" />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
