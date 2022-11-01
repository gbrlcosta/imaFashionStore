import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext/cartContext";
import { Router } from "./Router";
import { Header } from "./components/Header/index";
import { MenuMobile } from "./components/MenuMobile/index";
import { HomeContainer } from "./styles/HomeStyles";
import "./styles/HomePage.css";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <BrowserRouter>
      <CartProvider>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <HomeContainer>
          <Header setMenuIsVisible={setMenuIsVisible} />
        </HomeContainer>
        <Router />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
