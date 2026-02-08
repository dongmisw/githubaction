import React from 'react';
import './App.css';

function App() {
  // 강의 시나리오:
  // 1. 처음엔 version을 "v1.0"으로 배포
  // 2. 배포 성공 확인 후, "v2.0 (Updated!)"으로 코드 수정 후 Push -> 자동 배포 확인
  const version = "v1.0"; 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <header>
        <h1>🚀 GitHub Actions + S3 배포 실습</h1>
        
        <div style={{ 
          padding: '20px', 
          border: '2px solid #61dafb', 
          borderRadius: '10px',
          display: 'inline-block'
        }}>
          <h2>Current Version</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#20232a' }}>
            {version}
          </p>
        </div>

        <p>
          이 화면이 보인다면 <strong>CI/CD 파이프라인</strong>이 성공적으로 작동한 것입니다.
        </p>
      </header>
    </div>
  );
}

export default App;