import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid darkgray;

  & div {
    padding: 0.3rem 0;
    font-size: 2em;
    font-weight: bold;
  }

  & ul {
    display: flex;

    & li {
      padding: 0 1rem;
      font-weight: bold;
    }
  }
`;

const Li = styled.li`
  transition-duration: 0.5s;
  
  :hover {
    border-bottom: 1px solid rosybrown;
  }
`;

function AppHeader() {
  return (
    <Nav>
      <div>
        <Link to="/"><i className="fas fa-star-half-alt"></i> Astar</Link>
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