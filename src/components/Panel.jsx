import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Source Sans Pro';
  font-size: 1.3em;
  position: absolute;
  z-index: 10;
  width: 200px;
  height: 220px;
  background: #eee;
  top: 50%;
  left: 50%;
  margin: -110px 0 0 -100px;
  padding: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  z-index: 100;
  
  & h1 {
    font-size: 1.8em;
    font-weight: 700;
    text-align: center;
    color: #000000;
    margin-top: -10px;
  }
  
  & p {
    font-weight: 400;
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.3em;
  }
  
  a {
    display: block;
    text-align: center;
    border: 1px solid lightgray;
    margin: 0 auto;
    
    font-size: 0.8rem;
    padding: 0.5rem;
    
    :hover {
      background-color: lightgray;
      font-weight: bold;
    }
  }
`

function Panel() {
  return (
    <Container>
      <h1>A *</h1>
      <hr/>
      <p>휴리스틱 알고리즘 플랫폼을 위한 테스트 대회입니다.</p>
      <br/>
      <Link to="/guide">대회 시작하기</Link>
    </Container>
  );
}

export default Panel;