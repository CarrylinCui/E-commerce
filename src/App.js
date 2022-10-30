import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import pic from './assets/images.jpeg'


const App = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.products.list().then(res => {
      setProducts(res.data)
    })
  }

  const [cart, setCart] = useState({});

  const fetchCart = () => {
    commerce.cart.retrieve().then((res) => {
      setCart(res)
    })
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])


  const addToCart = (productID, quantity) => {
    commerce.cart.add(productID, quantity);
    window.location.href = '/Cart'
  }

  const updateCart = async (productID, quantity) => {
    setCart(await commerce.cart.update(productID, { quantity }))
  }

  return (
    <div>
      <Router>
        <Navbar total_items={cart.total_items} />
        <Routes>
          <Route path="/" element={
            <div className='container-fluid' style={{ backgroundColor: '#faf0e6' }}>
              <img src={pic} alt='bg' style={{ width: '100%', height: '400px' }} />
              <div style={{ backgroundColor: 'white', textAlign: 'center', height: '50px', fontSize: '20px', paddingTop: '10px' }}>
                BEANS&GROUND
              </div>
              <div className='row' style={{ paddingLeft: '220px', paddingRight: '220px' }}>
                {
                  products.map((product) => {
                    return <Product key={product.id} product={product} addToCart={addToCart} />
                  })
                }
              </div>
              <Footer />
            </div>
          } />
          <Route path="/Cart" element={<Cart cart={cart} updateCart={updateCart} />} />
          <Route path='/Checkout' element={<Checkout />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
