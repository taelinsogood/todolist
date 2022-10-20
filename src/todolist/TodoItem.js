import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {BsCheck2Circle} from 'react-icons/bs'
import {CgDanger} from 'react-icons/cg'

const TodoItem = ({list, remove, check, color}) => {
  return (
    <>
    <div className={list.line ? "todo-row line" : 'todo-row'}
            style={list.color ? {background: "orange"} : {}}>
      {list.text}            {/* todo-row 안에서 line 적용하자!! */}
      <div className='iconsContainer'>
        <RiDeleteBin5Line style={{marginRight: "8px"}} onClick={()=>remove(list.id)}/>    
        <BsCheck2Circle style={{marginRight: "8px"}} onClick={()=>check(list.id)}/>
        <CgDanger onClick={()=>color(list.id)}/>                   
      </div>
    </div>
    </>
  )
}

export default TodoItem;