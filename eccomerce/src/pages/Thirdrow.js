import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Ascending from '../pages/Ascending'
import Descending from '../pages/Descending';
import Firstrow from '../pages/Firstrow'
import Secondrow from '../pages/Secondrow'
import Fourthrow from '../pages/Fourthrow'
import Contact from '../pages/Contact'
import Modal from 'react-modal/lib/components/Modal';
const nxt2Style = {
  fontSize: '4em',
    color: 'Tomato',
}

const star = {
  fontSize: '2em',
    color: 'Orange',
}


const Thirdrow = () => {
  useEffect( () => {
    fetchItems();
  }, []);
  
  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
    const data = await fetch('/product/thirdrow');
    const items = await data.json();
    setItems(items);
  }

function b64(buffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer)
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  console.log(binary);
  return window.btoa(binary);
}



const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalData, setModalData] = useState(null);
   const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '60%',
      transform: 'translate(-40%, -10%)',
      backgroundColor: 'gold',
    },
  }


  
  return ( 
    <div className='product'>

   <article id='article2'>
   </article>

      <div className='dropdown'>
      <span>Price Order By:<Link to='/product'>Default</Link></span> 
      </div>

      <div className='dropdown2'>
      <span>Products Displayed:<Link to='/thirdrow'>Volumes 7 - 9</Link></span> 
      <div class='dropdown-content2'>
      <Link to='/product'><p id='firlink'>All</p></Link>
      <Link to='/firstrow'><p id='seclink'>Volumes 1 - 3 </p></Link>
      <Link to='/secondrow'><p id='thirlink'>Volumes 4 - 6</p></Link>
      <Link to='/fourthrow'><p id='foulink'>Volumes 10 - 12</p></Link>
      </div>
      </div>
     
     
     <h2 id='producthead'>Our Products</h2>
      <div className='grid-container2'>
      {       
      items.map(item => (
        <div className='grid-item' key={item.id}>
         <img className='products myImg' src={`data:image/jpeg;base64,${b64(item.image.data)}`}
          onClick={()=> {
            setModalData(item);
            setModalIsOpen(true);}} height='150' alt='trouble'/>


        <p id='title'>Title: {item.title}</p> 
        <p id='price'>Price: ${item.price}</p> 
        
        </div> 
      ))
      }
      
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <form action='http://localhost:4000/purchase' method='POST'>
          <input className='invicible' type='text' id='title' name='title' value={modalData && modalData.title} />
          <input className='invicible' type='text' id='price' name='price' value={modalData && modalData.price} />
          <button id='submitbutton' type='submit'>Submit</button>
        </form>
        <h2 id='modaltitle'>{modalData && modalData.title}</h2>
        <p id='modalprices'>${modalData && modalData.price}</p> 
        <span style={star}>
          <i class='fa fa-star'></i>
          <i class='fa fa-star'></i>
          <i class='fa fa-star'></i>
          <i class='fa fa-star'></i>
          <i class='fa fa-star'></i>
        </span>
        <p id='modaldesc'>{modalData && modalData.title} is the latest issue in the dragon ball manga series! Son Goku is the greatest hero on Earth. Five years after defeating the demon king Piccolo, he's grown up and had a family—he's married, and he has a child, Son Gohan. But what is the real reason for Goku's incredible strength? A visitor from outer space arrives bearing terrible news—Goku is an alien, and the visitor, Raditz, is Goku's brother! When Raditz turns out to be a ruthless killer, Goku must fight his incredibly strong brother to save his family and the entire human race. A surprising alliance may be Earth's last hope: Goku will team up with his old enemy Piccolo...archenemies united to save the world!</p>
        <div>
         <button id='closebutton' onClick={() => setModalIsOpen(false)}>X</button>
        </div>
      </Modal>
      
     
<Link to='/contact'><span id='nxt2' style={nxt2Style}>
          <i class='fa-solid fa-circle-right'></i>
          </span></Link>
<Link to='/home'><span id='bck' style={nxt2Style}>
          <i class='fa-solid fa-circle-left'></i>
          </span></Link>
      </div>


          <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="ascending" element={<Ascending />}></Route>
          <Route path='descending' element={<Descending />}></Route>
          <Route path='firstrow' element={<Firstrow/>}></Route>
          <Route path='secondrow' element={<Secondrow/>}></Route>
          <Route path='thirdrow' element={<Thirdrow/>}></Route>
          <Route path='fourthrow' element={<Fourthrow/>}></Route>
        </Routes>
      
    </div>

  )}


export default Thirdrow