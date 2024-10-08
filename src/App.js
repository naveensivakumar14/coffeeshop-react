
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Imporing React Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Products from './components/Products'
import Offer from './components/Offer';
import Blogs from './components/Blogs'
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Products></Products>
      <Offer></Offer>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
