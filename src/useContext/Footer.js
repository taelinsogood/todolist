import React, { useContext } from 'react'
import { Dark } from './Dark';

const Footer = () => {
  const {dark, setDark} = useContext(Dark);
  return (
    <div className='footer' style={{
      backgroundColor: dark ? "black" : "lightgray"
    }}>
      <button className='button' onClick={()=>setDark(!dark)}>Dark Mode</button>
    </div>
  )
}

export default Footer;