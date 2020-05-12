import React,{useContext}from 'react';
import {CountContext} from '../App'
function CompoentA(props) {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component A  {countContext.countstate}
            <button onClick = {()=>  countContext.countdispatch('increament')}>increament</button>
            <button onClick = {() => countContext.countdispatch('decreament')}>decreament</button>
            <button onClick = {() => countContext.countdispatch('reset')}>reset</button>
        </div>
    );
}

export default CompoentA;