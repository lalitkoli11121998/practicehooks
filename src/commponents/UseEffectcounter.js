import React,{useState,useEffect} from 'react';

function UseEffectcounter(props) {

    const[count,setCount] = useState(0);
    //we requesting react to excuting  useEffect fucntion oafter every render of the fucntion
    useEffect(()=> { 
      document.title = `you clicked ${count} times`
    })
    return (
        <div>
            <button onClick = {()=> setCount(count +1)}>click {count} times</button>
        </div>
    );
}

export default UseEffectcounter;