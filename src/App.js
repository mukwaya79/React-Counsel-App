import {useState,useEffect} from 'react'
import Adviceform from './components/Adviceform';
import './App.css';
import axios from 'axios';

function App() {
  const [advise,setAdvise] = useState([])
  

  useEffect(()=>{
    const getadvice= ()=> { 
      axios.get("https://api.adviceslip.com/advice")
     .then(res=>setAdvise(res.data.slip.advice))
     .catch(error=>console.log(error))
    }
   getadvice()
  },[])
  
  return (
    <div className="App">
      <header className="App">
          <hr/>
         <h2>COUNSEL APP</h2>
         <hr/> 
      </header>
    <section>
      <Adviceform />
  
    </section>
    <section>
      <h4>RANDOM ADVICE : {advise} </h4>
    </section>
    </div>
  );
}

export default App;
