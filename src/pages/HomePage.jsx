import { About } from '../components/About/About'
import Footer from '../components/Footer/Footer'
import { Home } from '../components/Home/Home'
import '../styles/HomePage.css'

import Newletter from '../components/Newletter/Newletter'
import { Contato } from '../components/Contato/Contato'
import Produtos from '../components/Produtos/Produtos'
import { useProducts } from '../hooks/useProducts'

export function HomePage() {
  const produtos = useProducts()
  return (
    <div className="HomePage">
      <Home />
      <Produtos />
      <About />
      <Newletter />
      <Contato />
      <Footer />
    </div>
  )
}
