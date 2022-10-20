import React, { useEffect, useState } from 'react'
import 'css/login.css';
import Spinner from 'spinner/Spinner';

const User = {
    email: "smhrd@naver.com",
    pw: "smhrd12@@"
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [pwError, setPwError] = useState(false);
    const [lock, setLock] = useState(true);
    const [loading, setLoading] = useState(null);

    const emailChange = (e) => {
        setEmail(e.target.value)
        const regex =      // 여기에 쓰는 이유는 input을 업데이트하는 곳이라서!!
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)){  //위에 선언 한 양식을 input인 email에 적용하겠다!!
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }
    const pwChange = (e) => {
        setPw(e.target.value)
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
            if (regex.test(pw)){
                setPwError(true)
            } else {
                setPwError(false)
            }
    }
    const clear = () => {
        if (email === User.email && pw === User.pw){
            setLoading(true);   //set으로 false를 true로 바꿀거라서
        } else {
            alert("등록되지 않은 회원입니다.");
        }
    }
    useEffect(()=>{
        if (emailError && pwError){  //emailError & pwError가 true일 시. 즉, 참일 시. 
            setLock(false)   // lock을 풀겠다
        } else {
            setLock(true)
        }
    }, [emailError, pwError])

    setTimeout(function() {
        setLoading(false);
      }, 3000);

    return (
        <>
        {loading && <Spinner/>}
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
                <button className="bottomButton" onClick={clear} disabled={lock}>
                    확인
                </button>
            </div>
        </div>
        </>
    );
}

export default Login;