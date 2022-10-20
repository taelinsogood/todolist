import React, { useState } from 'react'

const TodoFormTest = ({addTodo}) => {
  const [input, setInput] = useState('');

  const submit = (e) => {  // => {text}
    e.preventDefault();  //onClick도 있어야 하나?
    setInput('');
    addTodo(input);
  }
  return (
    <form className='todo-form' onSubmit={submit}>
      <input
        className='todo-input'
        placeholder='Add Todo'
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <button className='todo-button' type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoFormTest;