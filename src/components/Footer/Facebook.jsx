import { FacebookLogo } from 'phosphor-react'
import styles from './Facebook.module.css'

const Facebook = () => {
  return (
    <a className={styles.faceIcon} href="https://facebook.com" target="_blank">
      <FacebookLogo />
    </a>
  )
}

export default Facebook
