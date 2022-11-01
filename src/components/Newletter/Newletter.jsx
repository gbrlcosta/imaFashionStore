import styles from './Newletter.module.css'

export default function Newletter() {
  return (
    <section id="newsletter" className={styles.newsLetter}>
      <header className={styles.tittle}>
        <h2>Newsletter</h2>
      </header>
      <div className={styles.content}>
        <h3>Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!</h3>
        <input
          className={styles.newsletterInput}
          type="text"
          placeholder="Coloque seu E-mail aqui!"
        ></input>
      </div>
    </section>
  )
}
