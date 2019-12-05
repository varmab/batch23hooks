import React, {useState, useEffect} from 'react';

const Counter=(props)=>{
    var [count,setCount]=useState(0);
    var [disabled, setDisabled]=useState(true);

    var increment=()=>{
        setCount(count+1);
        setDisabled(false);
    }

    var decrement=()=>{
        setCount(count-1);
        if(count==1){
            setDisabled(true);
        }
    }

    useEffect(()=>{

    })

    useEffect(()=>{

    },[])

    useEffect(()=>{

    },[props])

    return(
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled={disabled}>Decrement</button>
        </div>
    )
}

export default Counter;