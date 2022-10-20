import React from 'react'
import { useState, useEffect } from 'react';
import '../css/bpardboard.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BoardCheck from './BoardCheck';


const BoardMain = () => {
    const [movieContent, setMovieContent] = useState({
        title: '',
        content: ''
      })
    
      const [viewContent, setViewContent] = useState([]);
    
      const getValue = e => {
        const { name, value } = e.target;
        setMovieContent({
          ...movieContent,
          [name]: value
        })
      };
    
    
      return (
        <div className="App">
          <h1>Movie Review</h1>
        
          <BoardCheck viewContent={viewContent}/>

          <div className='form-wrapper'>
            <input className="title-input"
              type='text'
              placeholder='제목'
              onChange={getValue}
              name='title'
            />
            <CKEditor
              editor={ClassicEditor}
              data="Hello from CKEditor 5!"
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setMovieContent({
                  ...movieContent,
                  content: data
                })
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
          <button
            className="submit-button"
            onClick={()=>{setViewContent(viewContent.concat({...movieContent}))}}
            >입력</button>
        </div>
      );
    }
export default BoardMain