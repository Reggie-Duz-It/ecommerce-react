import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Welcomelogo from '../assets/images/zchan2.png'
import Welcomeimage from '../assets/images/dragon_ball_z___all_characters__budokai__by_maxiuchiha22_dbsvx9k-fullview.png'
import Fd1 from '../assets/images/474474.jpeg'
import Fd2 from '../assets/images/20496093.jpeg'
import Fd3 from '../assets/images/5278903.jpeg'
import Us from '../assets/images/DBAFL.jpeg'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
const nxtStyle = {
  fontSize: '4em',
    color: 'Tomato',
}

const Home = () => {
  return (
    <div className='Home'>
    <h1 id='welcomeh1'>Welcome To</h1>
    <img id='welcomelogo' src={Welcomelogo} height='150' width='380' alt='welcomelogo' />
    <img id='welcomeimage' src={Welcomeimage} alt='Welcome' />

    <figure id='slideshow' className='fadein'>
      <img id='fd1' src={Fd1} alt='slide-image1' />
      <img id='fd2' src={Fd2} alt='slide-image2' />
      <img id='fd3' src={Fd3} alt='slide-image3' />
    </figure>

    <div className='article-container'>
      <div className='grid-item1'>
        <h2>About Us</h2>
        <figure>
          <img id='us' src={Us} height='200' width='350' alt='us' />
        </figure>
      </div>

      <div className='grid-item2'>
        <p>We, the creators of this site, are a group of dedicated fans who are in love with the
          dragon ball franchise. We like many others are glad that even after decades, the franchise
          is still growing, and that a new generatipn of content, merchandise, and fandom are emerging
          from this era. To commemorate and show our excitement, we want to share with you newcomers, 
          some quality products that we grew up on, and were ecstatic for when they came out. For some 
          that are new to the world of Dragon Ball, and got started watching some of the newer content; 
          you get to experience some of the orginal content that made series we love world wide, and all 
          for a cheap price!
        </p>

        <Link to='/product'><span id='nxt' style={nxtStyle}>
          <i class='fa-solid fa-circle-right'></i>
          </span></Link>
      </div>
      <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>

    </div>


    </div>
  )
}

export default Home