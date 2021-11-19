import React from 'react';
import styled from '@emotion/styled';

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bolder;
`;

const ContentContainer = styled.div`
  border: 1px solid darkgray;
  padding: 2rem;
`;

function MainContentLayout({title, children}) {
  return (
    <>
      <MainTitle>{title}</MainTitle>
      <ContentContainer>
        {children}
      </ContentContainer>
    </>
  );
}

export default MainContentLayout;