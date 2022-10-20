import React, { useState } from 'react'
import { ReactComponent as CheckedIcon } from 'img/icon_checked.svg';
import { ReactComponent as UncheckedIcon } from 'img/icon_unchecked2.svg';


const Question = ({title, questionList}) => {
    const [checked, setChecked] = useState(0);

    const onChange = (e) => {
        setChecked(Number(e.target.value)); //idx는 숫자다!!!
    }
  return (
    <>
    <div className='QuestionWrap'>
        <div className='questionTitle'>{title}</div>
        <div>
            {questionList.map((question, index)=>(
                <div className='RadioWrap' key={index}>
                    <input 
                        type="radio"
                        value={index}
                        checked={checked === index}
                        onChange={onChange}
                        //className="radioinput"
                    />
                    {checked === index ? (<CheckedIcon/>) : (<UncheckedIcon/>)}
                    <div className='questionText'>{question}</div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Question;
