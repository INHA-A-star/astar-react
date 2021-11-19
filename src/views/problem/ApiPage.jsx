import React, { useEffect, useState } from 'react';
import SubTitle from '../../components/common/SubTitle';
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
import FirstSubTitle from '../../components/common/FirstSubTitle';

const PuzzleBtn = styled.button`
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  margin-top: 1rem;
  background-color: lightsteelblue;
  color: white;
  font-weight: bold;
  
  &:hover {
    background-color: cornflowerblue;
  }
  
  &:active {
    transform: translateY(5px);
  }
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

const CommandTable = styled.table`
  width: 100%;
  margin-top: 0.5rem;
`;

const UnorderedList = styled.ul`
  list-style: disc;
  margin-left: 2rem;
`;

function ApiPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <MainContentLayout title="📄 API 문서">
        <FirstSubTitle title="개요"/>
        <p>
          15-퍼즐은 4x4 격자 판에서 타일들을 정렬하는 퍼즐입니다.<br/>
          타일은 15개가 있습니다. 각각 1에서 15까지 번호가 매겨져 있고, 초기에는 무작위로 뒤섞여 있습니다.<br/>
          빈 칸이 하나 남게 되는데 빈 칸에 인접한 타일을 밀어서 빈 칸으로 이동하면 빈 칸이었던 자리에는 이동한 타일이 있게 되고, 해당 타일이 있던 자리는 빈 칸이 됩니다.<br/>
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

        <SubTitle title="이동"/>
        <p>타일을 이동하는 방법은 총 4가지가 있습니다.</p>
        <CommandTable>
          <tbody>
          <tr>
            <td>"U"</td>
            <td>빈칸을 위로 움직인다.</td>
          </tr>
          <tr>
            <td>"D"</td>
            <td>빈칸을 아래로 움직인다.</td>
          </tr>
          <tr>
            <td>"L"</td>
            <td>빈칸을 왼쪽으로 움직인다.</td>
          </tr>
          <tr>
            <td>"R"</td>
            <td>빈칸을 오른쪽으로 움직인다.</td>
          </tr>
          </tbody>
        </CommandTable>
        <p>
          각 방향으로 이동할 수 있는 타일이 있다면, 해당 타일을 이동하고 <Emphasize content="이동 횟수"/> 가 1 증가합니다.<br/>
          격자의 상태는 타일이 이동한 상태로 바뀝니다.<br/>
          이동할 수 있는 타일이 없다면, 상태가 바뀌지 않고 <Emphasize content="이동 실패 횟수"/> 가 1 증가합니다.<br/>
        </p>

        <SubTitle title="제한"/>
        <UnorderedList>
          <li>정렬이 불가능한 퍼즐 상태는 입력으로 주어지지 않습니다.</li>
          <li>4x4 격자가 아닌 경우는 입력으로 주어지지 않습니다.</li>
          <li>5개의 테스트 케이스가 있고, 서로 다른 퍼즐의 초기 상태가 주어집니다.</li>
          <li>각 퍼즐은 500번을 초과하지 않는 이동 방법이 반드시 존재합니다.</li>
        </UnorderedList>

        <SubTitle title="결과"/>
        <ColorSubTitle title="Accept" color="green"/>
        <p>
          모든 테스트 케이스에 대하여 정렬에 성공한 경우 점수를 얻게 됩니다.<br/>
          점수는 5개 테스트 케이스에 대하여 (1000 - S - F) 의 평균으로 산정합니다.<br/>
          <Highlighting content="S"/> = 이동 횟수<br/>
          <Highlighting content="F"/> = 이동 실패 횟수
        </p>
        <ColorSubTitle title="WA (Wrong Answer)" color="red"/>
        <p>
          5개 테스트 케이스 중 하나라도 이동 횟수가 500번을 넘어가거나, 결과가 정렬되지 않았다면 받게 됩니다.
        </p>
        <ColorSubTitle title="AT (Abnormal Termination)"/>
        <p>
          현재 채점이 완전히 끝나지 않고 다른 채점이 시작되면 받게 됩니다.
        </p>

        <SubTitle title="예시"/>
        <img src={puzzleImage2} alt="퍼즐2"/>
        <p>
          위의 퍼즐을 풀기 위해서는, 타일을 <Highlighting content="L U"/> 순서로 두 번에 걸쳐 이동하는 방법이 최적입니다.<br/>
          <Highlighting content="U L D R U L D R U L"/> 순서로 이동하더라도 퍼즐을 풀 수는 있지만, 이동 횟수가 많아져 높은 점수를 얻을 수 없습니다.
        </p>

        <SubTitle title="API 명세"/>
        <p>
          HTTPS로 서버와 통신하며 api를 사용할 수 있습니다.<br/>
          요청과 응답은 모두 json 포맷을 이용해야 합니다.
        </p>
        <ColorSubTitle title="Status Codes"/>
        <UnorderedList>
          <li>200 OK | 호출 성공</li>
          <li>201 Created | 생성 성공</li>
          <li>400 Bad Request | 파라미터 값 오류</li>
          <li>401 Unauthorized | 인증 오류</li>
          <li>5xx Server Error | 서버 에러, 관리자 문의 필요</li>
        </UnorderedList>

        <ApiSubTitle title="START API"/>
        <p>
          새로운 채점을 시작합니다.<br/>
          사용자 식별 값을 가지고 인증 토큰을 만들어 반환합니다. 이후로 모든 쿼리에 대해 같은 토큰 값으로 인증해야 정상적인 결과를 얻을 수 있습니다.<br/>
          모든 테스트 케이스 퍼즐을 초기화합니다.<br/>
          이전 채점을 끝내지 않고 Start API를 호출하면 이전 채점은 중단되며 결과는 AT가 됩니다.
        </p>
        <ColorSubTitle title="request"/>
        <NoteContent>
          POST /start<br/>
          X-Auth-Token: {'{X-Auth-Token}'}<br/>
          Content-Type: application/json<br/>
        </NoteContent>
        <p>
          {'{X-Auth-Token}'} : 사용자 식별 값으로, 내 정보 - 인증 메뉴에서 확인할 수 있습니다.
        </p>
        <ColorSubTitle title="example"/>
        <NoteContent>
          curl -X POST {'URL'}/start<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'X-Auth-Token: {'X-Auth-Token'}'<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Content-Type: application/json'
        </NoteContent>
        <ColorSubTitle title="response"/>
        <NoteContent>
          HTTP/1.1 201 Created<br/>
          {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;'time-stamp': 0,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;'auth-key': 'DFE7905AE8317C16F768B919EC83505F393C9B1C7CAC9'<br/>
          {'}'}
        </NoteContent>

        <ApiSubTitle title="Status API"/>
        <p>
          case번째 테스트 케이스 퍼즐의 현재 상태를 반환합니다.
        </p>
        <ColorSubTitle title="request"/>
        <NoteContent>
          GET /status/{'{case}'}<br/>
          Authorization: {'auth-key'}<br/>
          Content-Type: application/json
        </NoteContent>
        <p>
          {'{case}'} : 테스트 케이스의 번호입니다. (1 ≤ case ≤ 5)<br/>
          {'{auth-key}'} : Start API를 통해 발급 받은 인증 토큰입니다.
        </p>
        <ColorSubTitle title="example"/>
        <NoteContent>
          curl -X GET {'{URL}'}/status/1<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H ''Authorization: {'{auth-key}'}'<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Content-Type: application/json'
        </NoteContent>
        <ColorSubTitle title="response"/>
        <NoteContent>
          HTTP/1.1 200 OK<br/>
          {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"time-stamp": 23,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"puzzle": [<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4, 1, 2],<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[7, 0, 3],<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[8, 5, 6],<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;]<br/>
          {'}'}
        </NoteContent>

        <ApiSubTitle title="Move API"/>
        <p>
          case번째 테스트 케이스 퍼즐을 조작합니다.<br/>
          이동 명령은 정수의 배열로 전달됩니다.<br/>
          한 번에 하나의 이동만 할 수도 있고, 한 번에 여러 개의 이동 명령을 보내 이동할 수도 있습니다.
        </p>
        <NoteContent>
          <ColorText content="0" color="#905"/>: <ColorText content="U" color="#905"/>, 위쪽으로 이동<br/>
          <ColorText content="1" color="#905"/>: <ColorText content="R" color="#905"/>, 오른쪽으로 이동<br/>
          <ColorText content="2" color="#905"/>: <ColorText content="D" color="#905"/>, 아래쪽으로 이동<br/>
          <ColorText content="3" color="#905"/>: <ColorText content="L" color="#905"/>, 왼쪽으로 이동<br/>
        </NoteContent>
        <p>
          모든 이동에 대해 <Emphasize content="이동 횟수"/>와 <Emphasize content="이동 실패 횟수"/> 가 누적됩니다.
          API 호출 횟수는 결과에 영향이 없습니다.
        </p>
        <ColorSubTitle title="request"/>
        <NoteContent>
          PUT /move/{'{case}'}<br/>
          Authorization: {'{auth-key}'}<br/>
          Content-Type: application/json
        </NoteContent>
        <ColorSubTitle title="example"/>
        <NoteContent>
          curl -X POST {'{URL}'}/move/2<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Authorization: {'{auth-key}'}'<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Content-Type: application/json'<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-d {`'{ "commands": [2, 3, 1, 0, 1, 2] }'`}
        </NoteContent>
        <ColorSubTitle title="response"/>
        <NoteContent>
          HTTP/1.1 201 Created<br/>
          {'{'} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"time-stamp": 95,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"moved": 5,<br/>
          {'}'}
        </NoteContent>

        <ApiSubTitle title="Finish API"/>
        <p>
          채점을 종료합니다.<br/>
          호출되는 시점을 기준으로 점수를 산정하고 반환합니다.<br/>
          이후로는 이번 채점에서 Start API로 발급받은 auth-key를 사용할 수 없습니다.<br/>
          Start API를 호출하지 않고 Finish API를 호출하는 경우에는 401 Unauthorized를 반환합니다.
        </p>
        <ColorSubTitle title="request"/>
        <NoteContent>
          POST /finish<br/>
          Authorization: {'{auth-key}'}<br/>
          Content-Type: application/json
        </NoteContent>
        <ColorSubTitle title="example"/>
        <NoteContent>
          curl -X POST {'{URL}'}/finish<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Authorization: {'{auth-key}'}'<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H 'Content-Type: application/json'<br/>
        </NoteContent>
        <ColorSubTitle title="response"/>
        <NoteContent>
          HTTP/1.1 200 OK<br/>
          {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"score": 1283<br/>
          {'}'}
        </NoteContent>
      </MainContentLayout>
    </>
  );
}

export default ApiPage;