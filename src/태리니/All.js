import React, { useState } from 'react'
import '../css/all.css';
import Timer from './Timer';

const All = () => {
    const [like, setLike] = useState(0);
    const [input, setInput] = useState("");
    const [names, setName] = useState([]);
    const [show, setShow] = useState(false);
    const [cname, setCname] = useState("나태린");
    const [age, setAge] = useState(25);
    const [title, setTitle] = useState("Timer Start");
    
  return (
    <>
    <div className='body'>
        <span className='like' onClick={()=>setLike(like+1)}>👍</span><span>{like}</span>
        <hr></hr>
        <br></br>
        <input
            type="text"
            placeholder='이름을 입력해주세요'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={()=>{
                        setName((prevState)=>{    //새로운 이름을 배열에 추가하겠다
                            return [input, ...prevState]
                        })
                        setInput('')
        }}>화긴</button>
            {names.map((name, idx)=>{
                return <li key={idx}>{name}</li>
            })}
            <hr></hr>
            <br></br>
            <h2>Timer</h2>
            {show && <Timer/>}
            <button onClick={()=>{
                    setShow(!show);
                    setTitle(title === "Timer Start" ? "Timer End" : "Timer Start");
                }}>{title}</button>
            <hr></hr>
            <br></br>
            <h3>{cname} ({age})</h3>
            <button
                onClick={()=>{
                    setCname(cname === "나태린" ? "이현지" : "나태린");
                    setAge(age === 25 ? 24 : 25);
                }}
            >Change👻</button>
    </div>
    </>
  )
}

export default All;