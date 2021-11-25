/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../components/common/AppLayout';
import { css } from '@emotion/react';
import '../css/guide.css';

import introduce from '../images/guide/introduce.png';
import finish from '../images/guide/finish.gif';
import result from '../images/guide/result.gif';
import time from '../images/guide/time.gif';
import tab from '../images/guide/tab.png';
import apiTab from '../images/guide/api_tab.png';
import rankTab from '../images/guide/rank_tab.png';
import restApi from '../images/guide/restapi.png';
import styled from '@emotion/styled';

const nextLink = css`
  display: block;
  background-color: lightsteelblue;
  margin: 1rem auto 0 auto;
  border-radius: 3px;
  padding: 0.5rem 0.3rem;
  width: 70px;
  color: white;
  text-align: center;
  
  transition: all 300ms ease-in;
  
  :hover {
    background-color: cornflowerblue;
  }
  :active {
    transform: translateY(5px);
  }
`;

const opacity = css`
  opacity: 0.7;
`;

const Message = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 3px;
  margin: 30vh 0;
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;

function GuidePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let listener;
    (() => {
      const stepElems = document.querySelectorAll('.step');
      const graphicElems = document.querySelectorAll('.graphic-item');
      let currentItem = graphicElems[0]; // 현재 활성화된(visible 클래스가 붙은) .graphic-item을 지정
      let ioIndex;

      const io = new IntersectionObserver((entries, observer) => {
        ioIndex = entries[0].target.dataset.index * 1;
      });

      for (let i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = `${i}`;
        graphicElems[i].dataset.index = `${i}`;
      }

      function activate() {
        currentItem.classList.add('visible');
      }

      function inactivate() {
        currentItem.classList.remove('visible');

      }

      listener = () => {
        let step;
        let boundRect;

        for (let i = ioIndex - 1; i <= ioIndex + 1; i++) {
          step = stepElems[i];
          if (!step) {
            continue;
          }

          boundRect = step.getBoundingClientRect();

          if (boundRect.top > window.innerHeight * 0.1 && boundRect.top < window.innerHeight * 0.8) {
            inactivate();
            currentItem = graphicElems[step.dataset.index];
            activate();
          }
        }
      };

      window.addEventListener('scroll', listener);

      activate();
    })();
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);


  return (
    <AppLayout>
      <header className="header">
        <div className="global-width">
          <Message>
            <p>
              테스트 대회에 참여해주셔서 감사합니다.<br/>
              아래로 스크롤하여 대회 안내 사항을 확인해주세요!
            </p>
          </Message>
        </div>
      </header>
      <section className="scroll-content">
        <div className="scroll-graphic">
          <div className="graphic-item"><img className="scene-img" css={opacity} src={introduce} alt="introduce"/></div>
          <div className="graphic-item"><img className="scene-img" css={opacity} src={time} alt="timer"/></div>
          <div className="graphic-item"><img className="scene-img" css={opacity} src={restApi} alt="rest-api"/></div>
          <div className="graphic-item"><img className="scene-img" css={opacity} src={tab} alt="nav-bar"/></div>
          <div className="graphic-item"><img className="scene-img" css={opacity} src={apiTab} alt="api-tab"/></div>
          <div className="graphic-item"><img className="scene-img" css={opacity} src={result} alt="result"/></div>
          <div className="graphic-item"><img className="scene-img" css={opacity} src={rankTab} alt="rank-tab"/></div>
          <div className="graphic-item"><img className="scene-img" css={opacity} src={finish} alt="end"/></div>
        </div>
        <div className="scroll-text global-width">
          <div className="step">
            <p>
              안녕하세요. <br/><br/>
              테스트를 위한 몇 가지 안내사항을 알려드리겠습니다!
            </p>
          </div>
          <div className="step">
            <p>
              테스트 대회는 3시간에 걸쳐 진행됩니다. (14~17시)
            </p>
          </div>
          <div className="step">
            <p>
              본 테스트는 REST API에 대한 기본적인 지식에 요구됩니다. <br/>
            </p>
          </div>
          <div className="step">
            <p>
              대회를 시작하시면 3가지 탭을 보실 수 있습니다.
            </p>
          </div>
          <div className="step">
            <p>
              'API 문서' 탭은 해결해야할 문제와 사용할 수 있는 API가 제공됩니다.
            </p>
          </div>
          <div className="step">
            <p>
              '결과' 탭에서는 문제 풀이 결과에 대한 시각화 정보를 제공합니다<br/>
            </p>
          </div>
          <div className="step">
            <p>
              '순위' 탭에서는 높은 점수를 획득한 유저들을 알 수 있습니다.
            </p>
          </div>
          <div className="step last-step">
            <p>
              여기까지 간단한 안내사항이었습니다. <br/>
              아래 버튼을 눌러 대회를 시작하실 수 있습니다!<br/>
              <Link to="/problem" css={nextLink}>다음</Link>
            </p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default GuidePage;