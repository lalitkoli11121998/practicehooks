import React,{useState,useEffect,useReducer}from 'react'

const initialstate = 0
const reducer = (state,action) => { 
    switch(action){
        case 'increament':
            return state +1
        case 'decreament':
            return state -1
        case 'reset':
            return initialstate
        default:
            return state
    }
    
}
function UseReducesCounter(props) {
    //count use as state and dispathch change the state based on the action
    const[count,dispatch] = useReducer(reducer,initialstate)
   return (
        <div>
            <input type ='text' value = {count}></input>
            <button onClick = {()=> dispatch('increament')}>increament</button>
            <button onClick = {() => dispatch('decreament')}>decreament</button>
            <button onClick = {() => dispatch('reset')}>reset</button>
        </div>
    );
}

export default UseReducesCounter;