import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 30%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 1.3rem;
  margin: 1rem 0;
`;

function TestcaseResultContent({title, content}) {
  return (
    <Container>
      <Title>{title}</Title>
      <p>{content}</p>
    </Container>
  );
}

export default TestcaseResultContent;