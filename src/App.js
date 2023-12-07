import './App.css';
import StateTutorial from './StateTutorial';
import Reducer from './List'
// import ResponseComponent from './responseComponent';
import CardTutorial from './CardTutorial';
import ContextTutorial from './ContextTutorial';
function App() {
  return (
    <div className="App">
     <Reducer />
    <StateTutorial /><br></br><br></br>
   <CardTutorial /><br></br>
   <ContextTutorial/>
    </div>
  );
}

export default App;
