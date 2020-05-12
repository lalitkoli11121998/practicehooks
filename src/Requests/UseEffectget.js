import React,{useState,useReducer,useEffect} from 'react';
import axios from 'axios'
const initialstate ={
    isloading: true,
    posts: {},
    error: false
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
           return {
               isloading: false,
               posts: action.payload,
               error: false
           }
        case 'FETCH_ERROR':
            return{
                isloading:false,
                posts: {},
                error: true
            }
        default:
             return state;
    }

}
function UseEffectget(props) {
    const[state,dispatch ]= useReducer(reducer,initialstate)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response)
              dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])
    return (
        <div>
            {/* {state.posts.title} */}
            {state.isloading ? 'loading' : state.posts.title}
            {state.error ? 'something went wrong' : null}
        </div>
    );
}

export default UseEffectget;