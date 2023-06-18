import React, { useState } from 'react';
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import axios from 'axios';

function Body() {
  const [pickResult, setPickResult] = useState([]);
  const [hoveredResult, setHoveredResult] = useState(null);
  const [drawCount, setDrawCount] = useState(0);
  const [gradeCounts, setGradeCounts] = useState({ three: 0, four: 0, five: 0 });
  const [total,setTotal] = useState(0);
  
  // test용
  const [cnt, setCnt] = useState(0);
  async function testtt() {
      const { data } = await axios.get(
        `http://localhost:3001/genshine`,
        {
          params: {
            count: cnt
          }
        });
      console.log(data);
      setCnt(cnt + 1);
      console.log(cnt);
  }

  const handleDraw = (numDraws) => {
    setDrawCount((prevCount) => prevCount + numDraws);
    setTotal((prevCount) => prevCount + (numDraws * 180));
    const newResults = [];
    for (let i = 0; i < numDraws; i++) {
      const resultObject = {
        grade: generateGrade(),
        name: generateName(),
        description: generateDescription(),
      };

      newResults.push(resultObject);
      testtt();
    }

    setPickResult(newResults);
  };

  const generateGrade = () => {
    const grades = ['three', 'four', 'five'];
    const randomIndex = Math.floor(Math.random() * grades.length);
    const grade = grades[randomIndex];

    setGradeCounts((prevCounts) => ({
      ...prevCounts,
      [grade]: prevCounts[grade] + 1,
    }));

    return grade;
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

  const handleMouseEnter = (pickResult) => {
    setHoveredResult(pickResult);
  };

  const handleMouseLeave = () => {
    setHoveredResult(null);
  };

  return (
    <main className="main-content">
      <LeftBox
        pickResult={pickResult}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        hoveredResult={hoveredResult}
      />
      <RightBox
        handleDraw={handleDraw}
        drawCount={drawCount}
        gradeCounts={gradeCounts}
        total = {total}
      />
    </main>
  );
}

export default Body;
