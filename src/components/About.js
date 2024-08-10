import Button from 'react-bootstrap/Button';


//About Component
function About(){
    return(
        <div id="about" className="about-block">
            <div className="about-content">
                <h4>Good ideas start with brainstorming 😇 Great ideas start with coffee.</h4>
                <p>Welcome to <bold>Caffeine Corner</bold> your cozy neighborhood spot for a perfect cup of coffee and a warm atmosphere !!!</p>
                <Button variant="primary">Menu</Button>{' '}
                <Button variant="outline-dark">Order</Button>
            </div>
        </div>
    )

}

export default About