import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Default from './components/Default';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route element={<Default/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
