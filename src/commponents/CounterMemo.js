import React, { useState ,useMemo} from 'react';

function CounterMemo(props) {
    const [counterone, setcounterone] = useState(0)
    const [countertwo, setcountertwo] = useState(0)

    const increamentone = () => {
        setcounterone(counterone + 1)
    }

    const increamenttwo = () => {
        setcountertwo(countertwo + 1)
    }

     const isEven =  useMemo(isEven = () =>{
        let i = 0
        while(i < 200000000000)i++
        return counterone%2 === 0
    },[counterone])

    //ab counter two bhi delay ho rha kyoki whenever we click on the counter two button ui
    // render and span iseven function is call again so its take time at this stage
    // usememo is works so usememeo say to react that not othre element depends upon iseven 
    // fucntion i.e only re computete only when we click increament one
    return (
        <div>
            <div>
            <button onClick={increamentone}>Count One - {counterone}</button>
            <span >{isEven ? 'Even' : 'Odd'}</span>
            </div>
            
            <div>
            <button onClick={increamenttwo}>Count two - {countertwo}</button>
            </div>
        </div>
    );
}

export default CounterMemo;