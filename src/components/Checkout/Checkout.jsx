import styles from "./Checkout.module.css";
import { ProductCheckoutCard } from "./productCheckoutCard";
import { CartContext } from "../../context/CartContext/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Checkout() {
  const { cart, totalPrice, onRemove } = useContext(CartContext);

  return (
    <section>
      <main className={styles.main}>
        <section className={styles.order}>
          <h2>Seu pedido</h2>
          <div className={styles.cards}>
            {cart?.map((product, i) => {
              return (
                <div key={i}>
                  <ProductCheckoutCard
                    onRemove={onRemove}
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
              <input type="text" placeholder="dev.fashion@gmail.com" />
              <a href="../login/index.html">trocar de conta</a>
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
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Retirada no local</p>
                  </span>

                  <p>Grátis</p>
                </label>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Motoboy</p>
                    <p>Previsão: até 24 horas após a confirmação</p>
                  </span>
                  <p>R$ 9,00</p>
                </label>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>PAC</p>
                    <p>Previsão: 14 dias úteis</p>
                  </span>
                  <p>R$ 30,00</p>
                </label>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Frete-grátis</p>
                    <p></p>
                  </span>
                  <p>Grátis</p>
                </label>
                <p className={styles.prazoEntrega}></p>
                <p className={styles.preçoFrete}></p>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Retirar próximo ao meu endereço</p>
                    <p>Previsão: 4 dias úteis</p>
                  </span>
                  <p>R$ 14,00</p>
                </label>
                <p className={styles.prazoEntrega}></p>
                <p className={styles.preçoFrete}></p>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Package</p>
                    <p>Previsão: 14 dias úteis</p>
                  </span>
                  <p>R$ 30,00</p>
                </label>
                <p className={styles.prazoEntrega}></p>
                <p className={styles.preçoFrete}></p>
              </form>
            </div>
          </div>
        </section>

        <section className={styles.resumeBox}>
          <div className={styles.resume}>
            <h2>Resumo</h2>
            <span>
              <p>Sub-total</p>
              <p>R$ {totalPrice},00</p>
            </span>
            <span>
              <p>PAC</p>
              <p>R$ 30,00</p>
            </span>
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
            <form className={styles.type}>
              <input type="radio" className={styles.checkbox} />
              <label>
                <span>
                  <p>Boleto</p>
                </span>

                <p>à vista</p>
              </label>
            </form>

            <form className={styles.type}>
              <input type="radio" className={styles.checkbox} />
              <label>
                <span>
                  <p>Cartão de crédito</p>
                </span>

                <p>em até 6 x sem juros</p>
              </label>
            </form>

            <form className={styles.type}>
              <input type="radio" className={styles.checkbox} />
              <label>
                <span>
                  <p>PIX</p>
                </span>

                <p>à vista</p>
              </label>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="/">Voltar para o site</a>

        <button
          className={styles.endShopping}
          onClick={() => {
            axios
              .post("http://localhost:8180/sendmessage", {
                nome: "Nadielly",
                pedido: "1001",
                email: "test@test.com",
                endereco: "Rua t-44, n. 174 Bueno, Goiânia-GO 74210-150",
                frete: "PAC",
                freteValue: 30,
                tipoPagamento: "Boleto",
              })
              .then((response) => {
                navigate("/pedido");
              })
              .catch((err) => console.log("deu ruim"));
          }}
        >
          <Link to={`/pedido`}>Finalizar compra</Link>
        </button>
      </footer>
    </section>
  );
}
