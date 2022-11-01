import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { CreditCard } from 'phosphor-react'

export function Card({
  productImg,
  productName,
  productPrice,
  productDivision,
  id
}) {
  return (
    <Link to={`/productPage/${id}`}>
      <div className={styles.product}>
        <img src={productImg} className={styles.item} />
        <div className={styles.description}>
          <p className={styles.titlePhoto}>{productName}</p>
          <div>
            <span>R$ </span>
            <span className={styles.price}>{productPrice}</span>
            <span>,00</span>
          </div>

          <div className={styles.creditcard}>
            <CreditCard size={18} />
            <p className={styles.parcela}>{productDivision}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
