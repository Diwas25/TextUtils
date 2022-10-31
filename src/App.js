import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#21334e";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  } 

  return (
    <>  
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Textform heading="Enter the text to Analyse Below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
    );
}

export default App;
