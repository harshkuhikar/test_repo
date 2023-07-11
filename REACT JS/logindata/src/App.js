import './App.css';
import Create from "./component/Create"
import Editi from "./component/Editi"
import Read from './component/Read';

function App() {
  return (
    <div className="App">
      <Create/>
      <Editi/>
      <Read/>
    </div>
  );
}

export default App;
