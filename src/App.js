import Header from './Components/Header/index.js';
import Footer from './Components/Footer/index.js';
import Home from './Pages/Home';
import Login from './Pages/Login';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
