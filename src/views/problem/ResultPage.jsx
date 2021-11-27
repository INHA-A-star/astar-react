import React, { useRef, useState } from 'react';
import MainContentLayout from '../../components/common/MainContentLayout';
import { fetchScenarios } from '../../api/scenario';
import TestcaseResult from '../../components/problem/TestcaseResult';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import styled from '@emotion/styled';

const Form = styled.form`
  text-align: center;
  .token {
    position: relative;
    z-index: 1;
    margin: 1.5rem auto;
    width: 65%;

    .token__description {
      position: absolute;
      top: 50%;
      left: 0.5rem;
      padding: 0.3rem;
      transform: translateY(-50%);
      z-index: -1;
      background-color: white;
      color: #c2c0c0;
      
      transition: all 300ms ease-in;
    }
  }

  label {
    font-size: 1.2rem;
  }

  input {
    width: 100%;
    height: 50px;
    border: 1px solid darkgrey;
    background-color: transparent;
    z-index: 10;

    :focus {
      outline: none;
    }
  }


  button {
    background-color: lightsteelblue;
    border: 0;
    border-radius: 5px;
    padding: 0.7rem 1rem;
    color: white;

    transition: all 300ms ease-in;

    :hover {
      font-weight: bold;
      background-color: cornflowerblue;
    }
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.8rem;
`;

function ResultPage() {
  const [testcaseResults, setTestcaseResults] = useState(null);
  const [authKey, setAuthKey] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onAuthChange = (e) => {
    setAuthKey(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    async function getScenarios() {
      console.log(authKey);
      try {
        if (authKey) {
          const response = await fetchScenarios(authKey);
          console.log(response);
          const data = response.data;
          if (Array.isArray(data) && data[0].situations) {
            console.log(data);
            setTestcaseResults(data);
            setIsAuth(true);
          } else {
            setErrorMessage('토큰 정보를 확인해주세요!')
          }
        }
      } catch (err) {
        console.log(err);
        setErrorMessage('토큰 정보를 확인해주세요!');
      } finally {
        setIsLoading(false);
      }
    }
    getScenarios();
  };

  const onInputFocus = () => {
    const descElem = document.querySelector('.token__description');
    descElem.style.fontSize = '0.7rem';
    descElem.style.color = 'black';
    descElem.style.top = '0.1rem';
    descElem.style.zIndex = 10;
  };

  const onInputBlur = (e) => {
    if (e.target.value) {
      return;
    }
    const descElem = document.querySelector('.token__description');
    descElem.style.fontSize = '1rem';
    descElem.style.color = '#c2c0c0';
    descElem.style.top = '50%';
    descElem.style.zIndex = -1;
  };

  if (!isAuth) {
    return (
      <MainContentLayout title="결과" emoji="📊">
        {
          isLoading
            ? <LoadingSpinner/>
            : <Form onSubmit={onSubmitForm}>
              <label htmlFor="auth">✍🏻 Start API를 통해 받은 AuthorizationToken를 입력해주세요.</label><br/>
              <div className="token">
                <p className="token__description">AuthorizationToken</p>
                <input id="auth" type="text" value={authKey} onChange={onAuthChange} onFocus={onInputFocus} onBlur={onInputBlur}/><br/>
              </div>
              <Error>{errorMessage}</Error>
              <button type="submit">결과 확인</button>
            </Form>
        }
      </MainContentLayout>
    );
  }

  return (
    <MainContentLayout title="결과" emoji="📊">
      {testcaseResults && <p>테스트 케이스 별로 결과를 확인해보세요!</p>}
      {
        testcaseResults
          ? testcaseResults.map((result, index) =>
            <TestcaseResult key={index}
                            result={result.situations}
                            status={result.status}
                            index={index}
            />
          )
          : <LoadingSpinner/>
      }
    </MainContentLayout>
  );
}

export default ResultPage;