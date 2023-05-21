import React, { useState } from "react";
import "./App.css";
import Navb from "./mycomponents/Navb";
import News from "./mycomponents/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  let pageSize = 6;
  let apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setmode] = useState("light");
  const [name, setname] = useState("Dark mode");

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      console.log("dark mode on")
      setname("Light mode");
      document.body.style.backgroundColor = "#183148";
      // document.getElementsByClassName('card-body').style.backgroundColor = "white";
    } else {
      setmode("light");
      console.log("light mode on")
      setname("Dark mode");
      document.body.style.backgroundColor = "white";
      // document.getElementsByClassName('card-body').style.backgroundColor = "black";

    }
  };


  return (
    <>
      <Router>
        <Navb name={name} toggle={toggle} mode={mode} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={"us"} toggle={toggle} mode={mode}
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={"us"} toggle={toggle} mode={mode}
                category={"sports"}
              />
            }
          ></Route>
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={"us"} toggle={toggle} mode={mode}
                category={"business"}
              />
            }
          ></Route>
          <Route
            exact
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={"us"} toggle={toggle} mode={mode}
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={"us"} toggle={toggle} mode={mode}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={"us"} toggle={toggle} mode={mode}
                category={"health"}
              />
            }
          ></Route>
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={"us"} toggle={toggle} mode={mode}
                category={"science"}
              />
            }
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={"us"} toggle={toggle} mode={mode}
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
