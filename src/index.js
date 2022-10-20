import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoMain from 'todolist/TodoMain';
import Main from 'useContext/Main';
import Bank from 'useReducer/Bank';
import Plus from 'useReducer/Plus';
import All from '태리니/All';
import Movie from 'fetch/Movie';
import Weather from 'weather/Weather';
import WeatherFetch from 'weather/WeatherFetch';
import MyMovie from 'fetch/MyMovie';
import Login from 'login/Login';
import MyLogin from 'login/MyLogin';
import TodoMainTest from 'remaind/TodoMainTest';
import LoginTest from 'remaind/LoginTest';
import Spinner from 'spinner/Spinner';
import Radio from 'radio/Radio';
import LoginPage from 'pickle/LoginPage';
import PickleHome from 'pickle/PickleHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReducerAll from 'remaind/ReducerAll';
import Signin from 'pickle/Signin';
import Start from 'layouts/Start';
import Position from 'HTML/Position';
import Boot from '태리니/Boot';
import Redux from 'toolkit/Redux';
import Array from '태리니/Array';
import BoardMain from 'Board/BoardMain';

// bootstrap => start.js에 존재
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<PickleHome />} />
          <Route path="/Page" element={<LoginPage />} />
        </Routes>
  </BrowserRouter> */}
    <All />
  </>
);
reportWebVitals();
