import React, { useState } from 'react';
import Header from './Header';
import ResultBox from './ResultBox';
import MyButton from './MyButton';
import Footer from './Footer';

function App() {
  const [results, setResults] = useState([]);
  const [hoveredResult, setHoveredResult] = useState(null);

  const handleDraw = (numDraws) => {
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

  const handleMouseEnter = (result) => {
    setHoveredResult(result);
  };

  const handleMouseLeave = () => {
    setHoveredResult(null);
  };

  return (
    <div>
      <Header />
      <main className="main-content">
        <ResultBox
          results={results}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          hoveredResult={hoveredResult} 
        />
        <MyButton handleDraw={handleDraw} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
