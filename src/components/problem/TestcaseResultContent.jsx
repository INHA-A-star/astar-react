import React from 'react';
import styled from '@emotion/styled';
import ColorSubTitle from '../common/ColorSubTitle';

const Container = styled.div`
  width: 30%;
  text-align: center;
`;

function TestcaseResultContent({title, content}) {
  return (
    <Container>
      <ColorSubTitle title={title}/>
      <p>{content}</p>
    </Container>
  );
}

export default TestcaseResultContent;