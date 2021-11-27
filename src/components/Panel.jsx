import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-size: 1.3em;
  position: absolute;
  width: 200px;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -100px;
  padding: 20px;
  z-index: 100;
  color: white;
  text-align: center;
  user-select: none;
  
  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-top: -10px;

    background: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.3em;
  }

  a {
    display: block;
    margin: 0 auto;
    border: 1px solid #312e2e;
    border-radius: 5px;
    padding: 0.5rem;
    color: white;
    font-size: 0.8rem;

    transition: all 300ms ease-in;

    :hover {
      background-color: lightgray;
      font-weight: bold;
      color: black;
    }
  }
`

function Panel() {
  return (
    <Container>
      <h1>A *</h1>
      <br/>
      <Link to="/guide">대회 시작하기</Link>
    </Container>
  );
}

export default Panel;