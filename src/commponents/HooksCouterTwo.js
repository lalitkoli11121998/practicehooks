    import React, { useState } from 'react';
    
    function HooksCouterTwo(props) {
        const initialcount = 0;
        const [count, setCount] = useState(initialcount);


       const  increamentfive = () => {
            for(let i = 0;i<5;i++){
                setCount(prevCount => prevCount +1)
            }
        }
        return (
            <div>
                count : {count}
                <button onClick = {() => setCount(initialcount)}>Reset</button>
                <button onClick = {() => setCount(prevCount => prevCount +1)}>Increament</button>
                <button onClick = {() => setCount(prevCount => prevCount -1)}>Dcreament</button>
                <button onClick = {increamentfive}>Increament 5</button>
            </div>
        );
    }
    
    export default HooksCouterTwo;