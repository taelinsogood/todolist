import React, { useContext } from 'react'
import { Dark } from './Dark';
import { User } from './User';

const Header = () => {
  const {dark} = useContext(Dark);
  const user = useContext(User);
  return (
    <div className='header' style={{
      backgroundColor: dark ? "black" : "lightgray",
      color: dark ? "white" : "black"        
    }}>
        {user}님 환영
    </div>
  )
}

export default Header;