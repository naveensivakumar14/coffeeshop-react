import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';


import offer1 from '../assets/images/mug3.jpg'
import offer2 from '../assets/images/cup-price2.jpg'
import offer3 from '../assets/images/cup-price3.jpg'

//AOS animation Library
import Aos from 'aos';
import "aos/dist/aos.css";


//Offer Component

function Offer(){

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

    return(
        <div className="offer-block" data-aos="fade-up">
            <div className='offer-content'>
                <h3>Get our Coffee Magazine</h3>
                <p>The most versatile furniture system ever created. Designed to fit your life.</p>
                <Button variant="dark" className="d-none d-md-inline-block" style={{ borderRadius: '0' }}>Shop Now</Button>
            </div>

            <div className='grid'>
                <div className='grid1'>
                    <img src={offer1} alt="" />
                </div>
                <div  className='grid2'>
                    <img src={offer2} alt="" />
                    <img src={offer3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offer