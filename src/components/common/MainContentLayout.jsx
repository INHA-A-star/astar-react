import React from 'react';
import styled from '@emotion/styled';

const MainTitle = styled.h1`
  font-size: 2.5rem;
`;

const TitleContent = styled.span`
  font-weight: bold;
`

const ContentContainer = styled.div`
  border: 1px solid darkgray;
  padding: 2rem;
`;

function MainContentLayout({title, emoji, children}) {
  return (
    <>
      <MainTitle>{emoji}
        <TitleContent> {title}</TitleContent>
      </MainTitle>
      <ContentContainer>
        {children}
      </ContentContainer>
    </>
  );
}

export default MainContentLayout;