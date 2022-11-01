import styles from "./productPedidoCard.module.css";
import { XCircle } from "phosphor-react";
import axios from "axios";

export function ProductPedidoCard({
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
