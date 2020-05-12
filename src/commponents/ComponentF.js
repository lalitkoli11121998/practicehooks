import React, { useCallback, useContext } from 'react';
import {CountContext} from '../App'
function ComponentF(props) {
    const countContext = useContext(CountContext)
    return (
        <div>
            component F {countContext.countstate}
             <button onClick = {()=>  countContext.countdispatch('increament')}>increament</button>
            <button onClick = {() => countContext.countdispatch('decreament')}>decreament</button>
            <button onClick = {() => countContext.countdispatch('reset')}>reset</button>
        </div>
    );
}

export default ComponentF;