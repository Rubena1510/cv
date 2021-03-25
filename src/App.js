
import './App.css';
import Header from './components/Header';
import Partie1 from './components/Partie1'
import Partie2 from './components/Partie2'

function App() {
  return (
    <div className="container App">
      <div className='header'><Header /></div>
      <div className='int'>
        <Partie1 />
        <Partie2 />
      </div>
    </div>
  );
}

export default App;
