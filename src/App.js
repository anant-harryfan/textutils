// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState, useSyncExternalStore } from "react";
import Alert from "./Components/Alert";
import { Route, Routes} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const [type, setType] = useState("primary");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setBtnText("Enable Light Mode");
      showAlert("Successfully Enabled DarkMode", "success");
      // document.title = "TextUtils: Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setBtnText("Enable Dark Mode");
      showAlert("Successfully Enabled LightMode", "success");
      // document.title = "TextUtils: Light Mode";
      setType("primary");
    }
  };

  const ThemeC = (bgColor, textColor, btn) => {
    if (Mode === "dark") {
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = textColor;
      setType(btn);
    } else {
      showAlert("1st enable dark mode", "danger");
    }
  };

  return (
    <>
      
        {/* props matlab bas information hota hai according to page */}
        {/* <Navbar/> */}
        <Navbar
          title="TextUtils"
          aboutT="About TextUtils"
          mode={Mode}
          toggleMode={toggleMode}
          text={btnText}
          theme={ThemeC}
          typo={type}
        />

        <Alert alert={alert} />
        <div className="container">
        <Routes>
        
      
        <Route path="/" element={<TextForm heading="Try TextUtils" mode={Mode} typo={type}/>}/>
        <Route path="/about" element={<About mode={Mode} typo={type}/>}/>
      </Routes>
        </div>
    </>
  );
}


export default App;
