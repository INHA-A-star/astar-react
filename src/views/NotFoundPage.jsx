import React from 'react';
import styled from '@emotion/styled';
import AppLayout from '../components/common/AppLayout';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70vh;

  font-size: 3rem;
`;

function NotFoundPage() {
  return (
    <AppLayout>
      <Container>
        찾을 수 없는 페이지입니다.
      </Container>
    </AppLayout>
  );
}

export default NotFoundPage;