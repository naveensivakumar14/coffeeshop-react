 import { useEffect } from 'react';

//AOS animation Library
import Aos from 'aos';
import "aos/dist/aos.css";

//Footer Component

function Footer(){

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return(
        <div id="contacts" className="Footer"  data-aos="fade-up">
            <div className='footer-block1'>
                <h4>Caffeine Corner</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Blogs</li>
                    <li>Our Styles</li>
                    <li>Contact Us</li>
                </ul>
                <p>&copy; 2022 CC, Inc</p>
            </div>

            <div className='footer-block2'>
                <input type="text" name="" id="" />
                <button>Enquire</button>
                <p>We’re Always Happy to Help</p>
                <h3>us@coffeinecorner.io</h3>
            </div>
           
        </div>
    )
}

export default Footer