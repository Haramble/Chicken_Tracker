import React, { useState } from 'react';
import './Test.css';

function App() {

  const [results, setResults] = useState([]);  //db에서 조회한 뽑기카드 값 상태관리
  const [hoveredResult, setHoveredResult] = useState(null); //마우스 올렸을시 정보창 데이터 관리
  const [resultCount,setResultCount] = useState([]);

  const handleDraw = (numDraws) => { //각각 반복문을 통해서 resultObject란 배열에 등급,이름,설명글을 달고 다시 상태관리에 넣어줌
    const newResults = [];
    
    for (let i = 0; i < numDraws; i++) { //나중에 db에서 조회된정보값을 반복문을 돌면서 뿌려줌
      const resultObject = {
        grade: generateGrade(),
        name: generateName(),
        description: generateDescription(),
      };
      
      newResults.push(resultObject);
    }

    setResults(newResults);
  };

  const generateGrade = () => {  //테스트용 
    const grades = ['three', 'four', 'five'];
    const randomIndex = Math.floor(Math.random() * grades.length);
    console.log(randomIndex); 
    return grades[randomIndex];
  };

  const generateName = () => {
    const names = ['쓰레기', '평타', '당첨'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const generateDescription = () => {
    const descriptions = ['3코입니다', '4코입니다', '5코입니다'];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
  };

  const handleMouseEnter = (result) => { //마우스를 올릴시 숨겨진 창에 값을 불러옴
    setHoveredResult(result);
  };

  const handleMouseLeave = () => { //마우스를 뗄시 null로 값초기화해서 안나오게 해줌
    setHoveredResult(null);
  };


  const [intervalId, setIntervalId] = useState(null); //5성뽑을때까지 뽑을때까지 나오게할시 멈추게할 조건으로 쓸 상태값

  const startInterval = () => {
    const id = setInterval(() => {
      handleDraw(10); // 매 0.2초마다 handleDraw 함수를 실행
    }, 200);
    setIntervalId(id);
  };

  const stopInterval = () => { //나중에 조건으로 타겟값 나올시 멈추게할것
    clearInterval(intervalId);
    setIntervalId(null);
  };




  return (
    <div>
      <header>
        <img className="logo" src="channels4_profile.jpg" alt="로고 이미지" />
        <h1>장현우죽이고싶다.</h1>
      </header>

      <main className="main-content">
        <div className="left-box">
          <div className="inner-box">
            뽑기 결과
            <div className="left-inner-box2">
            <div className="draw-site-container">
            
          

      <div className="result-container">
        <div className="result-grid">
          {results.map((result, index) => ( // 반복문으로 결과창에 그려줌
            <div
              key={index}
              className={`result-item ${result.grade}`}  // 각각 등급에 따라 테두리색깔을 위해 클래스명을 정해줌
              onMouseEnter={() => handleMouseEnter(result)}
              onMouseLeave={handleMouseLeave}
            >
            {result.grade}
            </div>
          ))}
        </div>
        {hoveredResult && (
          <div className="result-tooltip">
            {<p>등급: {hoveredResult.grade}</p>    /*hoveredResult에 들어있는 각각의 값을 불러와줌 && 조건을 줌으로써 null일때는 안나오게함 */}
            <p>이름: {hoveredResult.name}</p>
            <p>설명: {hoveredResult.description}</p>
          </div>
        )}
      </div>
    </div>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="inner-box">
            <div className="ceiling">
              천장게이지
            </div>

            <div className="right-inner-box2">
              NO RECORD
            </div>

            <button className="button1" onClick={() => handleDraw(1)}>
              1회뽑기
            </button>

            <button className="button10" onClick={() => handleDraw(10)}>
              10회뽑기
            </button>
          </div>
        </div>
      </main>

      <footer>
        <p>저작권 정보 등</p>
      </footer>
    </div>
  );
}

export default App;
