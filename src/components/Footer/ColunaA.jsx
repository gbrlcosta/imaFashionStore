import Logo from './Logo'
import Texto from './Texto'
import styles from './ColunaA.module.css'

const ColunaA = () => {
  return (
    <div className={styles.colA}>
      <Logo />
      <Texto />
    </div>
  )
}

export default ColunaA
