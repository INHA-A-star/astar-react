import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid darkgray;
  background-color: #fafafa;
  
  transition: all 300ms ease-in;
  
  & div {
    padding: 0.3rem 0;
    font-size: 2em;
    font-weight: bold;
  }

  & ul {
    display: flex;

    & li {
      padding: 0 1rem;
      border: 2px solid transparent;
      font-weight: bold;
    }
  }
  
`;

const Li = styled.li`
  transition-duration: 0.5s;

  :hover {
    background-color: #e7e4e4;
  }
`;

function AppHeader() {

  return (
    <Nav>
      <div>
        <Link to="/">A *</Link>
      </div>
      <ul>
        <Li>
          <Link to="/guide">Guide</Link>
        </Li>
        <Li>
          <Link to="/problem">Problem</Link>
        </Li>
      </ul>
    </Nav>
  );
}

export default AppHeader;