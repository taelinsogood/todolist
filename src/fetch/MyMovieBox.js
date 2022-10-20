import React from 'react'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";


const MyMovieBox = ({title, poster, vote}) => {
  return (
    <>
    <div>
        <div className='movie-container'>
            <img src={IMG_BASE_URL + poster} alt="영화 포스터"/> {/*이미지를 보여줄 수 없을 때 해당 이미지를 대체할 텍스트를 명시*/}
            <div className='movie-info'>
                <h4>{title}</h4>
                <span>{vote}</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyMovieBox;