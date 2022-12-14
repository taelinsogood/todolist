import React, { useState } from 'react'
import '../css/all.css';
import Timer from './Timer';

const All = () => {
    const [like, setLike] = useState(0);
    const [input, setInput] = useState("");
    const [names, setName] = useState([]);
    const [show, setShow] = useState(false);
    const [cname, setCname] = useState("๋ํ๋ฆฐ");
    const [age, setAge] = useState(25);
    const [title, setTitle] = useState("Timer Start");
    
  return (
    <>
    <div className='body'>
        <span className='like' onClick={()=>setLike(like+1)}>๐</span><span>{like}</span>
        <hr></hr>
        <br></br>
        <input
            type="text"
            placeholder='์ด๋ฆ์ ์๋ ฅํด์ฃผ์ธ์'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={()=>{
                        setName((prevState)=>{    //์๋ก์ด ์ด๋ฆ์ ๋ฐฐ์ด์ ์ถ๊ฐํ๊ฒ ๋ค
                            return [input, ...prevState]
                        })
                        setInput('')
        }}>ํ๊ธด</button>
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
                    setCname(cname === "๋ํ๋ฆฐ" ? "์ดํ์ง" : "๋ํ๋ฆฐ");
                    setAge(age === 25 ? 24 : 25);
                }}
            >Change๐ป</button>
    </div>
    </>
  )
}

export default All;