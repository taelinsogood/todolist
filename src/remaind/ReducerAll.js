import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

// const reducer = (state, action) => {
//     if (action.type === "deposit"){
//         return state + action.payload;
//     } else if (action.type === "withdraw"){
//         return state - action.payload;
//     } else {
//         return state;
//     }
// }

const reducer2 = (state, action) => {
    switch (action.type){
        case "down":
            return state - action.payload;
        case "up":
            return state + action.payload;
        case "reset":
            return 0;
        default :
            return state;
    }
}

const ReducerAll = () => {
    // const [number, setNumber] = useState(0);  //payload에 number라는 상자에 넣겠다
    // const [money, dispatch] = useReducer(reducer, 0)

    const [count, setCount] = useState(1);
    const [playNum, dispatch2] = useReducer(reducer2, 0);

  return (
    <>
    {/* <div>
        <h1>태리니 Bank</h1>
        <p>잔고 : {money}원</p>
        <input
            type="number"
            step="1000"
            placeholder='금액을 넣어주세요'
            value={number}
            onChange={(e)=>setNumber(Number(e.target.value))}
        />
        <button onClick={()=>{dispatch({type: "deposit", payload: number})
                                        setNumber('')}}>예금</button>
        <button onClick={()=>{dispatch({type: "withdraw", payload: number})
                                        setNumber('')}}>출금</button>
    </div>
    <br></br>
    <br></br> */}
    <h1>태리니 숫자 노리~</h1>
    <div>
        <input type="button" value="-" onClick={()=>dispatch2({type: "down", payload: count})}/>
        <input type="button" value="0" onClick={()=>dispatch2({type: "reset", payload: count})}/>
        <input type="button" value="+" onClick={()=>dispatch2({type: "up", payload: count})}/>
        <input type="number" value={count} onChange={(e)=>setCount(parseInt(e.target.value))}/>  {/*parseInt를 꼭 엏어주자!! 새롭게 숫자를 넣을 때 문자로 인식함*/}
        ㅤ{playNum}
    </div>
    </>
  )
}

export default ReducerAll