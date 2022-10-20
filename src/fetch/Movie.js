import React, { useEffect, useState } from 'react'

const Movie = () => {
    const API = '8af2714779f37441d78cb8015d6a2517';
    const [movies, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovie = async() => {
        const json = await(
            await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API}&targetDt=20120101`)
        ).json();
        setMovie(json.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    }, [])
  return (
    <>
    <div>
        {loading ? <h1>Loading...</h1> :
        <>{movies.map((movie, idx)=>{
            return <>
             <p key={idx}>{movie.rank}. {movie.movieNm} ({movie.openDt})</p>
             </>
        })}
        </>}
    </div>
    </>
  )
}

export default Movie;