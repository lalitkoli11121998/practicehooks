import React,{useState,useEffect,useReducer} from 'react';
import './App.css';
import ClassCounter from './commponents/ClassCounter';
import HookCounter from './commponents/HookCounter';
import HooksCouterTwo from './commponents/HooksCouterTwo';
import ObjectUpdate from './commponents/ObjectUpdate';
import Arrayupdatehooks from './commponents/Arrayupdatehooks';
import UseEffectcounter from './commponents/UseEffectcounter';
import UseEffectcounter2 from './commponents/UseEffectcounter2';
import ClassMouse from './commponents/ClassMouse';
import UseEffectMouse from './commponents/UseEffectMouse';
import TimerClass from './commponents/TimerClass';
import TimerHooks from './commponents/TimerHooks';
import Fetchdata from './commponents/Fetchdata';
import UseReducesCounter from './commponents/UseReducesCounter';
import UseReducesCountertwo from './commponents/UseReducesCountertwo';
import UserReducercounterthree from './commponents/UserReducercounterthree';
import CompoentA from './commponents/CompoentA';
import ComponentB from './commponents/ComponentB';
import ComponentC from './commponents/ComponentC';
import UseEffectget from './Requests/UseEffectget';
import ParentComponent from './commponents/ParentComponent';
import CounterMemo from './commponents/CounterMemo';
import UseRefInput from './commponents/UseRefinput';
import ClassTimeRef from './commponents/ClassTimeRef';
import HooksTimer from './commponents/HooksTimer';

export const CountContext = React.createContext();
const initialstate = 0
const reducer = (state, action) =>{
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
function App () {
  const[count,dispatch] = useReducer(reducer,initialstate)
     return (
    //   <CountContext.Provider 
    //    value  ={{coutstate: count, countdispatch: dispatch}}
    //    >
      <div className="App">
        {/* <UseRefInput></UseRefInput> */}
        <HooksTimer></HooksTimer>
        <ClassTimeRef></ClassTimeRef>
        {/* <CounterMemo></CounterMemo> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <UseEffectget></UseEffectget> */}
        {/* count - {count}
        <CompoentA></CompoentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC> */}
        {/* <UserReducercounterthree></UserReducercounterthree> */}
        {/* <UseReducesCountertwo></UseReducesCountertwo> */}
        {/* <UseReducesCounter></UseReducesCounter> */}
        {/* <Fetchdata></Fetchdata> */}
        {/* <TimerHooks></TimerHooks>
        <TimerClass></TimerClass> */}
        {/* <ClassMouse></ClassMouse> */}
        {/* <UseEffectMouse></UseEffectMouse> */}
        {/* <Arrayupdatehooks></Arrayupdatehooks> */}
        {/* <ObjectUpdate></ObjectUpdate> */}
        {/* <HooksCouterTwo></HooksCouterTwo> */}
        {/* <HookCounter></HookCounter> */}
          {/* <ClassCounter></ClassCounter> */}
          {/* <UseEffectcounter></UseEffectcounter> */}
          {/* <UseEffectcounter2></UseEffectcounter2> */}
          </div>
      // </CountContext.Provider>
    );
}

export default App;

