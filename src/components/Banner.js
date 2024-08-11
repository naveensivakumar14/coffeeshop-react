import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../assets/images/coffee-banner-1.jpg';
import Carosuel2 from '../assets/images/coffee-banner-2.jpg';
import Carosuel3 from '../assets/images/coffee-banner-3.jpg';

function UncontrolledExample() {
  return (

    <div id='hero' className='Hero'>
        <div  className='container hero-block'>
            <Carousel>
                <Carousel.Item>
                    <img src={Carosuel3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Carosuel2} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Carousel1} alt="" />
                </Carousel.Item>
            </Carousel>
        </div>
    </div>

 
  );
}

export default UncontrolledExample;