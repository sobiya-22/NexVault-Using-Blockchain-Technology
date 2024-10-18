import Branding from './components/Branding';
import Navbar from './components/Navbar';
import ServiceCards from './components/ServiceCards';
import React from 'react';
import AboutUs from './components/About-us';
import LearnMore from './components/LearnMore';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Mainpage from './Mainpage';

function App() {
  return (
    <>

     
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/LearnMore" element={<LearnMore/>} />
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/About-us" element={<AboutUs/>}/>
      </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;

