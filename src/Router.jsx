import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { SearchPage } from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { Pedido } from "./components/Pedido/Pedido";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export function Router() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/busca" element={<SearchPage />} />
        <Route path="/carrinho" element={<ShoppingCart />} />
        <Route path="/pedido" element={<Pedido />} />
      </Routes>
    </ScrollToTop>
  );
}
