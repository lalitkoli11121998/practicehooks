import React,{useState,useEffect} from 'react';

function UseEffectcounter2(props) {
    const[count,setCount] = useState(0);
    const[name,setName] = useState('');
    //we requesting react to excuting  useEffect fucntion oafter every render of the fucntion
    //for conditionlly run the useEffect method we pass the array in argument and tell the react that 
    // if the array value is changing then useEffect method is run otherwise not run
    useEffect(()=> { 
        console.log("useEffect - updating document title")
      document.title = `you clicked ${count} times`
    },[count])
    return (
        <div>
            <input type = 'text' value = {name} onChange ={(e) => setName(e.target.value)}/>
            <button onClick = {()=> setCount(count +1)}>click {count} times</button>
        </div>
    );
}

export default UseEffectcounter2;