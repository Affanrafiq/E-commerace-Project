
import './Product.css'
import Car1 from '../../images/carimages/pexels-mike-bird-244206.jpg'
import Car2 from '../../images/carimages/pexels-albin-berlin-919073.jpg'
import Car3 from '../../images/carimages/pexels-aleksey-kuprikov-3786091.jpg'
import Car4 from '../../images/carimages/pexels-arnie-watkins-3156482.jpg'
import Car5 from '../../images/carimages/pexels-zsolt-joo-2882234.jpg'

import Bike1 from '../../images/bikeimages/moto-bikes-6867911_1280.jpg'
import Bike2 from '../../images/bikeimages/superbike-930715_1280.jpg'
import Bike3 from '../../images/bikeimages/motocross-2028197_1280.png'
import Bike4 from '../../images/bikeimages/motorbike-1297213_1280.png'
import Bike5 from '../../images/bikeimages/motorcycle-569865_1280.jpg'

import Cycle1 from '../../images/cyclesimages/bicycle-1456759_1280.png'
import Cycle2 from '../../images/cyclesimages/bicycle-38028_1280.png'
import Cycle3 from '../../images/cyclesimages/bicycle-1456759_1280.png'
import Cycle4 from '../../images/cyclesimages/bike-7342379_1280.png'
import Cycle5 from '../../images/cyclesimages/snow-4696684_1280.jpg'

import Cart from '../../images/icons/shopping-cart.png'
import Favroute from '../../images/icons/heart.png'

export default function Product() {
    return (
        <>
            <div id='Product'>
                <b> PRODUCTS </b>
            </div>
            <div className='Header-produts'>
                <div>
                    <label > Filter products: </label>
                    <select name="Color" id="selection1" >
                    <option value="">Choose Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="white">white</option>
                        <option value="black">Black</option>
                    </select>
                </div>

                <div>
                    <select name="MODELS" id="selection2">
                        <option value="models">Models</option>
                        <option value="bmw">Bmw</option>
                        <option value="audi">Audi</option>
                        <option value="bugati">Bugati</option>
                        <option value="ninja">Ninja</option>
                    </select>
                </div>
                <div className='section3'>
                    <div>
                        <label > Sort Products:</label>
                        <select name="Varity" id="selection3">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='cars-wrapper'>

                <div className='car-container'>
                    <img src={Car1} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Car2} alt="car2" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Car3} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Car4} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Car5} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>
                {/* Bike section */}

                <div className='car-container'>
                    <img src={Bike1} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Bike2} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Bike3} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Bike4} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Bike5} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>
                {/* Cycle section */}


                <div className='car-container'>
                    <img src={Cycle1} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Cycle2} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Cycle3} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Cycle4} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

                <div className='car-container'>
                    <img src={Cycle5} alt="car" className='car' />
                    <div className='combine-buttons'>
                        <button><img src={Cart} alt="cart" className='car-buttons' /></button>
                        <button><img src={Favroute} alt="heart" className='car-buttons' /></button>
                    </div>
                </div>

            </div>


        </>
    )
}
