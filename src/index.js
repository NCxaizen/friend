import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import {data} from './Data';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div>
    <Card id={data[0].id} name={data[0].name} profession={data[0].profession}/>
    <Card id={data[1].id} name={data[1].name} profession={data[1].profession}/>
    <Card id={data[2].id} name={data[2].name} profession={data[2].profession}/>
  </div>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
