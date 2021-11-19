import React, { useEffect, useRef } from 'react';
import AppLayout from '../../components/common/AppLayout';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ApiPage from './ApiPage';
import ResultPage from './ResultPage';
import RankPage from './RankPage';
import styled from '@emotion/styled';
import '../../css/problem.css';

const Nav = styled.nav`
  width: 400px;
  text-align: center;
  margin-bottom: 1rem;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  flex-grow: 1;
  width: 33%;
  height: 100%;
  padding: 0.3rem;
  margin-right: 0.1rem;
  margin-bottom: 1rem;
  background-color: lightsteelblue;

  transition-duration: 0.5s;
  
  :hover {
    width: 50%;
    background-color: cornflowerblue;
    font-weight: bold;
  }
  
  a {
    display: block;
    text-decoration: none;
    color: black;
  }
`;

function ProblemPage() {
  const { path, url } = useRouteMatch();
  const list = useRef(null);

  useEffect(() => {
  }, []);


  const onClickSubHeader = (e) => {
    const target = e.target;
    if (!list.current || target.nodeName !== 'A') {
      return;
    }

    Array.from(list.current.children).forEach(li => {
      li.style.backgroundColor = 'lightsteelblue';
      li.style.fontWeight = 'normal';
    });

    target.parentElement.style.backgroundColor = 'cornflowerblue';
    target.parentElement.style.fontWeight = 'bold';
  };

  return (
    <AppLayout>
      <Nav>
        <Ul ref={list} onClick={onClickSubHeader}>
          <Li><Link to={`${url}`}>API 문서</Link></Li>
          <Li><Link to={`${url}/result`}>결과</Link></Li>
          <Li><Link to={`${url}/rank`}>순위</Link></Li>
        </Ul>
      </Nav>

      <Switch>
        <Route exact path={path} component={ApiPage}/>
        <Route path={`${path}/result`} component={ResultPage}/>
        <Route path={`${path}/rank`} component={RankPage}/>
      </Switch>
    </AppLayout>
  );
}

export default ProblemPage;