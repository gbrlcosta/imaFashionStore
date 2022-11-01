import styles from "./productCheckoutCard.module.css";
import { XCircle } from "phosphor-react";
import axios from "axios";

export function ProductCheckoutCard({
  id,
  index,
  image,
  name,
  price,
  qty,
  size,
  onRemove,
}) {
  return (
    <span className={styles.card}>
      <div className={styles.photo}>
        <i
          onClick={() => {
            axios
              .delete(`http://localhost:8180/carrinhodecompras/${id}`)

              .then(() => onRemove(index))
              .catch((err) => console.log(err.message));
          }}
        >
          <XCircle />
        </i>

        <img className={styles.productImage} src={image} alt="conjunto" />
      </div>

      <div className={styles.text}>
        <p>
          <strong>{name}</strong>
        </p>
        <p>Tamanho: {size}</p>
        <p>Preço: R$ {price},00</p>
        <p>Quantidade: {qty}</p>
        <p>Total: R$ {price * qty},00</p>
      </div>
    </span>
  );
}
