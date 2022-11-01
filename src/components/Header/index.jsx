import { Link } from 'react-router-dom'
import { Container, TextLink } from './styles'

import logoImg from '../../assets/logo-dark.png'

import { MagnifyingGlass, ShoppingCart } from 'phosphor-react'
import { RiMenu3Fill } from 'react-icons/ri'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/cartContext'

export function Header({ setMenuIsVisible }) {
  const { cart } = useContext(CartContext)

  return (
    <Container>
      <section>
        <Link to={`/`}>
          <img src={logoImg} width="200px" alt="Logo" />
        </Link>

        <nav>
          <a href="https://imafashion.netlify.app/">Início</a>
          <a href="https://imafashion.netlify.app/#produtos">Produtos</a>
          <a href="https://imafashion.netlify.app/#quemSomos">Quem somos</a>
          <a href="https://imafashion.netlify.app/#newsletter">NewsLetter</a>
          <a href="https://imafashion.netlify.app/#contato">Contato</a>
        </nav>
      </section>

      <section className="icons">
        <Link to="carrinho">
          <ShoppingCart className="ShoppingIcon" />
          <TextLink className="CartLength">{cart?.length}</TextLink>
        </Link>

        <Link to="busca">
          <MagnifyingGlass className="icon" />
        </Link>

        <RiMenu3Fill
          onClick={() => setMenuIsVisible(true)}
          className="mobile"
        />
      </section>
    </Container>
  )
}
