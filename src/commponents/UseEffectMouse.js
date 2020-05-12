import React ,{useEffect,useState}from 'react';

function UseEffectMouse(props) {

   const[x,setx] = useState(0);
   const[y,sety] = useState(0);
    
  const  logmousepostion = (e) =>{
        setx(e.clientX)
        sety(e.clientY)
   }
   //if our useeffect does not depend upon anything so to stop useeffect fucntion we given a empty array so that 
   // this function is called only once
   useEffect(() => {
       console.log("useeffect called")
      window.addEventListener('mousemove',logmousepostion)
   },[])
    return (
        <div>
        x : {x}
        y : {y}
        
    </div>
    );
}

export default UseEffectMouse;