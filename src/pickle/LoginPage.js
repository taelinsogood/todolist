import React from 'react'
import 'css/pickle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'spinner/Spinner';

const User = {    //선언문 const!!!!
    email: "smhrd@naver.com",
    pw: "smhrd12@@"
}

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate(null);
    const [loading, setLoading] = useState(null);

    const okay = () => {
        if (email === User.email && pw === User.pw){
            alert("ㅎㅇ")
            setLoading(true); 
            navigate('/');
        } else {
            alert("가입하세뇨")
        }
    }
    setTimeout(function() {
        setLoading(false);
      }, 3000);
    return (
    <>
    {loading && <Spinner/>}
    <div className='picklebox'>
        <div className='pickletitle'>로그인</div>
        <div>
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
        </div>
        <div className='plcklebutton' onClick={okay}>로그인</div>
        <div className='plcklebutton2'>회원가입</div>
    </div>
    </>
    )
}

export default LoginPage;