import React from 'react';
import eyeImage from './assets/eyeDrop.png'; // 이미지를 임포트
import './App.css';


function EyesComponent() {
  return <img src={eyeImage} alt="눈 이미지" className="EyesComponent"/>;
}

export default EyesComponent;
