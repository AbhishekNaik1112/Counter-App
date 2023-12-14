import './App.css';
import { useState } from 'react';

function App({display}) {
  const[num, setNum] = useState(0);
  
  const incNum = () =>{
    setNum ( num +1)
  };

  const decNum =() =>{
    if (num > 0){
    setNum(num-1)
  }else{
    setNum(0)
  }
  };
  const reset=() =>{
    setNum(0)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h1>Counter-App</h1>
          <h2>{num}</h2>

          <button onClick={incNum} className='inc'>
            +
          </button>
          <button onClick={decNum} className='dec'>
            -
          </button>
          <button onClick={reset} className='reset'>
            Reset
          </button>
     

        </div>
      </header>
    </div>
  );
}

export default App;
