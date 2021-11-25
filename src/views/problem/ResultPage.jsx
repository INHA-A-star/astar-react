import React, { useState } from 'react';
import MainContentLayout from '../../components/common/MainContentLayout';
import { fetchScenarios } from '../../api/scenario';
import TestcaseResult from '../../components/problem/TestcaseResult';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import styled from '@emotion/styled';

const Form = styled.form`
  label {
    font-size: 1.2rem;
  }
  
  input {
    width: 70%;
    height: 30px;
    margin: 1rem 0;
    
    :focus {
      outline: none;
    }
  }
  
  button {
    padding: 0.5rem;
    background-color: lightsteelblue;
    border: 0;
    border-radius: 5px;
    
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
          console.log(data);
          setTestcaseResults(data);
          setIsAuth(true);
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

  if (!isAuth) {
    return (
      <MainContentLayout title="결과" emoji="📊">
        {
          isLoading
            ? <LoadingSpinner/>
            : <Form onSubmit={onSubmitForm}>
              <label htmlFor="auth">✍🏻 START API를 통해 받은 auth-key를 입력해주세요.</label><br/>
              <input id="auth" type="text" value={authKey} onChange={onAuthChange} placeholder="토큰 정보를 입력해주세요!"/><br/>
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