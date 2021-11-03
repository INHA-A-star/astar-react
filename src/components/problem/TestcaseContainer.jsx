import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid lightgray;
  padding: 1rem;
`;

function TestcaseContainer({isOpen, children}) {
  return (
    isOpen
      ? <Container>{children}</Container>
      : null
  );
}

export default TestcaseContainer;