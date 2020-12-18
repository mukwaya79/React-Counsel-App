import React,{useEffect,useState} from 'react'
import axios from 'axios';

function Adviceform(props) {

  const [input,setInput] =useState([])
  const [btn,setBtn] =useState([])
  const [items,setItems]=useState([])

  const handler=(e) =>{ setInput(e.target.value) }

  
  useEffect(()=>{
    const Inputadvice= ()=> { 
      axios.get(`https://api.adviceslip.com/advice/search/${input}`)
    .then(res=>setItems(res.data.slips))
    .catch(error=>console.log(error))
    }
    Inputadvice()
    setInput("")
  
  },[btn])

   
  const handleclick =(e)=>{
   e.preventDefault() 
   setBtn(input)

  }

  return (
        <div>
          <div>
          <form >
                <div>
                  <input type="text" placeholder="Enter Anything.." value={input} onChange={handler} required />
                </div>
                <div>
                  <button onClick ={handleclick} >GET HELP</button>
                </div>
            </form>
          </div>
            <div>
             {(items===undefined) ? <h5 className="search">Search Term "{input} is Not yet Added in the Database</h5> :
               <ul>
               {items.map((item)=> 
                 <div key={item.id}><li >{item.advice}</li></div>              
                ) }
               </ul>
            }
            </div>
        </div>
    )
}

export default Adviceform
