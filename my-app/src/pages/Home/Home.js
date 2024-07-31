import React from 'react'
import './Home.css'
import Frontimg from '../../images/icons/logopic.jpg';
import Bic from '../../images/bikeimages/motorcycle-1283299_1280.jpg';
import Car from '../../images/carimages/pexels-jay-pizzle-3802510.jpg';
import Cycle from '../../images/cyclesimages/bike-7342379_1280.png';
import EmailButton from '../../images/icons/icons8-next-48.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
const shopping=useNavigate();
const handleProducts=()=>{
  shopping('products')
}
  return (
    <>
      <div className='Whole-container'>
        <div className='Header-Wrapper'>
          <img id='img' src={Frontimg} alt="logopic.jpg" />
          <div className='discription'>
            <b> Latest Models </b>
            <i>'Don't Judge a Book by it's cover'.Get 10% off on each item. </i>

            <button>Show More</button>
          </div>
        </div>


        <div className='All-body-Wrapper'>
          <div className='body-wrapper'>
            <img src={Bic} alt="motorcycle-1283299_1280.jpg" />
            <div className='btn-group'>
              <p><b>MOTOR BIKES</b></p>
              <button onClick={handleProducts}>Shop Now</button>
            </div>
          </div>
          <div className='body-wrapper'>
            <img src={Car} alt="pexels-jay-pizzle-3802510.jpg" />
            <div className='btn-group'>
              <p><b>CARS</b></p>
              <button onClick={handleProducts}>Shop Now</button>
            </div>
          </div>
          <div className='body-wrapper'>
            <img src={Cycle} alt="bike-7342379_1280.png" />
            <div className='btn-group'>
              <p><b>BICYCLES</b></p>
              <button onClick={handleProducts}>Shop Now</button>
            </div>
          </div>
        </div>

        <div className='Email-container'>
          <div className='Email-wrapper'>
            <h2>  News Letters </h2>
            <p> <i>Get timely from your Products </i></p>
            <div className='input-field'>
              <input type="email" placeholder='your email' />
              <button><img src={EmailButton} alt="icons8-next-48.png" /></button>
            </div>

          </div>

        </div>
</div>
       
    </>
  )
}

