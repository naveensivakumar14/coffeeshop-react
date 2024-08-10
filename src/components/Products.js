import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//imporing images from assets

import cup1 from '../assets/images/mug1.jpg'
import cup2 from '../assets/images/mug2.jpg'
import cup3 from '../assets/images/mug3.jpg'
import cup4 from '../assets/images/mug4.jpg'
import cup5 from '../assets/images/mug5.jpg'
import cup6 from '../assets/images/mug6.jpg'

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container id='products'>
      <Row md={4}>
        <Col sm={2} md={4}>
            <div className='product'>
                <img src={cup1} alt="mug1" />
                <h4>Red Love Cup</h4>
            </div>
        </Col>
        <Col sm={2} md={4}>
            <div className='product'>
                <img src={cup2} alt="mug1" />
                <h4>Black Raisins Cup</h4>
            </div>
        </Col>
        <Col sm={2} md={4}>
            <div className='product'>
                <img src={cup3} alt="mug1" />
                <h4>Endless Espresso</h4>
            </div>
        </Col>
        <Col sm={2} md={4}>
            <div className='product'>
                <img src={cup4} alt="mug1" />
                <h4>Regular Cup</h4>
            </div>
        </Col>
        <Col sm={2} md={4}>
            <div className='product'>
                <img src={cup5} alt="mug1" />
                <h4>Cinnamon cup</h4>
            </div>
        </Col>
        <Col sm={2} md={4}>
            <div className='product'>
                <img src={cup6} alt="mug1" />
                <h4>Pink Premium Cup</h4>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RowColLayoutColWidthBreakpointExample;