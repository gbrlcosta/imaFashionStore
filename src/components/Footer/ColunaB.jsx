import Instagram from './Instagram'
import Facebook from './Facebook'
import styles from './ColunaB.module.css'

const ColunaB = () => {
  return (
    <div className={styles.colB}>
      <Instagram />
      <Facebook />
    </div>
  )
}

export default ColunaB
