import React, { useEffect, useState } from 'react'
import MyMovieBox from './MyMovieBox';
import 'css/movie.css';
import { dummy } from './MyMovieDummy';

const MyMovie = () => {
    const API = "8af2714779f37441d78cb8015d6a2517";
    const [movies, setMovie] = useState([]);

    const getMovie = async() => {
        const json = await(
            await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API}&targetDt=20120101`)
        ).json();
        setMovie(json.boxOfficeResult.dailyBoxOfficeList);
    }

    useEffect(()=>{
        getMovie();
    }, [])
  return (
    <>
    <div className='app-container'>
        {movies.map((item, idx)=>{
            return <MyMovieBox key={idx} title={item.movieNm} poster={item.poster} vote={item.salesShare}/>
        })}
    </div>
    </>
  )
}

export default MyMovie;