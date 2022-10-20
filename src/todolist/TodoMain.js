import React, { useState } from 'react'
import 'css/todo.css';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoMain = () => {
  const [todos, setTodo] = useState([]);
  let id = 1;
  if (todos.length > 0){ // 배열!! 필요!!
    id = todos[0].id + 1;
  }
  const addTodo = (text) => {
    let todo = {id: id, text: text, line: false, color: false};
    let newTodo = [todo, ...todos]    // 이게 text를 담는 것!!!!!!!
    setTodo(newTodo);
  }
  const remove = (id) => {
    setTodo(todos.filter(todo => todo.id !== id))
  }
  const check = (id) => {
    const update = todos.map((line)=>{
      if (line.id === id){
        line.line = !line.line
      }
      return line;
    })
    setTodo(update);
  }
  const color = (id) => {
    const update = todos.map((color)=>{
      if (color.id === id){
        color.color = !color.color
      }
      return color;
    })
    setTodo(update);
  }
  return (
    <>
      <div className='todo-main'>
        <h1 className='h1'>Todo List</h1>
          <TodoForm addTodo={addTodo}/>
        <hr className='seperator'></hr>
        {todos.map((list, idx)=>{
          return <TodoItem key={idx} list={list} remove={remove} check={check} color={color}/>
        })}
      </div>
    </>
  )
}

export default TodoMain;