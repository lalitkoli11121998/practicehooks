import React, {useState} from 'react';

function ObjectUpdate(props) {
    const[name, setName] = useState({firsname: '' , lastname: ''});

    return (
        <div>
            <form>
                <input type='text' 
                       value = {name.firsname} 
                    //   this says copy all data from name object and overwrite for only  firsname and ... this is spread operator
                       onChange = {(e) => setName({... name, firsname: e.target.value})}> 
                </input>

                <input type='text'
                       value = {name.lastname} 
                       onChange = {(e) => setName({... name, lastname: e.target.value})}>
                </input>
                <h1>firstname : {name.firsname}</h1>
                <h1>lastname : {name.lastname}</h1>
            </form>
        </div>
    );
}

export default ObjectUpdate;