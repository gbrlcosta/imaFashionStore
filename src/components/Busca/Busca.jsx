import styles from './Busca.module.css'
import { Card } from './Card'
import { productsData } from '../../database/productsData'
import { useState } from 'react'

const estoque = productsData

export function Busca() {
  const [busca, setBusca] = useState('')

  const lowerBusca = busca.toLowerCase()

  const produtosFiltados = estoque.filter(product =>
    product.productName.toLowerCase().includes(lowerBusca)
  )

  if (busca.length <= 0) {
    return (
      <section className={styles.searchSection}>
        <input
          className={styles.input}
          type="text"
          value={busca}
          placeholder="O que você procura hoje?"
          onChange={ev => setBusca(ev.target.value)}
        />
      </section>
    )
  } else {
    return (
      <section className={styles.searchSection}>
        <input
          className={styles.input}
          type="text"
          value={busca}
          placeholder="O que você procura hoje?"
          onChange={ev => setBusca(ev.target.value)}
        />

        <main className={styles.product}>
          <ul>
            {produtosFiltados.map(product => (
              <Card
                key={product.id}
                id={product.id}
                productImg={product.img}
                productName={product.productName}
                productPrice={product.productPrice}
                productDivision={product.productDivision}
              />
            ))}
          </ul>
        </main>
      </section>
    )
  }
}
