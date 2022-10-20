import React from 'react'
import 'css/radio.css';
import Question from './Question';
import { dummy2 } from './Qdummy';

const Radio = () => {
  return (
    <>
    <div className='RootWrap'>
        {dummy2.map((item)=>(
            <Question key={item.idx} title={item.title} questionList={item.questionList}/>
        ))}
    </div>
    </>
  )
}

export default Radio;