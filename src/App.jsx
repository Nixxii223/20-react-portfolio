import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [showHeader] = useState(true);
  const [showFooter] = useState(true);

  return (
    <>
      {showHeader && <Header />}
      
      <Outlet />

      {showFooter && <Footer />} 
    </>
  );
}

export default App
