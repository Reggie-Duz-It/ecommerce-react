import React, {useEffect, useState} from 'react';
import Modal from 'react-modal/lib/components/Modal';
import Visa from './assets/images/Visa-Logo-PNG-Pic.png'
import Master from './assets/images/mastercard_PNG16.png'
import American from './assets/images/American-Express-Color.png'
import Discovery from './assets/images/735-7354868_discover-credit-card-logo-png-discover-logo-transparent.png'





const Cart = () => {
  useEffect( () => {
    fetchTotal();
    fetchItems();
  }, []);
  
  const [total, setTotal] = useState();
  
  const fetchTotal = async () => {
    const data = await fetch('/purchasetotal');
    const items = await data.json();
   setTotal(items[0].Total)
  
  }

  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
    const data = await fetch('/purchase');
    const items = await data.json();
    setItems(items);
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

   <article id='article4'>
   </article>

     
     <h2 id='producthead'>Your Shopping Cart</h2>
      <div className='grid-container3'>
      {    
      items.map(item => (
        <div className='grid-item' key={item.id}>
        <p id='carttitle'>Title: {item.title}</p> 
        <p id='cartprice'>Price: ${item.price}</p> 
        <hr />
        </div>
      ))
      }
      
      <p id='totalprice'>Your Total: ${total}</p>
      <button onClick={()=> {
            setModalData(total);
            setModalIsOpen(true);}} id='checkout'>Checkout</button>

      <img id='card1' src={Visa} height='50' width='150' alt='visa' />
      <img id='card2' src={Master} height='80' width='150' alt='master' />
      <img id='card3' src={American} height='80' width='150' alt='american' />
      <img id='card4' src={Discovery} height='70' width='150' alt='discovery' />

<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <form action='http://localhost:4000/delete' method='POST'>
          <input type='text' id='totprice' name='totprice' value={total} />
          <button id='totsubmit' type='submit'>Complete Checkout</button>
        </form>
        <h2 id='tottitle'>Transaction</h2>
        <p id='modalprices'>Money in the amount of ${total} will be withdrawn from Somesh's Account!</p> 
        <div>
         <button id='closebutton' onClick={() => setModalIsOpen(false)}>X</button>
        </div>
      </Modal>
      
    </div>
</div>
  )}


export default Cart