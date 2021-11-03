import React from 'react';
import styled from '@emotion/styled';

const Content = styled.span`
  padding: 0.2rem 0.5rem;
  background-color: rgba(135, 131, 120, 0.15);
  color: #eb5757;
`;

function Highlighting({content}) {
  return (
    <Content>{content}</Content>
  );
}

export default Highlighting;