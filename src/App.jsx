import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Home></Home>
    </div>
  )
}

export default App