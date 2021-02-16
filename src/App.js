import logo from './logo.svg';
import './App.css';
import CounterActions from './components/CounterActions';
import CounterResults from './components/CounetResults'
function App() {
  return (
    <div className="App">
     Counter using redux
     <CounterActions></CounterActions>
     <CounterResults></CounterResults>
    </div>
  );
}

export default App;
