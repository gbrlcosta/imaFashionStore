import styles from './Stat.module.css'

export function Stat({ tittle, paragraph }) {
  return (
    <div className={styles.Stat}>
      <h1>{tittle}</h1>
      <p>{paragraph}</p>
    </div>
  )
}
