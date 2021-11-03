import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h2`
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 1rem 0;

  color: #708090;
  font-size: 1.7rem;
  font-weight: bold;
  border-bottom: 1px solid hsla(0,0%,0%,0.07);
`;

function SubTitle(props) {
  const title = props.title;

  return (
    <Title>{title}</Title>
  );
}

export default SubTitle;