import React, { useState, useEffect, useReducer } from 'react'

const initialstate = {
    firstcounter: 0,
    secondcounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increament':
            return { ... state,firstcounter: state.firstcounter + action.value }
        case 'decreament':
            return { ... state,firstcounter: state.firstcounter - action.value }
        case 'increament2':
            return { ... state, secondcounter: state.secondcounter + action.value }
        case 'decreament2':
            return { ... state ,secondcounter: state.secondcounter - action.value }
        case 'reset':
            return initialstate
        default:
            return state
    }

}
function UseReducesCountertwo(props) {
    //count use as state and dispathch change the state based on the action
    //dispatch means simply structure the action object
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <div>firstcount - {count.firstcounter}</div>
            <div>secondcount - {count.secondcounter}</div>
            <button onClick={() => dispatch({ type: 'increament', value: 1 })}>increament</button>
            <button onClick={() => dispatch({ type: 'decreament', value: 1 })}>decreament</button>
            <button onClick={() => dispatch({ type: 'increament', value: 5 })}>increament 5</button>
            <button onClick={() => dispatch({ type: 'decreament', value: 5 })}>decreament 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
            <div>
            <button onClick={() => dispatch({ type: 'increament2', value: 1 })}>increament 2</button>
            <button onClick={() => dispatch({ type: 'decreament2', value: 1 })}>decreament 2</button>
            </div>
        </div>
    );
}

export default UseReducesCountertwo;