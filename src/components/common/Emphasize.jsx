import React from 'react';
import styled from '@emotion/styled';

const Content = styled.strong`
  font-weight: bold;
`

function Emphasize({ content }) {
  return (
    <Content>{content}</Content>
  );
}

export default Emphasize;