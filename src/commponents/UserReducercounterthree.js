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
function UserReducercounterthree(props) {
    const[count,dispatch] = useReducer(reducer,initialstate)
    const[count2,dispatch2] = useReducer(reducer,initialstate)
   return (
        <div>
            <input type ='text' value = {count}></input>
            <button onClick = {()=> dispatch('increament')}>increament</button>
            <button onClick = {() => dispatch('decreament')}>decreament</button>
            <button onClick = {() => dispatch('reset')}>reset</button>
            <div>
            <input type ='text' value = {count2}></input>
            <button onClick = {()=> dispatch2('increament')}>increament</button>
            <button onClick = {() => dispatch2('decreament')}>decreament</button>
            <button onClick = {() => dispatch2('reset')}>reset</button>
        </div>
        </div>
    );
}

export default UserReducercounterthree;