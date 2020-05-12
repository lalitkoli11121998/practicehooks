import React, { useEffect,useRef } from 'react';

function UseRefInput(props) {

     const inputref = useRef(null)
    useEffect(() => {
      //focus the input element
      inputref.current.focus()
    }, [])
    return (
        <div>
            <input type='text' ref = {inputref}></input>
        </div>
    );
}

export default UseRefInput