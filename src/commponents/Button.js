import React from 'react';

function Button({handleClick,children}) {
    console.log("button component rendering")
    return (
       <button onClick = {handleClick}>
           {children}
       </button>
    );
}
//every component is different before rerender and
// after rerender so memo check that pahle vala component dubara to load nhi ho rha
export default React.memo(Button);