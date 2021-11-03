import React from 'react';
import AppLayout from '../../components/common/AppLayout';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ApiPage from './ApiPage';
import ResultPage from './ResultPage';
import RankPage from './RankPage';
import styled from '@emotion/styled';

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

  return (
    <AppLayout>
      <Nav>
        <Ul>
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