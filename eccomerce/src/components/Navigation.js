import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Ascending from '../pages/Ascending'
import Descending from '../pages/Descending'
import Firstrow from '../pages/Firstrow'
import Secondrow from '../pages/Secondrow'
import Thirdrow from '../pages/Thirdrow'
import Fourthrow from '../pages/Fourthrow'
import Cart from '../Cart'
const Navigation = () => {
  return (
    <div className="App">
      <nav>
        <ul>
         <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="product">Products</Link>
        </li>
        <li>
          <Link to="contact">Contacts</Link>
        </li>
        </ul>
       </nav>
       <div className="main">
        {/*Define all the routes*/}
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path='ascending' element={<Ascending/>}></Route>
          <Route path='descending' element={<Descending/>}></Route>
          <Route path='firstrow' element={<Firstrow/>}></Route>
          <Route path='secondrow' element={<Secondrow/>}></Route>
          <Route path='thirdrow' element={<Thirdrow/>}></Route>
          <Route path='fourthrow' element={<Fourthrow/>}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
    </div>
    </div>
  )
}

export default Navigation