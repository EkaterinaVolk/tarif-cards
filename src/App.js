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
    <div className="App" onClick={editFlag}>
      {/* не понимаю, как "повесть" onClick на конкретный див */}
        {tarifs.map((tarif) => 
<Tarif  {...tarif} flag={flag}></Tarif>)}

</div>
  );
}

export default App;
