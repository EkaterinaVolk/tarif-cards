import Tarif from './tarif';
import './App.scss';
import tarifs from './tarif-data.json';
import { useState } from 'react';

function App() {
  const [flag, setFlag] = useState(true);

  function editFlag() {
    setFlag(!flag)
  }

  return (
    <div className="App">
        {tarifs.map((tarif) => 
<Tarif price={tarif.price} speed={tarif.speed} class={tarif.class} flag={flag}></Tarif>)}
<button onClick={editFlag}>Boooom</button>
</div>
  );
}

export default App;
