import React, { useEffect, useState } from 'react';
import MainContentLayout from '../../components/common/MainContentLayout';
import { saveAuthToCookie, deleteAuthToCookie } from '../../utils/cookies';
import { fetchScenarios } from '../../api/scenario';
import TestcaseResult from '../../components/problem/TestcaseResult';
import LoadingSpinner from '../../components/common/LoadingSpinner';

function ResultPage() {
  const [testcaseResults, setTestcaseResults] = useState(null);

  // 테스트용 쿠키
  useEffect(() => {
    saveAuthToCookie('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aWQiOiI1N2FmZTAwMS03Zjk3LTRhYWYtYTI3Yy03ZDMxM2IwMGRkZmQiLCJpZCI6NTgsInVpZCI6IjgwOGJjYTI1LWNjNWItNDA4ZS1iOTg0LWMyOWZjMjZiN2ZhOSIsImV4cCI6MTY2NjEwNjc0Ni41OTI2NjYxfQ.39Tb6gZpMWl4c5aboPrVWDgduBijJ3DsoF1CrlEpxXs');

    return () => {
      deleteAuthToCookie('Authorization');
    };
  }, []);

  useEffect(() => {
    async function getScenarios() {
      try {
        const {data} = await fetchScenarios();
        console.log(data);
        setTestcaseResults(data);
      } catch (err) {
        console.log(err);
      }
    }
    getScenarios();
  }, []);


  return (
    <MainContentLayout title="📊 결과">
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