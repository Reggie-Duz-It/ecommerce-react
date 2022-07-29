import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import DBCast from '../assets/images/Dragon_Ball_Cast.png'
import Product from '../pages/Product'
const nxt3Style = {
  fontSize: '4em',
    color: 'Tomato',
}

const Contact = () => {

  function validateForm() {
    let x = document.forms['fanForm']['fname'].value;
    let y = document.forms['fanForm']['lname'].value;
    let z = document.forms['fanForm']['phone'].value;
    let v = document.forms['fanForm']['email'].value;
    if (x === ''){
      alert ('First name must be filled out');
      return false;
    }

    else if (y === ''){
      alert ('Last name must be filled out');
      return false;
    }

    else if (z === ''){
      alert ('Phone number must be filled out');
      return false;
    }

    else if (v === ''){
      alert ('Email must be filled out');
      return false;
    }
  }
  return (
    <div className='contact'>
      <h2 id='contacthead'>Contact Us</h2>
      <article id='article3'>
      </article>
      <br/>
      <br/>
      <h2>Contact Us</h2>
      <p id='precontact'>For more info or questions, please submit your information below and we'll be sure to get back to you</p>
      <form id='contactform' name='fanForm' onSubmit={validateForm}  method='POST'>
        <label for='fname'>First name:</label><br/>
        <input type='text' id='fname' name='fname' /><br/>
        <label for='lname'>Last name:</label><br/>
        <input type='text' id='lname' name='lname' /><br/>
        <label for='phone'>Phone number:</label><br/>
        <input type='text' id='phone' name='phone' /><br/>
        <label for='email'>Email:</label><br/>
        <input type='email' id='email' name='email' /><br/>
        <label for='comments'>Comments:</label><br/>
        <textarea id='comments' name='comments' rows='7' cols='25' ></textarea>
        <input type='submit' value='Submit' />
      </form>
      <article>
        <img id='dbcast' src={DBCast} height='300' width='425' alt='cast' />
      </article>

      <Link to='/product'><span id='bck2' style={nxt3Style}>
          <i class='fa-solid fa-circle-left'></i>
          </span></Link>

          <Routes>
          <Route path="product" element={<Product />}></Route>
        </Routes>
    </div>
  )
}

export default Contact