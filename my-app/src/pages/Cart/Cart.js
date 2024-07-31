
import './Cart.css'
import Car from '../../images/carimages/pexels-pixabay-210019.jpg'
import DeleteIcon from '../../images/icons/icons8-delete-16.png'
import Bike1 from '../../images/bikeimages/superbike-930715_1280.jpg'
import Cycle1 from '../../images/cyclesimages/bike-7342379_1280.png'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
export default function Cart() {
    const affan1=useNavigate();
    const goShopping=()=>{
        affan1('/products')
    }
    
    const[caritem,setcarItem ]=useState(1)

    const carincrement1=()=>{
        setcarItem(caritem+1)
    }
    const cardecrement1=()=>{
        if(caritem>1)
        setcarItem(caritem-1)
    }

    const[bikeitem,setbikeItem ]=useState(1)

    const bikeincrement1=()=>{
        setbikeItem(bikeitem+1)
    }
    const bikedecrement1=()=>{
        if(bikeitem>1){
        setbikeItem(bikeitem-1)
    }
}

    const[cycleitem,setcycleItem ]=useState(1)

    const cycleincrement1=()=>{
        setcycleItem(cycleitem+1)
    }
    const cycledecrement1=()=>{
        if(cycleitem>1)
        setcycleItem(cycleitem-1)
    }
    return (
        <>
            <div className='Header'>
                <b> YOUR BAG</b>
            </div>
            <div className='button-wrapper'>
                <div className='header-button1'>
                    <button onClick={goShopping}>CONTINUE SHOPPING</button>
                </div>
                <div className='header-button2'>
                    <u>YOUR WISHLIST!</u>
                </div>
                <div className='header-button3'>
                    <button>CHECKOUT NOW</button>
                </div>
            </div>
            {/* Products1 */}
            <div className='product-wrpper'>
            <div className='product-list'>
                <div className='container1'>
                    <img src={Car} alt="car" />
                    <div className='container1-detail'>
                        <div><b> Product:  </b> Red Lamborgini </div>
                        <div><b>Desc:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officia.</div>
                        <div><b>Color:</b>Red </div>
                        <b>Model:</b>Le vanchor nore
                    </div>
                </div>

                <div className='button-container1'>
                    <u>price</u>
                    <div className='product-list-button'>
                        <button onClick={cardecrement1} >-</button>
                        {caritem}
                        <button onClick={carincrement1}>+</button>
                    </div>
                    ${500 *caritem}
                </div>

                <div className='deleteicon'>
                  <button>  <img src={DeleteIcon} alt="delete" /></button>
                </div>
            </div>
            </div>


{/* Products1 */}
<div className='product-wrpper2'>
            <div className='product-list'>
                <div className='container1'>
                    <img src={Bike1} alt="bike" />
                    <div className='container1-detail'>
                        <div><b> Product:  </b> Ninja</div>
                        <div><b>Desc:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officia.</div>
                        <div><b>Color:</b>Red </div>
                        <b>Model:</b> ZX 10R
                    </div>
                </div>

                <div className='button-container1'>
                    <u>price</u>
                    <div className='product-list-button'>
                        <button onClick={bikedecrement1}>-</button>
                        {bikeitem}
                        <button onClick={bikeincrement1}>+</button>
                    </div >
                    ${300 *bikeitem}
                </div>

                <div className='deleteicon'>
                   <button> <img src={DeleteIcon} alt="delete" /></button>
                </div>
            </div>
            </div>

            {/* cycles */}
            <div className='product-wrpper3'>
            <div className='product-list'>
                <div className='container1'>
                    <img src={Cycle1} alt="cycle" />
                    <div className='container1-detail'>
                        <div><b> Product:  </b> Suhrab Cycle</div>
                        <div><b>Desc:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officia.</div>
                        <div><b>Color:</b>Black</div>
                        <b>Model:</b> 2023
                    </div>
                </div>

                <div className='button-container1'>
                    <u>price</u>
                    <div className='product-list-button'>
                        <button onClick={cycledecrement1}>-</button>
                        {cycleitem}
                        <button onClick={cycleincrement1}>+</button>
                    </div>
                    ${100 *cycleitem}
                </div>

                <div className='deleteicon'>
                   <button> <img src={DeleteIcon} alt="delete" /></button>
                </div>
            </div>
            </div>
        </>
    )
}
