import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h2`
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  color: #708090;
  font-size: 1.7rem;
  font-weight: bold;
  border-bottom: 1px solid hsla(0,0%,0%,0.07);
`;

function FirstSubTitle({title}) {
  return (
    <Title>{title}</Title>
  );
}

export default FirstSubTitle;