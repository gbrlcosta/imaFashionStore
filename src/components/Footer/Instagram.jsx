import { InstagramLogo } from 'phosphor-react'
import styles from './Instagram.module.css'

const Instagram = () => {
  return (
    <a
      className={styles.instaIcon}
      href="https://instagram.com"
      target="_blank"
    >
      <InstagramLogo />
    </a>
  )
}

export default Instagram
