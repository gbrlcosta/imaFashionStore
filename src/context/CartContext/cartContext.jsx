import { createContext, useEffect, useState } from 'react'
import { productsData } from '../../database/productsData'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [estoque, setEstoque] = useState(productsData)

  

  const [cart, setCart] = useState([])
  
  useEffect(()=>{
    if(cart?.length > 0) {
      window.localStorage.setItem("imacart", JSON.stringify(cart))
    } 
  },[cart])

  useEffect(()=>{
    if(window.localStorage.getItem("imacart")){
      const localCartStorage = JSON.parse(window.localStorage.getItem("imacart"))
      setCart([...localCartStorage])
    }
  },[])

  function handleAddItemToCart(id, img, name, price, qty, size) {
    const itemObject = { id, img, name, price, qty, size }

    const hasProductOnCart = cart.find(product => product.id === id && product.size === size )

    if(hasProductOnCart){
      alert("Este produto já existe no carrinho!")
    }else{
      setCart([...cart, itemObject])
    }
  }

  const totalPrice = cart?.reduce(
    (acumulator, product) => acumulator + product.price * product.qty,
    0
  )

  function onRemove(index) {
    setCart(
      cart?.filter((produto, key) => key !== index)
    )
  }


  function onIncrease(productId, size) {

    setCart(
      cart?.map(product => ( product?.id === productId && product.size === size ? { ...product, qty: product?.qty + 1 } : {...product}))
    )
  }


  function onDecrease(productId, size) {

    if(cart?.find(product=>product.id === productId && product.qty === 1 && product.size === size)) return

    setCart(
      cart?.map(product => ( 
          product?.id === productId && product.size === size  
          ? { ...product, qty: product?.qty - 1 } 
          : {...product}
        )
      )
    )
  }

  return (
    <CartContext.Provider
      value={{ estoque, cart, handleAddItemToCart, totalPrice, onIncrease, onDecrease, onRemove }}
    >
      {children}
    </CartContext.Provider>
  )
}
