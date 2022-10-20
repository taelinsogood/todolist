import React, { useEffect, useState } from 'react'
import 'css/login.css';
import Spinner from 'spinner/Spinner';

const User = {
    email: "test@example.com",
    pw: "test2323@@@"   
}

const LoginTest = () => {
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [pwError, setPwError] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(()=>{
        if (emailError && pwError){  //emailError && pwError가 참일 시,  
            setNotAllow(false);      // 비활성화 off
            return;         //----------> 종료 (이해 완)
        }
        setNotAllow(true);          // 비활성화 on
    }, [emailError, pwError]);  // set 아님!!
   
    const emailChange = (e) => {
        setEmail(e.target.value)
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if (regex.test(email)){   //email(input)
                setEmailError(true);
            } else {
                setEmailError(false);
            }
    }
    const pwChange = (e) => {
        setPw(e.target.value)
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
            if (regex.test(pw)){   //pw => input 너낌
                setPwError(true);
            } else {
                setPwError(false);
            }
    }
//========================================================
 
    //     let on = setTimeout(function click(){
    //         setLoading(false);
    //         clearTimeout(on);      
    //     }, 2000)
        
        // useEffect(()=>{
        //     let timer = setTimeout(()=>{ setLoading(false) }, 2000);
    
        //     return ()=>{ clearTimeout(timer)  }
        // }, []);

    function click (){
        if (email === User.email && pw === User.pw){
            alert("로그인 완뇨");
        } else {
            alert("회원 ㄴㄴ 아님");
        } 
    }
  
  return (
    <>
    {/* {loading ? <Spinner/> : null} */}
    <div className="page">
    <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요
    </div>

    <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div
            className="inputWrap"
        >
            <input
                className="input"
                placeholder='placeholder="test@gmail.com"'
                type="text"
                value={email}
                onChange={emailChange}
            />
        </div>
        <div className="errorMessageWrap">
                { !emailError && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요.</div>
                )} 
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
        </div>
        <div className="inputWrap">
            <input
                className="input"
                placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                type="password"
                value={pw}
                onChange={pwChange}
            />
        </div>
        <div className="errorMessageWrap">
                { !pwError && pw.length > 0 && (
                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                )}
        </div>
    </div>

    <div>
        <button 
            className="bottomButton"
            onClick={click}
            disabled={notAllow}
        >확인</button>
    </div>
</div>
</>
  )
}

export default LoginTest;