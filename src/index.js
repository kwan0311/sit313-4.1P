import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bar from './Bar'
import Image from './Image'
import Articles from './Articles'
import Tutorials from './Turorials';
import Foot from './Foot';
import Email from './Email';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Bar/>
    <Image/>
    <Articles/>
    <br></br>
    
    <Tutorials/>
    <br></br>
    <br></br>
    <Email/>
    <br></br>
    <Foot/>
    
  </div>
  
);


