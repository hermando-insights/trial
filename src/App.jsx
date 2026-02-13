import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Homepage from './pages/Homepage';
import Belajarpage from './pages/Belajarpage';
import Kontakpage from './pages/Kontakpage';
import Excelpage from './pages/Excelpage';
import Pythonpage from './pages/Pythonpage';
import Sqlpage from './pages/Sqlpage';
import Mtkpage from './pages/Mtkpage';
import CareerPage from './pages/CareerPage';
import AsistenGereja from './pages/AsistenGereja';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar/>

      {/* Content */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ayo-belajar" element={<Belajarpage />} />
        <Route path="/career-page" element={<CareerPage />} />
        <Route path="/hubungi-saya" element={<Kontakpage />} />
        <Route path="/excel-page" element={<Excelpage />} />
        <Route path="/python-page" element={<Pythonpage />} />
        <Route path="/sql-page" element={<Sqlpage />} />
        <Route path="/mtk-page" element={<Mtkpage />} />
        <Route path="/AsistenGereja" element={<AsistenGereja />} />
      </Routes>

      {/* Footer */}
      <Footer/>
    </Router>
  );
}

export default App;