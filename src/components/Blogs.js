import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect } from 'react';

import blog1 from '../assets/images/coffee-testi1.jpg'
import blog2 from '../assets/images/coffee-testi2.jpg'
import blog3 from '../assets/images/coffee-testi3.jpg'


//AOS animation Library
import Aos from 'aos';
import "aos/dist/aos.css";



function GroupExample() {

//react scroll animation using aos library
useEffect(()=>{
    Aos.init({duration: 2000});
},[])

//appearance
  return (
    <div id='blogs' className='blogs'>
        <CardGroup>
        <Card  className='border-0' data-aos="fade-up" >
            <img className='py-4 px-2 border-0' src={blog1} alt="" />
            <Card.Body>
            <Card.Title>Our Bakery</Card.Title>
            <Card.Text>
                Try our quality backery products, Experience the joy of homemade goodness, baked fresh daily just for you.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card  className='border-0' data-aos="fade-up">
            <img className='py-4 px-2 border-0' src={blog2} alt="" />
            <Card.Body>
            <Card.Title>Behind the mugs</Card.Title>
            <Card.Text>
                Quality and taste are the majar priority of ours and take a break with our cups and visit regularly.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className='border-0' data-aos="fade-up">
            <img className='py-4 px-2 ' src={blog3} alt="" />
            <Card.Body>
            <Card.Title>Our Premium's</Card.Title>
            <Card.Text>
                From classic favorites to unique creations, we offer a delightful selection to satisfy every craving."
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>

        
    </div>
    
  );
}

export default GroupExample;