import './App.css';
import Navbar from './Header/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;