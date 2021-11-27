import React, { useEffect, useRef, useState } from 'react';
import puzzleImage1 from '../../images/puzzle-1.png';
import puzzleImage2 from '../../images/puzzle-2.png';
import AppModal from '../../components/common/AppModal';
import PuzzlePractice from '../../components/problem/PuzzlePractice';
import styled from '@emotion/styled';
import Emphasize from '../../components/common/Emphasize';
import ColorSubTitle from '../../components/common/ColorSubTitle';
import Highlighting from '../../components/common/Highlighting';
import ApiSubTitle from '../../components/problem/ApiSubTitle';
import NoteContent from '../../components/problem/NoteContent';
import ColorText from '../../components/common/ColorText';
import MainContentLayout from '../../components/common/MainContentLayout';

const PuzzleBtn = styled.button`
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  margin-top: 1rem;
  background-color: lightsteelblue;
  color: white;
  font-weight: bold;
  cursor: pointer;
  
  transition: all 300ms ease-in;
  
  &:hover {
    background-color: cornflowerblue;
  }
  
  &:active {
    transform: translateY(5px);
  }
`;
const FirstSubTitle = styled.h2`
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  color: #708090;
  font-size: 1.7rem;
  font-weight: bold;
  border-bottom: 1px solid hsla(0,0%,0%,0.07);
`; 

const SubTitle = styled.h2`
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 1rem 0;

  color: #708090;
  font-size: 1.7rem;
  font-weight: bold;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.07);
`;

const ModalContent = styled.div`
  & h1 {
    padding: 0.5rem 0;
    font-size: 1.3rem;
    font-weight: bold;
  }

  & button {
    display: block;
    border: 0;
    margin-left: auto;
    background-color: white;
  }
`;

const UnorderedList = styled.ul`
  list-style: disc;
  margin-left: 2rem;
`;

const ArrowBtn = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 100px;
  bottom: 30px;
  background-color: orange;
  border: 0;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  
  transition: all 300ms ease-in;
  
  :hover {
    transform: scale(1.1);
  }
`;

const StatusCode = styled.span`
  display: inline-block;
  width: 150px;
`;

const Aside = styled.aside`
  position: fixed;
  top: 15rem;
  right: 5rem;
  padding: 1rem;
  border-left: 1px dashed darkgrey;
  color: #b4b4b4;
  font-size: 0.9rem;
  user-select: none;
  cursor: pointer;
  
  li:hover {
    color: black;
  }
  
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

function ApiPage() {
  const [showModal, setShowModal] = useState(false);

  const sidebarRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const onClickScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const onSidebarClick = (e) => {
    const target = e.target;
    const index = target.dataset.index;
    if (index == null || sidebarRef == null) {
      return;
    }

    const section = sidebarRef.current[index];
    const rect = section.getBoundingClientRect();
    section.scrollIntoView();
    window.scrollBy(0, -rect.height);
  };

  return (
    <>
      <Aside className="sidebar" onClick={onSidebarClick}>
        <ul>
          <li data-index="0">개요</li>
          <li data-index="1">이동</li>
          <li data-index="2">제한</li>
          <li data-index="3">결과</li>
          <li data-index="4">예시</li>
          <li data-index="5">API 명세</li>
        </ul>
      </Aside>
      <MainContentLayout title="📄 API 문서">
        <FirstSubTitle ref={el => (sidebarRef.current[0] = el)}>개요</FirstSubTitle>
        <p>
          8-퍼즐은 3x3 격자 판에서 타일들을 정렬하는 퍼즐입니다.<br/>
          타일은 8개가 있습니다. 각각 1에서 8까지 번호가 매겨져 있고, 초기에는 무작위로 뒤섞여 있습니다.<br/>
          빈 칸이 하나 남게 되는데, 빈 칸에 인접한 타일을 밀어서 빈 칸으로 이동하면 빈 칸이었던 자리에는 이동한 타일이 있게 되고, 해당 타일이 있던 자리는 빈 칸이 됩니다.<br/>
          타일들을 적절히 움직여서 번호가 정렬된 상태로 만들어봅시다.
        </p>
        <br/>
        <img src={puzzleImage1} width="100%" height="100%" alt="퍼즐1"/>
        <PuzzleBtn onClick={toggleModal}>퍼즐 맞춰보기</PuzzleBtn>
        <AppModal showModal={showModal}>
          <ModalContent>
            <button onClick={toggleModal}>❌</button>
            <h1>방향키를 이용해 퍼즐을 움직여 볼 수 있습니다!</h1>
            <PuzzlePractice/>
          </ModalContent>
        </AppModal>

        <SubTitle ref={el => (sidebarRef.current[1] = el)}>이동</SubTitle>
        <p>타일을 이동하는 방법은 총 4가지가 있습니다.</p>
        <UnorderedList>
          <li><Highlighting content="U"></Highlighting> : 위쪽</li>
          <li><Highlighting content="R"></Highlighting> : 오른쪽</li>
          <li><Highlighting content="D"></Highlighting> : 아래쪽</li>
          <li><Highlighting content="L"></Highlighting> : 왼쪽</li>
        </UnorderedList>
        <p>
          각 방향으로 이동할 수 있는 타일이 있다면, 해당 타일을 이동하고 <Emphasize content="이동 횟수"/> 가 1 증가합니다.<br/>
          격자의 상태는 타일이 이동한 상태로 바뀝니다.
        </p>

        <SubTitle ref={el => (sidebarRef.current[2] = el)}>제한</SubTitle>
        <UnorderedList>
          <li>정렬이 불가능한 퍼즐 상태는 입력으로 주어지지 않습니다.</li>
          <li>3x3 격자가 아닌 경우는 입력으로 주어지지 않습니다.</li>
          <li>5개의 테스트 케이스가 있고, 서로 다른 퍼즐의 초기 상태가 주어집니다.</li>
          <li>각 퍼즐은 200번을 초과하지 않는 이동 방법이 반드시 존재합니다.</li>
        </UnorderedList>

        <SubTitle ref={el => (sidebarRef.current[3] = el)}>결과</SubTitle>
        <ColorSubTitle title="Accept" color="green"/>
        <p>
          모든 테스트 케이스에 대하여 정렬에 성공한 경우 점수를 얻게 됩니다.<br/>
          점수는 5개 테스트 케이스에 대하여 (200 - S) 의 합산으로 산정합니다.<br/>
          <Highlighting content="S"/> = (이동 횟수)<br/>
        </p>
        <ColorSubTitle title="WA (Wrong Answer)" color="red"/>
        <p>
          5개 테스트 케이스 중 하나라도 이동 횟수가 200번을 넘어가거나, 결과가 정렬되지 않았다면 WA를 받게 됩니다.
        </p>
        <ColorSubTitle title="AT (Abnormal Termination)"/>
        <p>
          현재 채점이 완전히 끝나지 않고 다른 채점이 시작되면 받게 됩니다.
        </p>

        <SubTitle ref={el => (sidebarRef.current[4] = el)}>예시</SubTitle>
        <img src={puzzleImage2} alt="퍼즐2"/>
        <p>
          위의 퍼즐을 풀기 위해서는, 타일을 <Highlighting content="L U"/> 순서로 두 번에 걸쳐 이동하는 방법이 최적입니다.<br/>
          <Highlighting content="U L D R U L D R U L"/> 순서로 이동하더라도 퍼즐을 풀 수는 있지만, 이동 횟수가 많아져 높은 점수를 얻을 수 없습니다.
        </p>

        <SubTitle ref={el => (sidebarRef.current[5] = el)}>API 명세</SubTitle>
        <p>
          HTTP 요청을 통해 서버와 통신하며 api를 사용할 수 있습니다.<br/>
          요청과 응답은 모두 json 포맷을 이용해야 합니다.<br/><br/>

          {'{URL}: http://ostarapi-env.eba-mggu63sz.ap-northeast-2.elasticbeanstalk.com/api'}
        </p>
        <ColorSubTitle title="Status Codes"/>
        <UnorderedList>
          <li><StatusCode>200 OK</StatusCode> | &emsp; 호출 성공</li>
          <li><StatusCode>201 Created</StatusCode> | &emsp; 생성 성공</li>
          <li><StatusCode>400 Bad Request</StatusCode> | &emsp; 파라미터 값 오류</li>
          <li><StatusCode>401 Unauthorized</StatusCode> | &emsp; 인증 오류</li>
          <li><StatusCode>5xx Server Error</StatusCode> | &emsp; 서버 에러, 관리자 문의 필요</li>
        </UnorderedList>

        <ApiSubTitle title="Start API"/>
        <p>
          새로운 채점을 시작합니다.<br/>
          사용자 식별 값을 가지고 인증 토큰을 만들어 반환합니다. 이후로 모든 쿼리에 대해 같은 토큰 값으로 인증해야 정상적인 결과를 얻을 수 있습니다.<br/>
          모든 테스트 케이스 퍼즐을 초기화합니다.<br/>
          이전 채점을 끝내지 않고 Start API를 호출하면 이전 채점은 중단되며 결과는 AT가 됩니다.
        </p>
        <ColorSubTitle title="request"/>
        <NoteContent>
          POST /start<br/>
          Content-Type: application/json<br/>
        </NoteContent>
        <ColorSubTitle title="example"/>
        <NoteContent>
          curl -X POST {'{URL}'}/start<br/>
          &emsp;&nbsp;-H 'Content-Type: application/json'<br/>
          &emsp;&nbsp;-d '{'{ "email": user@inha.edu }'}'
        </NoteContent>
        <ColorSubTitle title="response"/>
        <NoteContent>
          HTTP/1.1 201 Created<br/>
          {'{'}<br/>
          &emsp;"auth_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aWQiOiI3NWNmYmQ0Ny04NTYzLTQ1NGUtYTZmZi0"<br/>
          {'}'}
        </NoteContent>

        <ApiSubTitle title="TestCase API"/>
        <p>
          case번째 테스트 케이스 퍼즐의 현재 상태를 반환합니다.
        </p>
        <ColorSubTitle title="request"/>
        <NoteContent>
          GET /testCases/{'{case}'}<br/>
          X-Auth-Token: {'{AuthorizationToken}'}<br/>
          Content-Type: application/json
        </NoteContent>
        <p>
          {'{case}'} : 테스트 케이스의 번호입니다. (0 ≤ case &lt; 5)<br/>
          {'{AuthorizationToken}'} : Start API를 통해 발급 받은 인증 토큰입니다.
        </p>
        <ColorSubTitle title="example"/>
        <NoteContent>
          curl -X GET {'{URL}'}/testCases/1<br/>
          &emsp;&nbsp;-H 'X-Auth-Token: {'{AuthorizationToken}'}'<br/>
          &emsp;&nbsp;-H 'Content-Type: application/json'
        </NoteContent>
        <ColorSubTitle title="response"/>
        <NoteContent>
          HTTP/1.1 200 OK<br/>
          {'{'}<br/>
          &emsp;"time-stamp": 23,<br/>
          &emsp;"puzzle": [<br/>
          &emsp;&nbsp;&nbsp;&nbsp;&nbsp;[4, 1, 2],<br/>
          &emsp;&nbsp;&nbsp;&nbsp;&nbsp;[7, 0, 3],<br/>
          &emsp;&nbsp;&nbsp;&nbsp;&nbsp;[8, 5, 6],<br/>
          &emsp;]<br/>
          {'}'}
        </NoteContent>
        <p>정수 타입의 "time_stamp"와 가변길이 2차원 배열 타입의 "puzzle"을 응답하게 됩니다.</p>

        <ApiSubTitle title="Move API"/>
        <p>
          case번째 테스트 케이스 퍼즐을 조작합니다.<br/>
          이동 명령은 하나의 정수로 전달됩니다.<br/>
        </p>
        <NoteContent>
          <ColorText content="0" color="#905"/>: <ColorText content="U" color="#905"/>, 위쪽으로 이동<br/>
          <ColorText content="1" color="#905"/>: <ColorText content="R" color="#905"/>, 오른쪽으로 이동<br/>
          <ColorText content="2" color="#905"/>: <ColorText content="D" color="#905"/>, 아래쪽으로 이동<br/>
          <ColorText content="3" color="#905"/>: <ColorText content="L" color="#905"/>, 왼쪽으로 이동<br/><br/>
          예를 들어, {'{ "command": 3 }'}을 호출하면 타일을 왼쪽으로 이동
        </NoteContent>
        <p>
          모든 이동에 대해 <Emphasize content="이동 횟수"/>가 누적됩니다.
        </p>
        <ColorSubTitle title="request"/>
        <NoteContent>
          PUT /move/{'{case}'}<br/>
          X-Auth-Token: {'{AuthorizationToken}'}<br/>
          Content-Type: application/json
        </NoteContent>
        <p>
          {'{case}'} : 테스트 케이스의 번호입니다. (0 ≤ case &lt; 5)<br/>
          {'{AuthorizationToken}'} : Start API를 통해 발급 받은 인증 토큰입니다.
        </p>
        <ColorSubTitle title="example"/>
        <NoteContent>
          curl -X PUT {'{URL}'}/move/2<br/>
          &emsp;&nbsp;-H 'X-Auth-Token: {'{AuthorizationToken}'}'<br/>
          &emsp;&nbsp;-H 'Content-Type: application/json'<br/>
          &emsp;&nbsp;-d {`'{ "command": 3 }'`}
        </NoteContent>
        <ColorSubTitle title="response"/>
        <NoteContent>
          HTTP/1.1 200 OK<br/>
          {'{'} <br/>
          &emsp;"time-stamp": 95<br/>
          {'}'}
        </NoteContent>
        <p>마지막 요청에 대한 "time_stamp"를 응답합니다.</p>

        <ApiSubTitle title="Finish API"/>
        <p>
          채점을 종료합니다.<br/>
          호출되는 시점을 기준으로 점수를 산정하고 반환합니다.<br/>
          이후로는 이번 채점에서 Start API로 발급받은 X-Auth-Token를 사용할 수 없습니다.<br/>
          Start API를 호출하지 않고 Finish API를 호출하는 경우에는 401 Unauthorized 에러를 응답합니다.
        </p>
        <ColorSubTitle title="request"/>
        <NoteContent>
          POST /finish<br/>
          X-Auth-Token: {'{AuthorizationToken}'}<br/>
          Content-Type: application/json
        </NoteContent>
        <ColorSubTitle title="example"/>
        <NoteContent>
          curl -X POST {'{URL}'}/finish<br/>
          &emsp;&nbsp;-H 'X-Auth-Token: {'{AuthorizationToken}'}'<br/>
          &emsp;&nbsp;-H 'Content-Type: application/json'<br/>
        </NoteContent>
        <ColorSubTitle title="response"/>
        <NoteContent>
          HTTP/1.1 200 OK<br/>
          {'{'}<br/>
          &emsp;"score": 902<br/>
          {'}'}
        </NoteContent>
        <p>
          각 테스트 케이스의 최고 점수는 200 점이며, move api 요청 횟수에 따라 1점씩 차감됩니다.<br/>
          총 5개 테스트 케이스의 점수를 합한 결과가 정수 타입 "score"로 응답됩니다.<br/>
          잘못된 요청이 있는 경우나, move api 요청이 200 회가 넘어가는 테스트 케이스가 있는 경우에 최종 점수는 0점입니다.
        </p>

        <ArrowBtn onClick={onClickScrollTop}>
          <i className="fas fa-arrow-up"></i>
        </ArrowBtn>
      </MainContentLayout>
    </>
  );
}

export default ApiPage;