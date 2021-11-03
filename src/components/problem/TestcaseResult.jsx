import React, { useState } from 'react';
import TestcaseResultContent from './TestcaseResultContent';
import TestcaseContainer from './TestcaseContainer';
import Puzzle from './Puzzle';
import styled from '@emotion/styled';

const Title = styled.h2`
  display: inline-block;
  color: slategrey;
  font-size: 1.3rem;
  margin: 1rem 0;
`;

const Input = styled.input`
  display: block;
  width: 100%;
`;

function TestcaseResult({result, status, index}) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const toggleTestcase = () => {
    setIsOpen(prev => !prev);
  };

  const showPuzzleProcess = (e) => {
    setStep(e.target.value);
  };

  return (
    <div>
      <div onClick={toggleTestcase}>
        <Title>{index + 1}번 테스트 케이스&nbsp;</Title>
        {
          isOpen
            ? <span><i className="fas fa-sort-up"></i></span>
            : <span><i className="fas fa-sort-down"></i></span>
        }
      </div>
      <TestcaseContainer isOpen={isOpen}>
        {
          status !== 'failed'
            ? <TestcaseResultContent title="정답입니다 😄"
                                     content="score: 1425"/>
            : <TestcaseResultContent title="오답입니다 😓"
                                     content="퍼즐 경계를 벗어나는 명령이 포함되어 있습니다."
            />
        }
        <div>
          <Puzzle puzzle={result[step].puzzle}/>
          <Input type="range" value={step} min="0" max={result.length - 1} onChange={showPuzzleProcess}/>
        </div>
      </TestcaseContainer>
    </div>
  );
}

export default TestcaseResult;