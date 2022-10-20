import React, { useContext } from 'react'
import { Dark } from './Dark';
import { User } from './User';

const Content = () => {
  const {dark} = useContext(Dark);
  const user = useContext(User);
  return (
    <div className='content' style={{
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    }}>
      {user} 안ㄴ영~
    </div>
  )
}

export default Content;