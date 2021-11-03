import React from 'react';
import styled from '@emotion/styled';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  width: 800px;
  padding: 2rem;
  border-radius: 1rem;
  margin: 0 auto;

  background-color: white;

  text-align: center;
  
  > * {
    padding: 0.5rem;
  }
`;

function AppModal({showModal, children}) {
  return (
    <>
      {
        showModal &&
        <ModalContainer>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalContainer>
      }
    </>
  );

}

export default AppModal;