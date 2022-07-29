import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Cart from './Cart';
import Headlogo from './assets/images/zchan.png'
import Pixelslide from './assets/images/d4jrskn-fe727634-41a9-4fc7-97c5-c910a9bc8ffc.gif'
import Navigation from './components/Navigation'
import Footer from './components/Footer';
const cartStyle = {
  fontSize: '2em',
  color: 'Tomato',
  zIndex: '',
}

window.addEventListener('load', () => {
  let slidepic = document.getElementById('pixelslide');
  slidepic.classList.add('startslide');
  const loader = document.querySelector(".loader");
  loader.className += " hidden";

})

function App() {
  return (
    <div className="App">
      <div className='loader'>
      </div>
     <img id='headlogo' src={Headlogo} height='90' width='180' alt='logo' />
     <img id='pixelslide' src={Pixelslide} height='90' width='130' alt='pixel' />
     <Link to='/cart'>
     <span id='sc' style={cartStyle}>
       <i class='fa-solid fa-cart-shopping'></i>
     </span>
     </Link>
     <Navigation />
     
    <div id='sidebar1'>
     </div>

     <div id='sidebar2'>
     </div>

     <Footer />

     <Routes>
          <Route path='cart' element={<Cart/>}></Route>
        </Routes>
    </div>
  )
}

export default App;
