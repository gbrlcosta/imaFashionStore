import styles from './ShoppingCart.module.css'
import Product from './Product'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/cartContext'

export function ShoppingCart() {
  const {
    estoque,
    cart,
    handleAddItemToCart,
    totalPrice,
    onIncrease,
    onDecrease,
    onRemove
  } = useContext(CartContext)

  return (
    <section className={styles.scMenu}>
      <div className={styles.totalLabel}>
        <h1 className={styles.title}>Carrinho</h1>
        <h1 className={styles.totalValue}> ({cart?.length})</h1>
      </div>

      <div className={styles.products}>
        {cart?.map((product, i) => {
          return (
            <div key={i}>
              <Product
                onRemove={onRemove}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                index={i}
                id={product.id}
                image={product.img}
                name={product.name}
                price={product.price}
                qty={product.qty}
                size={product.size}
              />
            </div>
          )
        })}
      </div>

      <div className={styles.subtotal}>
        <div className={styles.sumaryLabel}>Subtotal: </div>
        <p>R$ </p>
        <div className={styles.sumaryValue}>{totalPrice}</div>
      </div>

      <Link to={`/checkout`} className={styles.finish}>
        Finalizar Compra
      </Link>

      <Link className={styles.moreProducts} to={`/#produtos`}>
        Ver mais produtos
      </Link>
    </section>
  )
}
