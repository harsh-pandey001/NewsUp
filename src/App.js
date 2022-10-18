import './App.css';
import Navb from './mycomponents/Navb';
import News from './mycomponents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
  <Router>
    <Navb/>
    <Routes>
          <Route exact path="/" element = {<News key = "general"pageSize = {6} country = {"in"} category = {"general"}/>}></Route>
          <Route exact path="/Sports"element = {<News key = "sports"pageSize = {6} country = {"in"} category = {"sports"}/>}></Route>
          <Route exact path="/Business"element = {<News key = "business"pageSize = {6} country = {"in"} category = {"business"}/>}></Route>
          <Route exact path="/General"element = {<News key = "general" pageSize = {6} country = {"in"} category = {"general"}/>}></Route>
          <Route exact path="/Entertainment"element = {<News key = "entertainment"pageSize = {6} country = {"in"} category = {"entertainment"}/>} ></Route>
          <Route exact path="/Health" element = {<News key = "health"pageSize = {6} country = {"in"} category = {"health"}/>}></Route>
          <Route exact path="/Science" element = {<News key = "science"pageSize = {6} country = {"in"} category = {"science"}/>}></Route>
          <Route exact path="/Technology"  element = {<News key = "technology"pageSize = {6} country = {"in"} category = {"technology"}/>}></Route>
    </Routes>
</Router>
    </>
  );
}

export default App;
