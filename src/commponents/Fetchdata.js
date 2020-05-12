import React, { useState, useEffect } from 'react';
import axois from 'axios';
function Fetchdata(props) {
    const [posts, setPost] = useState([]);
    const [count, setCount] = useState(1);
    const [check, setCheck] = useState(false)

    useEffect(() => {
        axois.get(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then(response =>{
             setPost(response.data)
        }).catch(error=>{
            console.log(error)
        })
        //now it is depend upon count so when ever count value is change this mathod is running
    },[check])
    const changecount = (e) =>{
         setCount(e.target.value)
     }

     const setcheckit =() =>{
           setCheck(!check)
     }
    return (
        <div>
            <input type = 'text' value = {count} onChange = {changecount}></input>
            <button onClick ={setcheckit}>click</button>
            
                 <li key ={posts.id}>{posts.title}</li>
            
        </div>
    );
}

export default Fetchdata;