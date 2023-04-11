import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null)
    }, 2000 )
  }
  
  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success")

    }
  }


 return (
    <>
      <Router>
      <Navbar title="Utilexts" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
        </Routes>
      </div>
   </Router>

    </>
  );
}

export default App;
