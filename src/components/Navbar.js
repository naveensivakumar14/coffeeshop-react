
//Navbar Component
// function Navbar(){
//     return(
//         <div className='Navbar'>
//             <h3>Caffeine Corner</h3>
//             <div className='Nav_items'>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">Blogs</a></li>
//                 <li><a href="#">Products</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contacts</a></li>
//             </div>
//             <button>Sign Up</button>
//         </div>
//     )
// }

// export default Navbar


//React-Bootstrap Navbar

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import Button from 'react-bootstrap/Button';

// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar bg="light" data-bs-theme="light">
//         <Container className="py-2">
//           <Navbar.Brand className="fw-bold" href="#home">Caffeine Corner</Navbar.Brand>
//           <Nav>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#products">Products</Nav.Link>
//             <Nav.Link href="#blogs">Blogs</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//           <Button variant="dark">Sign up</Button>
//         </Container>
//       </Navbar>



      
//     </>
//   );
// }

// export default ColorSchemesExample;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " sticky="top">
      <Container className='py-2'>
        <Navbar.Brand className='fw-bold' href="#home">Coffeine Corner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#about">Explore</Nav.Link>
            <Button variant="outline-dark">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;



