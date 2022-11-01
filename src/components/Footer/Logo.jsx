import logo from '../../assets/logo-dark.png'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.darkLogo}>
      <a href="#home">
        <img src={logo} alt="" />
      </a>
    </div>
  )
}

export default Logo
