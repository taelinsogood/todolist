import React, { useState } from 'react'
import 'css/weather.css';
import axios from 'axios';

const Weather = () => {
    const API = '6b1dfbef67d09efe3d11b379369ee646';
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}`;
    
    const searchWeather = async (e) => {
      if(e.key === 'Enter') {
        try {
          const data = await axios({
            method: 'get',
            url: url,
          })
          setResult(data);
          console.log(data);
        } 
        catch(err) {
          alert(err);
        }
      }
    }
  
    return (
      <div className="app">
        <div className="appContentWrap">
          <input
            placeholder="도시를 입력하세요"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            onKeyDown={searchWeather}
          />
          {Object.keys(result).length !== 0 && (
            <div className="result">
              <div className="city">{result.data.name}</div>
              <div className="temperature">
                {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
              </div>
              <div className="sky">{result.data.weather[0].main}</div>
            </div>
          )}
        </div>
      </div>
    );
  }

export default Weather;