/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import SubTitle from '../components/common/SubTitle';
import AppLayout from '../components/common/AppLayout';
import MainContentLayout from '../components/common/MainContentLayout';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import FirstSubTitle from '../components/common/FirstSubTitle';

const Ol = styled.ul`
  list-style: decimal;
  margin-left: 1.5rem;
  line-height: 2;
`;

const nextLink = css`
  display: block;
  background-color: lightsteelblue;
  margin: 1rem auto 0 auto;
  border-radius: 3px;
  padding: 0.5rem 0.3rem;
  width: 70px;
  color: white;
  text-align: center;
  :hover {
    background-color: cornflowerblue;
  }
  :active {
    transform: translateY(5px);
  }
`;

function GuidePage() {
  return (
    <AppLayout>
      <MainContentLayout title="📖 대회 가이드">
        <div>
          <FirstSubTitle title="시작하기 전에"/>
          <p>
            안녕하세요.<br/>
            이 테스트는 90분간 진행됩니다.
            테스트를 시작하기 전 아래 안내 사항을 숙지해주세요.
          </p>
          <SubTitle title="안내 사항"/>
          <Ol>
            <li>테스트를 시작하면 멈출 수 없으며 90분 안에 문제를 풀어야 합니다.</li>
            <li>
              REST API에 대한 기본적인 지식이 요구됩니다. <br/>
              REST API에 대해 잘 모르겠다면 아래 링크로 이동해보세요! <br/>
              https://rest-api.com (REST API에 대한 설명 글 링크하기)
            </li>
            <li>'API 문서'란을 통해 해결해야할 문제와 사용할 수 있는 API가 제공됩니다.</li>
            <li>'결과'란에서 가장 최근 보낸 문제 풀이 결과에 대한 피드백을 제공합니다.</li>
            <li>'순위'란에서 상위 10등까지의 점수를 확인할 수 있습니다.</li>
          </Ol>
        </div>
      </MainContentLayout>
      <Link to="/problem" css={nextLink}>다음</Link>
    </AppLayout>
  );
}

export default GuidePage;