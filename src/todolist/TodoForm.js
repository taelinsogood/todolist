import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setInput('');
    addTodo(input);
  }
  return (
    <>
    <form className='todo-form' onSubmit={submit}>
      <input
        className='todo-input'
        type="text"
        placeholder='Add Todo'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <button className='todo-button' type='submit'>Add Todo</button>
    </form>
    </>
  )
}

export default TodoForm;