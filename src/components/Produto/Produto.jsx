import styles from "./Produto.module.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext/cartContext";
import axios from "axios";

export default function Produto(id) {
  const [size, setSize] = useState("");
  const { estoque, handleAddItemToCart } = useContext(CartContext);

  const handleProductId = estoque?.filter((product) => product.id === id.id);

  function handleValidateItemToAddToCart() {
    if (size !== "") {
      handleAddItemToCart(
        handleProductId[0].id,
        handleProductId[0].img,
        handleProductId[0].productName,
        handleProductId[0].productPrice,
        1,
        size
      );
    } else {
      alert("Selecione um tamanho, por gentileza!");
    }
  }

  const [corP, setCorP] = useState("#eb9ac9");
  const [corM, setCorM] = useState("#eb9ac9");
  const [corG, setCorG] = useState("#eb9ac9");

  return (
    <>
      <div className={styles.produto}>
        <img className={styles.imagemproduto} src={handleProductId[0].img} />

        <div className={styles.productDescription}>
          <h3 className={styles.tittle}>{handleProductId[0].productName}</h3>

          <p className={styles.productPrice}>
            <span>R$ {handleProductId[0].productPrice},00</span>
          </p>

          <div>
            <i></i>
            <p className={styles.productdivision}>
              {handleProductId[0].productDivision}
            </p>
          </div>
          <div className={styles.productSizes}>
            <p>Tamanho:</p>
            <button
              className={styles.toChekout}
              onClick={() => {
                setSize("P");
                setCorP("#dd57a5");
                setCorM("#eb9ac9");
                setCorG("#eb9ac9");
              }}
              style={{
                backgroundColor: corP,
              }}
            >
              P
            </button>
            <button
              className={styles.toChekout}
              onClick={() => {
                setSize("M");
                setCorP("#eb9ac9");
                setCorM("#dd57a5");
                setCorG("#eb9ac9");
              }}
              style={{
                backgroundColor: corM,
              }}
            >
              M
            </button>
            <button
              className={styles.toChekout}
              onClick={() => {
                setSize("G");
                setCorP("#eb9ac9");
                setCorM("#eb9ac9");
                setCorG("#dd57a5");
              }}
              style={{
                backgroundColor: corG,
              }}
            >
              G
            </button>
          </div>
          <div className={styles.links}>
            <button
              className={styles.toCart}
              onClick={() => {
                axios
                  .post("http://localhost:8180/carrinhodecompras", {
                    id: handleProductId[0].id,
                    name: handleProductId[0].productName,
                    code: handleProductId[0].code,
                    price: handleProductId[0].productPrice,
                    quantity: 1,
                    size: size,
                  })
                  .then((response) => handleValidateItemToAddToCart())
                  .catch((err) => console.log("deu ruim"));
              }}
            >
              Adicionar ao carrinho
            </button>
            <button className={styles.toHome}>
              <Link to={`/`}>Voltar</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
