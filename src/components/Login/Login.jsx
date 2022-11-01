import styles from './Login.module.css'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>Já sou cliente</h1>
        <form method="post" action="">
          <p>
            <input
              className={styles.input}
              type="text"
              placeholder="Email, CPF ou CNPJ"
              name="login"
              value=""
            />
          </p>
          <p>
            <input
              className={styles.input}
              type="password"
              placeholder="Senha"
              name="login"
              value=""
            />
          </p>
          <p className={styles.remember_me}>
            <label>
              <input
                className={styles.input}
                type="checkbox"
                name="remember_me"
                id="remember_me"
              />
              Salvar senha
            </label>
          </p>
          <p className={styles.submit}>
            <input
              className={styles.input}
              type="submit"
              name="commit"
              value="Acessar a conta"
            />
          </p>
        </form>
      </div>

      <div className={styles.Register}>
        <button className={styles.RegisterButton}>
          <Link to={`/cadastro`} className={styles.RegisterButton}>
            Faça seu Cadastro
          </Link>
        </button>
      </div>

      <div className={styles.help}>
        <a href="#">Esqueci minha senha</a>
      </div>
    </div>
  )
}
