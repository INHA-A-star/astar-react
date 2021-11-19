import React from 'react';
import AppHeader from './AppHeader';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  padding-top: 67px;
  margin: 2rem auto;
  width: 900px;
`;

function AppLayout({ children }) {
  return (
    <>
      <AppHeader/>
      <MainContainer>
        {children}
      </MainContainer>
    </>
  );
}

export default AppLayout;