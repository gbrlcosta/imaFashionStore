import styles from './Contato.module.css'
import { WhatsappLogo } from 'phosphor-react'

export function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <header className={styles.header}>
        <h2>Entre em contato com a gente!</h2>
      </header>
      <div className={styles.content}>
        <ul>
          <li>R. 136, Goiânia</li>
          <li>contato@imafashion.com</li>
        </ul>

        <a
          className={styles.button}
          href="https://wa.me/5511987654321"
          target="_blank"
        >
          <WhatsappLogo />
          Fale com nossos representantes
        </a>
      </div>
    </section>
  )
}
