import React, { useEffect, useState } from 'react';
import EyesComponent from './EyesComponent';
import styled from 'styled-components';
import './App.css';

function App() {
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = () => {
    const permissions = [
      '카메라 접근 권한을 허용하시겠습니까?',
      '사운드 접근 권한을 허용하시겠습니까?',
      '정자세로 앉으면 정확도가 향상됩니다.',
    ];

    permissions.forEach((permission) => {
      alert(permission);
    });
  };

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

const ToggleSwitchStyled = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  background-color: ${(props) => (props.isOn ? '#00cc00' : '#ccc')}; // 색상을 조건부로 설정

  &:after {
    content: '';
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${(props) => (props.isOn ? 'calc(100% - 18px)' : '2px')};
    display: block;
    transition: left 0.3s;
  }
`;

function ToggleSwitch({ isOn }) {
  const [toggleState, setToggleState] = useState(isOn); // isOn을 초기 상태로 설정

  const toggleSwitch = () => {
    setToggleState(!toggleState);
  };

  return (
    <ToggleSwitchStyled onClick={toggleSwitch} isOn={toggleState} />
  );
}


export default App;
