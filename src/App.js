import Header from './Components/Header/index.js';
import Footer from './Components/Footer/index.js';
import Home from './Pages/Home';
import Carrinho from './Components/Carrinho/index.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
