import React ,{useState}from 'react';
import Button from './Button';
import useDocumenttitle from '../Hooks/useDocumenttitle'

function DocTitleOne(props) {
   const[count,setCount] = useState(0);

    useDocumenttitle(count)
    return (
        <div>
            <button onClick = {()=> setCount(count +1)}> count - {count}</button>
        </div>
    );
}

export default DocTitleOne;