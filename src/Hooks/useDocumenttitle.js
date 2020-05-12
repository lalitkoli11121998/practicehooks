import React ,{useEffect}from 'react';

//custom hooks start with workd use
function useDocumenttitle(count) {

    useEffect(()=>{
        document.title = `count ${count}`
    },[count])
}

export default useDocumenttitle;