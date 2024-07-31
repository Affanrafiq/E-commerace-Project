import React from 'react'
import './Footer.css';
import ARlogo from '../../images/icons/AdobeStock_577602826_Preview.svg';
import Facebook from '../../images/icons/icons8-facebook-48.png';
import Instagram from '../../images/icons/icons8-instagram-48.png';
import Twiter from '../../images/icons/icons8-twitter-48.png';
import Map from '../../images/icons/google-maps.png';
import Phone from '../../images/icons/telephone-call.png';
import Email from '../../images/icons/email.png';

export default function Footer() {
  return (
    <>
    
        <div className='Footer-wrapper'>
          <div className='Footer-container'>

            <img src={ARlogo} alt="AdobeStock_577602826_Preview.svg" />
          </div>
          <div className='Link1'>
            <p><b>Useful Links</b></p>
            <p>Home</p>
            <p>CARS</p>
            <p>Accessories</p>
            <p>WishList</p>
            <p>Order Tracking</p>
          </div>
          <div className='Link2'>
            <p></p>
            <p>Cart</p>
            <p>Heavy Bikes</p>
            <p>My Account</p>
            <p>Team</p>
            <p>WishList</p>
          </div>
          <div className='Link3'>
            <p><b> Contact</b></p>
            <div className='Contact-link1'>
              <img src={Map} alt="google-maps " />
              Pakistan,Punjab,Islamabad
            </div>
            <div className='Contact-link1'>
              <img src={Phone} alt="telephone-call"  />
              03091154372
            </div>
            <div className='Contact-link1'>
              <img src={Email} alt="email.png"  />
              affanrafique781@gmail.com
            </div>

            <a href='https://www.facebook.com/'><img src={Facebook} alt="icons8-facebook-48.png" className='Contact-pics' /></a>
            <a href='https://www.instagram.com/'><img src={Instagram} alt="icons8-instagram-48.png" className='Contact-pics' /></a>
            <a href='https://twitter.com/'> <img src={Twiter} alt="icons8-twitter-48.png" className='Contact-pics' /></a>
          </div>

        </div>


      
    </>
  )
}
