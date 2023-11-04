import React, { useEffect, useState } from 'react';
import EyesComponent from './EyesComponent';
import styled from 'styled-components';
import './App.css';
import ToggleSwitch from './Toggle';

function App() {
  const [cameraStream, setCameraStream] = useState(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
    } catch (error) {
      console.error('카메라 접근을 허용하지 않음:', error);
    }
  };

  useEffect(() => {
    if (cameraStream) {
      // camera를 사용해서 무언가 하는 것
    }
  }, [cameraStream]);

  return (
    <div className="container">
      <h1>캐-안습</h1>
      <EyesComponent />
      <p className='info'>: 현대인의 올바른 컴퓨터 사용 습관 교정을 위한 눈 건강 보호 프로그램</p>
      <ul>
        <li><span className="checkmark">✔</span>눈 움직임 파악을 위해 카메라 접근을 허용해주세요. </li>
        <li><span className="checkmark">✔</span>경고를 전달하기 위해 소리 접근을 허용해주세요.</li>
      </ul>
      <div className="cards">
        <Card title="눈 깜박임 경고" description="눈을 깜빡이는 횟수가 일정 이하로 줄어들면 경고창을 띄웁니다." />
        <Card title="눈 운동 애니메이션" description="컴퓨터를 장시간 사용하면 눈 건강을 위한 애니메이션을 띄웁니다." />
        <Card title="자동 밝기 조절" description="어두운 환경에서 컴퓨터를 할 경우 주변환경에 맞게 자동으로 밝기를 조절해줍니다." />
      </div>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <ToggleSwitch isOn={false} /> {/* ToggleSwitch 컴포넌트로 대체하며 isOn prop 전달 */}
      </div>
      <p>{description}</p>
      {title === "눈 깜박임 경고" && <CheckmarkBadge />}
    </div>
  );
}

function CheckmarkBadge() {
  return (
    <div className="checkmark-badge">
      <div className="checkmark-icon"></div>
      <span>경고 음성으로 받기</span>
    </div>
  );
}

export default App;
