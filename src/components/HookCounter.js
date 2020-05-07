import React,{useState} from 'react';

function HookCounter() {

    const [count,setCount]=useState(0)    //0 is initial count value
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
        </div>
    )
}

export default HookCounter;
