import React, { useEffect, useState } from 'react'
import 'css/weather.css';
import { type } from '@testing-library/user-event/dist/type';

const WeatherFetch = () => {
    const API = '6b1dfbef67d09efe3d11b379369ee646';
    const [days, setDays] = useState([]);

    const getWeather = async() => {
        const json = await(
            await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API}`)
        ).json();
        setDays(json.list)
    }
    useEffect(()=>{
        getWeather();
    }, [])
  return (
    <>
    <div className='container'>
        <div className='city'>
            <p className='cityName'>Seoul</p>
        </div>
        <div className='weather'>
            <div className='day'>
                {days.map((day, idx)=>{
                    return <>
                        <p key={idx}>{day.dt}</p>
                    </>
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default WeatherFetch;