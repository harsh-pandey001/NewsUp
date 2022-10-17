import './App.css';
import Navb from './mycomponents/Navb';
import News from './mycomponents/News';


function App() {
  return (
    <>
    <Navb/>
    <News pageSize = {6}/>
    </>
  );
}

export default App;
