import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxM = () => {
    const a = useSelector(state => state);
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>{dispatch({type: "up"})}}>up</button>
        {a}
    </div>
  )
}

export default ReduxM