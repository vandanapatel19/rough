import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
      
  }

  return (
   <>
   {/* <Router> */}
    <Navbar title="Textutils"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className="container my-3">
      {/* <Routes> */}
        {/* <Route exact path="/" element={ */}
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
        {/* <Route exact path="/about" element={<About/>}/> */}
      {/* </Routes> */}
     </div>
     {/* </Router> */}
  
   </>
  );
}

export default App;
