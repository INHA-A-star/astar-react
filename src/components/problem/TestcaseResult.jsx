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

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
`;

function TestcaseResult({result, index}) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const toggleTestcase = () => {
    setIsOpen(prev => !prev);
  };

  const showPuzzleProcess = (e) => {
    setStep(e.target.value);
  };

  const isSuccess = () => {
    const lastPuzzle = result[result.length - 1].puzzle;
    const answer = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (lastPuzzle[i][j] !== answer[i][j]) {
          return false;
        }
      }
    }

    return true;
  };

  return (
    <div>
      <div onClick={toggleTestcase}>
        <Title>{index}번 테스트 케이스&nbsp;</Title>
        {
          isOpen
            ? <span><i className="fas fa-sort-up"></i></span>
            : <span><i className="fas fa-sort-down"></i></span>
        }
      </div>
      <TestcaseContainer isOpen={isOpen}>
        {
          isSuccess()
            ? <TestcaseResultContent title="정답입니다 😄"/>
            : <TestcaseResultContent title="오답입니다 😓"/>
        }
        <div>
          <Puzzle puzzle={result[step].puzzle}/>
          <Input type="range" value={step} min="0" max={result.length - 1} onChange={showPuzzleProcess}/>
          {result.length <= 1 && <ErrorMessage>정답을 제출한 후 확인해보세요!</ErrorMessage>}
        </div>
      </TestcaseContainer>
    </div>
  );
}

export default TestcaseResult;