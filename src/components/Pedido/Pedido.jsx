import styles from "./Pedido.module.css";
import { ProductPedidoCard } from "./ProductPedidoCard";
import { CartContext } from "../../context/CartContext/cartContext";
import { useContext } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export function Pedido() {
  const {
    estoque,
    cart,
    handleAddItemToCart,
    totalPrice,
    onIncrease,
    onDecrease,
    onRemove,
    limparCarrinho,
  } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <section>
      <main className={styles.main}>
        <section className={styles.order}>
          <h2>Pedido 1001</h2>
          <div className={styles.cards}>
            {cart?.map((product, i) => {
              return (
                <div key={i}>
                  <ProductPedidoCard
                    index={i}
                    id={product.id}
                    image={product.img}
                    name={product.name}
                    price={product.price}
                    qty={product.qty}
                    size={product.size}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.infos}>
          <div className={styles.you}>
            <h2>Você</h2>
            <div className={styles.email}>
              <input
                type="text"
                value="test@test.com"
                contentEditable={false}
              />
            </div>
          </div>

          <div className={styles.destino}>
            <h2>Destino</h2>
            <div className={styles.endereco}>
              <p>Rua t-44, n. 174</p>
              <p>Bueno, Goiânia-GO</p>
              <p>74210-150</p>
            </div>
          </div>

          <div className={styles.delivey}>
            <h2>Forma de envio</h2>
            <div className={styles.types}>
              <form className={styles.type}>
                <label>
                  <span>
                    <p>PAC</p>
                    <p>Previsão: 14 dias úteis</p>
                  </span>
                  <p>R$ 30,00</p>
                </label>
              </form>
            </div>
          </div>
        </section>

        <section className={styles.resumeBox}>
          <div className={styles.resume}>
            <h2>Resumo</h2>

            <div className={styles.subtotal}>
              <span>
                <p>Sub-total</p>
                <p>R$ {totalPrice},00</p>
              </span>
              <span>
                <p>PAC</p>
                <p>R$ 30,00</p>
              </span>
            </div>

            <div className={styles.total}>
              <h2>TOTAL DO PEDIDO</h2>
              <span>
                <h3>R${totalPrice + 30},00</h3>
                <p>
                  ou em até 12x de R${Math.round((totalPrice + 30) / 12)},00 sem
                  juros
                </p>
              </span>
            </div>
          </div>

          <div className={styles.payment}>
            <label>
              <span>
                <p>Boleto</p>
              </span>

              <p>à vista</p>
            </label>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="/">Voltar para o site</a>
      </footer>
    </section>
  );
}

// <button
// className={styles.endShopping}
// onClick={() => {
//   axios
//     .post("http://localhost:8180/comprar", {
//       email: "test@test.com",
//       endereco: "Rua t-44, n. 174 Bueno, Goiânia-GO 74210-150",
//       frete: "PAC",
//       freteValue: 30,
//       tipoPagamento: "Boleto",
//     })
//     .then((response) => {
//       limparCarrinho();
//       navigate("/pedido-sucesso");
//     })
//     .catch((err) => console.log("deu ruim"));
// }}
// >
// Finalizar compra
// </button>
