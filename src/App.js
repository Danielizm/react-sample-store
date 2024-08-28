import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Details from './components/Details';
import ProductModal from './components/ProductModal'

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route element={<Default/>} />
        </Routes>
        <ProductModal/>
      <Footer />
    </div>
  );
}

export default App;
