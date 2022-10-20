import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {BsCheck2Circle} from 'react-icons/bs'
import {CgDanger} from 'react-icons/cg'

const TodoItemTest = ({list, date, remove, check, color}) => {
  return (
    <div className={list.line ? "todo-row line" : 'todo-row'}  //list로 가져오기
         style={list.important ? {background: "orange"} : {}}  //list로 가져오기
    >
      {list.text}
      <div className='iconsContainer'>
        <span className='span'>{date}ㅤ</span>
        <RiDeleteBin5Line style={{marginRight: "7px"}} onClick={()=>remove(list.id)}/>
        <BsCheck2Circle style={{marginRight: "7px"}} onClick={()=>check(list.id)}/>
        <CgDanger onClick={()=>color(list.id)}/>
      </div>
    </div>
  )
}

export default TodoItemTest;