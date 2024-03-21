import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="App">
      {showHeader && <Header />}
      <Outlet />
    </div>
  );
}

export default App
