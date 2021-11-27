import React, { useRef } from 'react';
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
  background-color: white;
  -webkit-box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.15);
  box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.15);

  
  transition: all 300ms ease-in;
  
  & div {
    padding: 0.3rem 0;
    font-size: 2em;
    font-weight: bold;
  }
  & ul {
    display: flex;
    & li {
      padding: 0.2rem 1rem;
      border: 2px solid transparent;
      border-radius: 5px;
      transition-duration: 0.5s;
      
      :hover a {
        color: lightsteelblue;
      }
    }
  }
`;

function AppHeader() {
  const ref = useRef(null);

  document.addEventListener('scroll', () => {
    if (!ref.current) {
      return;
    }
    const navbarHeight = ref.current && ref.current.getBoundingClientRect().height;
    if (window.scrollY > navbarHeight) {
      ref.current.classList.add('navbar');
    } else {
      ref.current.classList.remove('navbar');
    }
  });

  return (
    <Nav ref={ref}>
      <div>
        <Link to="/">A *</Link>
      </div>
      <ul>
        <li>
          <Link to="/guide">대회 안내</Link>
        </li>
        <li>
          <Link to="/problem">문제</Link>
        </li>
      </ul>
    </Nav>
  );
}

export default AppHeader;