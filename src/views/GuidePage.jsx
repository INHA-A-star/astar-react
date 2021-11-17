/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../components/common/AppLayout';
import { css } from '@emotion/react';
import '../css/guide.css';

import image0 from '../images/00.png';
import image1 from '../images/01.png';
import image2 from '../images/02.png';
import image3 from '../images/03.png';
import image4 from '../images/04.png';
import image5 from '../images/05.png';
import image6 from '../images/06.png';
import image7 from '../images/07.png';

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
  let listener;

  useEffect(() => {
    (() => {
      const stepElems = document.querySelectorAll('.step');
      const graphicElems = document.querySelectorAll('.graphic-item');
      let currentItem = graphicElems[0]; // 현재 활성화된(visible 클래스가 붙은) .graphic-item을 지정
      let ioIndex;

      const io = new IntersectionObserver((entries, observer) => {
        ioIndex = entries[0].target.dataset.index * 1;
      });

      for (let i = 0; i < stepElems.length; i++) {
        console.log(stepElems);
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
          <h1 className="page-title">코로나19 시대, 제주 사는 개발자의 하루</h1>
          <p>
            이 페이지는 BBC 비주얼저널리즘 팀에서 제작한'재택근무의
            일상화'... 코로나19가 바꿀 사무실의 미래 페이지를 비슷하게 구현해 본 개발 예제입니다. 시각적 기능만 비슷하게 만들어 본 것이므로, 개발 방식은 전혀 다를 수도 있습니다.<br/>아래의
            내용은 제주 바닷가에 사는 개발자인 저의 실제 일상이기도 하지만, 강의영상 예제로 만든 페이지이므로 내용에 큰 의미를 두고 보실 필요는 없습니다 ㅎㅎ<br/>밑으로 스크롤 해봅시다.
          </p>
        </div>
      </header>
      <section className="scroll-content">
        <div className="scroll-graphic">
          <div className="graphic-item"><img className="scene-img" src={image0} alt=""/></div>
          <div className="graphic-item"><img className="scene-img" src={image1} alt=""/></div>
          <div className="graphic-item"><img className="scene-img" src={image2} alt=""/></div>
          <div className="graphic-item"><img className="scene-img" src={image3} alt=""/></div>
          <div className="graphic-item"><img className="scene-img" src={image4} alt=""/></div>
          <div className="graphic-item"><img className="scene-img" src={image5} alt=""/></div>
          <div className="graphic-item"><img className="scene-img" src={image6} alt=""/></div>
          <div className="graphic-item"><img className="scene-img" src={image7} alt=""/></div>
        </div>
        <div className="scroll-text global-width">
          <div className="step">
            <p>
              안녕하세요. <br/><br/>
              테스트 대회입니다.<br/>
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
              사회적 거리두기를 위해 한적한 바닷길쪽으로 러닝을 한다.<br/>가끔 만나는 바닷새와 눈인사를 나눈다.
            </p>
          </div>
          <div className="step">
            <p>
              맞다, 트위터의 걔.
            </p>
          </div>
          <div className="step">
            <p>
              운동을 마치고 집에 돌아와 작업을 시작한다.
            </p>
          </div>
          <div className="step">
            <p>
              밥은 집에서 먹거나, 테이크아웃이 가능한 메뉴를 골라 탁 트인 야외에서 먹는다. 물론 사회적 거리두기를 하기 위함이다.
            </p>
          </div>
          <div className="step">
            <p>
              보통 오후 작업은 집 근처의 일하기 좋은 카페에서 해왔지만, 코로나19 이후에는 집에서 하는 날이 많아졌다.
            </p>
          </div>
          <div className="step">
            <p>
              라면 매니아 답게 유튜브로 채널을 보며 간식으로 라면을 먹는다.
            </p>
          </div>
        </div>
      </section>
      <section className="normal-content global-width">
        아래 버튼을 눌러 대회를 시작하실 수 있습니다!
      </section>
      <Link to="/problem" css={nextLink}>다음</Link>
    </AppLayout>
  );
}

export default GuidePage;