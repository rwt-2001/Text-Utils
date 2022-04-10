import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

import Alert from './components/Alert';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const title = "TXT Here!";


function App() {
  const [mode,setMode] = useState("light");
  const [modeInv,setModeInv] = useState("dark");
  const [alert,setAlert] = useState(null);
  const handleMode=()=>{
    if (mode==="light"){
      setMode("dark");
      setModeInv("light")
      document.body.style.backgroundColor = "#212121";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      setModeInv("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
  }

  const showAlert = (msg,type)=>{
    setAlert({
      message:msg,
      type:type
    })
  }

  return (<>
   <Router>
    <Navbar title={title}  mode={mode} modeInv={modeInv} handlemode={handleMode}/>
    <Alert alert={alert} />
    <div className="container"  >
     
    <Switch>
      <Route path="/">
        <Textform mode={mode}/>
      </Route>
    </Switch>
    
    </div>
    </Router>
    </>
  
  );
}

export default App;
