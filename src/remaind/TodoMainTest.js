import React, { useState } from 'react'
import 'css/todo.css';
import TodoFormTest from './TodoFormTest';
import TodoItemTest from './TodoItemTest';

const TodoMainTest = () => {
  const [todos, setTodo] = useState([]);  //map은 여기서 관리!!!
  const date = new Date().toLocaleDateString("ko-kr");

  const addTodo = (text) => {  //선언
      let id = 1;
      if (todos.length > 0){   //배열에서 차례대로 번호를 부여한다
          id = todos[0].id + 1;
      } 
      let todo = {id: id, text: text, line: false, important: false}
      let newTodo = [todo, ...todos] //input이 뭔가 생각해보자 (일단, [배열]아님) 
      setTodo(newTodo);
      console.log(newTodo);
  }
  const remove = (id) => {  
    setTodo(todos.filter(todo => todo.id !== id));
  }
  const check = (id) => {
    let update = todos.map((checkline)=>{
      if (checkline.id === id){
        checkline.line = !checkline.line
      }
      return checkline;
    })
    setTodo(update);
  }
  const color = (id) => {
    let update = todos.map((color)=>{   // map이라서 return 있움
      if (color.id === id){
        color.important = !color.important
      }
      return color;    
    })
    setTodo(update);
  }
  return (
    <>
    <div className='todo-main'>
      <h1 className='h1'>Todo List</h1>
      <TodoFormTest addTodo={addTodo}/>
      <hr className='seperator'></hr>
      {todos.map((list, idx)=>{
        return <TodoItemTest key={idx} list={list} date={date} remove={remove} check={check} color={color}/>
          // 웬만하면 return 옆에 바로 컴포넌트를 넣자
     })}  
    </div>
    </>
  )
}

export default TodoMainTest;