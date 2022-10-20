import React, { useEffect, useState } from 'react'
import 'css/login.css';

const User = {
    email: 'test@example.com',
    pw: 'test2323@@@'
}

const MyLogin = () => {  //true가 바뀌는 값.
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [pwError, setPwError] = useState(false);
    const [unlook, setUnlook] = useState(true);
    

    const emailChange = (e) => {
        setEmail(e.target.value)
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)){
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };
    const pwChange = (e) => {
        setPw(e.target.value)
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(pw)){
            setPwError(true);
        } else {
            setPwError(false);
        }
    }

    function click (){
        if (email === User.email && pw === User.pw){
            alert('로그인에 성공했습니다.')
        } else {
            alert("등록되지 않은 회원입니다.");
        }
    }

    useEffect(() => {
        if (emailError && pwError){
            setUnlook(false);   //비활성화 해제
        } else {
            setUnlook(true);    //비활성화
        }
    }, [emailError, pwError])
    
  return (
    <>
    <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br />
                입력해주세요
            </div>
            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input
                        className="input"
                        type="text"
                        placeholder="test@gmail.com"
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
                        type="password"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
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
                <button className="bottomButton" onClick={click} disabled={unlook}>
                    확인
                </button>
            </div>
        </div>
    </>
  )
}

export default MyLogin;