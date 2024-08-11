import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

//animation Library
import Aos from 'aos';
import "aos/dist/aos.css";

//About Component
function About(){

     //react scroll animation using aos library
     useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

    return(
        <div id="about" className="about-block" data-aos="fade-up">
            <div className="about-content">
                <h2>Welcome</h2>
                <h4>Good ideas start with brainstorming 😇 Great ideas start with coffee.</h4>
                <p>Welcome to <bold>Caffeine Corner</bold> your cozy neighborhood spot for a perfect cup of coffee and a warm atmosphere !!! There are countless varieties of coffee, ranging from the strong and robust espresso to the creamy and smooth latte, each offering a unique taste experience. Beyond its flavor, coffee has also been linked to numerous health benefits, including improved mental alertness and a reduced risk of certain diseases. Check out our Coffee's.</p>
                <Button variant="primary">Menu</Button>{' '}
                <Button variant="outline-dark">Order</Button>
            </div>
        </div>
    )

}

export default About