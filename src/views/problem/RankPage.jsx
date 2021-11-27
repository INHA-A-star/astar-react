import React, { useEffect, useState } from 'react';
import MainContentLayout from '../../components/common/MainContentLayout';
import styled from '@emotion/styled';
import { fetchRankList } from '../../api/rank';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const UserCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100px;
  margin-bottom: 1rem;
  
  .user__rank {
    width: 10%;
  }
  .user__email {
    width: 30%;
  }
  .user__score {
    width: 10%;
  }
  
  i {
    font-size: 2rem;
  }
  
  :nth-of-type(odd) {
    background-color: snow;
  }
  
  :nth-of-type(even) {
    background-color: ghostwhite;
  }
  
  :last-child {
    margin-bottom: 0;
  }
`;

const UserImage = styled.span`
  font-size: 2rem;
`;

const NoneMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  font-size: 2rem;
`;

function RankPage() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRankList()
      .then((result) => {
        setUserList(result.data['rank_list'].Rank);
      })
      .catch((error) => {
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <MainContentLayout title="순위" emoji="🏆">
      {
        isLoading ? <LoadingSpinner/> : userList.length === 0
          ? <NoneMessage>아직 순위에 든 유저가 없습니다! 😅</NoneMessage>
          : userList.map((user, index) => <UserCard key={user.UserId}>
            <span className="user__rank">{index + 1}</span>
            <UserImage><i className="far fa-user"></i></UserImage>
            <span className="user__email">{user.Email}</span>
            <span className="user__score">{user.Score}</span>
          </UserCard>)
      }
    </MainContentLayout>
  );
}

export default RankPage;