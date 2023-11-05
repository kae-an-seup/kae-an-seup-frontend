import React, { useState } from 'react';
import styled from 'styled-components';

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
  
export default ToggleSwitch