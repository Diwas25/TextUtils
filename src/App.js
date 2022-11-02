import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
          msg: message,
          type: type
      })
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#21334e";
      showAlert("Dark Mode has been enabled" ,"success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled" ,"success");
    }
  } 

  return (
    <>  
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Textform showAlert={showAlert} heading="Enter the text to Analyse Below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
    );
}

export default App;
