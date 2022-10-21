import React, { Component } from "react";
import "./App.css";
import Navb from "./mycomponents/Navb";
import News from "./mycomponents/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <>
        <Router>
          <Navb />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/General"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
