import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm.jsx";
import About from "./components/About.jsx";
import Alerts from "./components/Alerts.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <Router>
    <div>
      <Navbar title="UtilsText" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </div>
      </Router>
  );
};

export default App;
