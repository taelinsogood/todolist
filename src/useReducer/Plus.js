import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type){
        case "down":
            return state - 3000;
        case "reset":
            return 0;
        case "up":
            return state + 3000;
        default :
            return state; 
    }
}

const Plus = () => {
    const [number, setNumber] = useState(1);
    const [result, dispatch] = useReducer(reducer, 0);
  return (
    <>
    <div>
        <input type="button" value="-" onClick={()=>dispatch({type: "down", payload: number})}/>
        <input type="button" value="0" onClick={()=>dispatch({type: "reset", payload: number})}/>
        <input type="button" value="+" onClick={()=>dispatch({type: "up", payload: number})}/>
        <input type="text" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
        ㅤ{result}
    </div>
    </>
  )
}

export default Plus;