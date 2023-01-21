import React from 'react';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpg';
import greyHoddie from '../images/greyhoddie.jpg';
import blackHoddie from '../images/blackhoddie.jpg'


const Home = () => {
  return (
    <div className='container'>
       <div className='image'>
        <img src={greyTshirt} alt="Grey Tshirt" />
        <h3>Grey Tshirt</h3>
        <h3>$15,00</h3>
        <a className='addToCart cart1' href="#">Add to Cart</a>
       </div>
       <div className='image'>
        <img src={blackTshirt} alt="Black Tshirt" />
        <h3>Black Tshirt</h3>
        <h3>$10,00</h3>
        <a className='addToCart cart2' href="#">Add to Cart</a>
       </div>
       <div className='image'>
        <img src={greyHoddie} alt="Grey Hoddie" />
        <h3>Grey Hoddie</h3>
        <h3>$25,00</h3>
        <a className='addToCart cart3' href="#">Add to Cart</a>
       </div>
       <div className='image'>
        <img src={blackHoddie} alt="Grey Hoddie" />
        <h3>Black Hoddie</h3>
        <h3>$15,00</h3>
        <a className='addToCart cart4' href="#">Add to Cart</a>
       </div>
    </div>
  )
}

export default Home