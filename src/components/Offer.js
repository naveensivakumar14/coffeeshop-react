import Button from 'react-bootstrap/Button';



import offer1 from '../assets/images/mug3.jpg'
import offer2 from '../assets/images/cup-price2.jpg'
import offer3 from '../assets/images/cup-price3.jpg'

//Offer Component

function Offer(){
    return(
        <div className="offer-block">
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