import Tarif from './tarif';
import './App.css';

function App() {
  return (
    <div className="App">
<Tarif price={300} speed={10}></Tarif>
<Tarif price={450} speed={50}></Tarif>
<Tarif price={550} speed={100}></Tarif>
<Tarif price={1000} speed={200}></Tarif>
    </div>
  );
}

export default App;
