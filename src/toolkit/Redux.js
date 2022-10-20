import React from 'react'
import ReduxM from './ReduxM'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const weight = 100;
const reducer = (state = weight, action) => {
    if (action.type === "up"){
        state ++;
        return state
    } else {
        return state
    }
}
const store = createStore(reducer)  //toolkit 쓰라고 유도일 뿐

const Redux = () => {
  return (
    <>
    <Provider store={store}>
        <ReduxM/>
    </Provider>
    </>
  )
}

export default Redux