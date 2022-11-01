import { Container } from './styles'
import { X, InstagramLogo, FacebookLogo } from 'phosphor-react'
import { useEffect } from 'react'

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])
  return (
    <Container className="mobileVisible" isVisible={menuIsVisible}>
      <X className="xIcon" size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="https://imafashion.netlify.app">Início</a>
        <a href="https://imafashion.netlify.app/#produtos">Produtos</a>
        <a href="https://imafashion.netlify.app/#quemSomos">Quem somos</a>
        <a href="https://imafashion.netlify.app/#newsletter">NewsLetter</a>
        <a href="https://imafashion.netlify.app/#contato">Contato</a>

        <a className="button" href="./login">
          CADASTRO
        </a>
        <section className="social-links">
          <a href="https://instagram.com" target="_blank">
            <InstagramLogo />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FacebookLogo />
          </a>
        </section>
      </nav>
    </Container>
  )
}
