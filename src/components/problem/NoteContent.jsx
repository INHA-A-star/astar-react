import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #e9ecf3;
  border-radius: 0.5rem;
  padding: 1rem;
  
  font-size: 0.8rem;
`;

function NoteContent({children}) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default NoteContent;