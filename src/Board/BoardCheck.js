import React from 'react'

const BoardCheck = ({viewContent}) => {
  return (
    <>
      <div className='movie-container'>
            {viewContent.map((element, idx) =>
              <div key={idx} style={{ border: '1px solid #333' }}>
                <h2>{element.title}</h2>
                <div>
                  {element.content}
                </div>
              </div>
            )}
      </div>
    </>
  )
}

export default BoardCheck