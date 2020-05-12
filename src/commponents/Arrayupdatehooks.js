    import React ,{useState}from 'react';
    
    function Arrayupdatehooks(props) {
           const[items, setitems] = useState([]);
          //const lgana mt bhool nhi to ye defined nhi mana jayega function component m
          const additem = () => {
                setitems([... items,{
                    id: items.length,
                    value: Math.floor(Math.random() +10) + 1
                }])
           }
         return (
            <div>
                <button onClick={additem}> add itmes</button>
                {
                   items.map(item => (
                   <li key ={item.id}>{item.value}</li>
                   ))
                }
            </div>
        );
    }
    
    export default Arrayupdatehooks;