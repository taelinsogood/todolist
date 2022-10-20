import React from 'react'
import 'css/pickle.css';
import { useState } from 'react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [phon, setPhon] = useState(''); 

    const click = () => {
        alert("회원가입이 완료되었습니다")
    }
  return (
    <>
    <div className='picklebox'>
        {/* <h1>회원가입</h1> */}
        <br></br>
        <div>이메일</div>
        <input
            className='pickleinput'
            type="text"
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <div>비밀번호</div>
        <input
            className='pickleinput'
            type="password"
            placeholder='비밀번호를 입력해주세요'
            value={pw}
            onChange={(e)=>setPw(e.target.value)}
        />
        <div>이름</div>
        <input
            className='pickleinput'
            type="text"
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <div>전화버노</div>
        <input
            className='pickleinput'
            type="text"
            placeholder='전화버노를 입력해주세요'
            value={phon}
            onChange={(e)=>setPhon(Number(e.target.value))}
        />
        <div className='plcklebutton' onClick={click}>회원가입</div>
    </div>
    </>
  )
}

export default Signin