import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    if (action.type === "deposit"){
        return state + action.payload;
    } else if (action.type === "withdraw"){
        return state - action.payload
    } else {
        return state;
    }
}

const Bank = () => {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
    <div>
        <h1>태리니 Bank</h1>
        <p>잔고 : {money}원</p>
        <input
            type="number"
            value={number}
            step="1000"
            placeholder='금액을 넣어주세요'
            onChange={(e)=>setNumber(Number(e.target.value))}
        />
        <button
            onClick={()=>{dispatch({type: "deposit", payload: number})
                                    setNumber('')}}
        >예금</button>
        <button
            onClick={()=>{dispatch({type: "withdraw", payload: number})
                                    setNumber('')}}
        >출금</button>
    </div>
    </>
  )
}

export default Bank;