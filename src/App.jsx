import { Routes, Route } from 'react-router-dom'

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

function App() {
 
  return <>
  
  {/* Navbar */}
  <Navbar/>


  {/* Content */}
  <Routes>
    <Route path="/" element = {<Homepage />} />
    <Route path="/ayo-belajar" element = {<Belajarpage />} />
    <Route path="/career-page" element = {<CareerPage />} />
    <Route path="/hubungi-saya" element = {<Kontakpage />} />
    <Route path="/excel-page" element = {<Excelpage />} />
    <Route path="/python-page" element = {<Pythonpage />} />
    <Route path="/sql-page" element = {<Sqlpage />} />
    <Route path="/mtk-page" element = {<Mtkpage />} />
  </Routes>

  {/* Footer */}
  <Footer/>
  </>
}

export default App;
