import Tarif from './tarif';
import './App.scss';
import tarifs from './tarif-data.json';

function App() {
  return (
    <div className="App">
        {tarifs.map((tarif) => 
<Tarif price={tarif.price} speed={tarif.speed} class={tarif.class}></Tarif>)}
</div>
  );
}

export default App;
