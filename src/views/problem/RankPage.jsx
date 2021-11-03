import React, { useState } from 'react';
import MainContentLayout from '../../components/common/MainContentLayout';
import styled from '@emotion/styled';

const Table = styled.table`
  width: 100%;
  margin-top: 0.5rem;
  border: 1px solid darkgray;
  text-align: left;
  
  th {
    background-color: lightsteelblue;
    padding: 0.5rem;
  }
  td {
    padding: 0.5rem;
  }
`;

function RankPage() {
  const [userInfo] = useState([
    { email: '00000000@inha.edu', score: 1425 },
    { email: '22222222@inha.edu', score: 1250 },
    { email: '33333333@inha.edu', score: 1150 },
    { email: '44444444@inha.edu', score: 1100 },
    { email: '55555555@inha.edu', score: 1070 },
    { email: '66666666@inha.edu', score: 1060 },
    { email: '77777777@inha.edu', score: 1050 },
    { email: '88888888@inha.edu', score: 1040 },
    { email: '99999999@inha.edu', score: 1030 },
    { email: '10101010@inha.edu', score: 1020 },
  ]);

  return (
    <MainContentLayout title="🏆 순위">
      <Table>
        <thead>
        <tr>
          <th>RANK</th>
          <th>USER</th>
          <th>SCORE</th>
        </tr>
        </thead>
        <tbody>
        {
          userInfo &&
          userInfo.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.score}</td>
            </tr>
          ))
        }
        </tbody>
      </Table>
    </MainContentLayout>
  );
}

export default RankPage;