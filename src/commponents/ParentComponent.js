import React,{useState,useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent(props) {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const increamentAge = useCallback(()=>{
        setAge(age +1)
    }, [age])

    const increamentSalary = useCallback(()=>{
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title></Title>
            <Count text = 'Age' count ={age}></Count>
            <Button handleClick = {increamentAge}>increament Age</Button>
            <Count tet = 'salary' count ={salary}></Count>
            <Button handleClick = {increamentSalary}>increament salary</Button>

        </div>
    );
}

export default ParentComponent;