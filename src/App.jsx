import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/header.jsx'
import Acceuil from './components/acceuil.jsx'
import Contact from './components/contact.jsx'
import Service from './components/service.jsx'
import Login from './components/login.jsx'
import Detail from './components/detail.jsx'
import DropCart from './components/DropCart.jsx'
import DropFav from './components/DropFav.jsx'
import './App.css'
import { AppContext } from './components/useContext.jsx'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [sliderCart, setSliderCart] = useState(false)

  const [favoriteItems, setFavoriteItems] = useState([])
  const [favoriteSlider, setFavoriteSlider] = useState(false)

  const [total, setTotal] = useState(0)

  function addToCart(item) {
    setCartItems(prevItems => {
      const existe = prevItems.some(
        produit => produit.id === item.id
      );

      if (existe) {
        return prevItems.map(produit =>
          produit.id === item.id
            ? {
              ...produit,
              quantite: produit.quantite + 1
            }
            : produit
        );
      }

      return [...prevItems, { ...item, quantite: 1 }];
    });
    setTotal(prevTotal => prevTotal + item.price);
  }

  function vueSlideCart() {
    setSliderCart(!sliderCart)
  }


  function addToFavorite(item) {
    setFavoriteItems(prevItems => {
      const alreadyExists = prevItems.some(
        favorite => favorite.id === item.id
      );

      if (alreadyExists) {
        return prevItems;
      }

      return [...prevItems, { ...item, quantite: 1 }];
    });
  }

  function vueFavoriteSlider() {
    setFavoriteSlider(!favoriteSlider)
  }

  function plusQte(item) {
    setCartItems(cartItems.map(produit => produit.id != item.id ? produit : { ...produit, "quantite": produit.quantite + 1 }))
    setTotal(total + item.price)
  }

  function minusQte(item) {
    setTotal(total - item.price)
    if (item.quantite == 1) {
      setCartItems(cartItems.filter(produit => produit != item))
    } else {

      setCartItems(cartItems.map(produit => produit.id == item.id ? { ...produit, "quantite": produit.quantite - 1 } : produit))
    }
  }


  return (
    <>
      <AppContext.Provider value={{cartItems, favoriteItems, vueSlideCart, vueFavoriteSlider, addToFavorite, addToCart, total, plusQte, minusQte, }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/acceuil" />} />
            <Route path='/acceuil' element={<Acceuil />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/login' element={<Login />} />
            <Route path='/detail/:id' element={<Detail />} />
            {/* <Route path='/cart' element={<Cart cartItems={cartItems} />}/> */}
          </Routes>
          {sliderCart ? <DropCart /> : null}
          {favoriteSlider ? <DropFav /> : null}
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App;