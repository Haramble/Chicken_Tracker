import React, { useState } from 'react';
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function Body() {
  const [results, setResults] = useState([]);
  const [hoveredResult, setHoveredResult] = useState(null);
  const [drawCount, setDrawCount] = useState(0);
  const [gradeCounts, setGradeCounts] = useState({ three: 0, four: 0, five: 0 });
  const [total,setTotal] = useState(0);
  

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
    }

    setResults(newResults);
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

  const handleMouseEnter = (result) => {
    setHoveredResult(result);
  };

  const handleMouseLeave = () => {
    setHoveredResult(null);
  };

  return (
    <main className="main-content">
      <LeftBox
        results={results}
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
