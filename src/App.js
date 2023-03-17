import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    });
    setTimeout(
      () => {
        setAlert(null);
      },

      1000
    );
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#080b4c";
      showAlert("Dark mode hasbeen enebles", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode hasbeen enebles", "success");
    }
  };

  return (
    <>
     {/* <Router*/}
        <Navbar
          title="textutils"
          mode={mode}
          toggleMode={toggleMode}
          AboutText="About us"cd
        />
        <Alert alert={alert} />

        <div className="container my-3">
          {/*<Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact
  path="/">*/}
              <Textform
                showAlert={showAlert}
                mode={mode}
                heading="Enter the text to analyze below"
              />
           {/* </Route>
          </Switch>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
