import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [sec, setSec] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{  //시작
            setSec((sec)=> sec+1)
        }, 1000)
        return ()=>{            //끝
            clearInterval(timer)
        }
    }, [])
  return (
    <div>
        타이머 시작 ⏱️ {sec}초
    </div>
  )
}

export default Timer;