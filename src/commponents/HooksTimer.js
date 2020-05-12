import React, {useState, useEffect,useRef} from 'react';

function HooksTimer(props) {
    const [timer, setTimer] = useState(0)
    const intervalref = useRef();
    useEffect(()=> {
         intervalref.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer +1)
        },1000)
        
        //this is work as componentwillunmount
        return () =>{
            clearInterval(intervalref.current)
        }
    }, [])
    return (
        <div>
            hooks timer - {timer}
            <button onClick ={() => clearInterval(intervalref.current)}>clear hooks timer</button>
        </div>
    );
}

export default HooksTimer;