import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login/Login';
import Footer from './Footer/Footer';
import Navbar2 from './Header/Navbar';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Signup />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Product />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
