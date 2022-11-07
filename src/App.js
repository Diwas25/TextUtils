import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(() => {
        setAlert(null)
      },1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#21334e";
      showAlert("Dark Mode has been enabled" ,"success");
      document.title = "Textutils : Dark Mode";
      // setInterval(()=> {
      //   document.title = 'Textutils is Amaxing'
      // },2000);
      // setInterval(()=> {
      //   document.title = 'install Textutils'
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled" ,"success");
      document.title = "Textutils : Light Mode"
    }
  } 

  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to Analyse Below" mode={mode}/>}>
          </Route>
      </Routes>
      </div>
    </Router>  
    </>
    );
}

export default App;
