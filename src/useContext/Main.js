import React, { useState } from 'react'
import '../css/context.css';
import Page from './Page';
import { Dark } from './Dark';
import { User } from './User';

const Main = () => {
  const [dark, setDark] = useState(false);
  return (
    <>
    <div>
      <User.Provider value="이정민">
      <Dark.Provider value={{dark, setDark}}>
      <Page/>
      </Dark.Provider>
      </User.Provider>
    </div>
    </>
  )
}

export default Main;