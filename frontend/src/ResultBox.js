import React from 'react';
import './ResultBox.css';

const ResultBox = ({ results, handleMouseEnter, handleMouseLeave, hoveredResult }) => {
  return (
    <div className="result-container">
      <div className="result-grid">
        {results.map((result, index) => (
          <div
            key={index}
            className={`result-item ${result.grade}`}
            onMouseEnter={() => handleMouseEnter(result)}
            onMouseLeave={handleMouseLeave}
          >
            {result.grade}
          </div>
        ))}
      </div>
      {hoveredResult && (
        <div className="result-tooltip">
          <p>등급: {hoveredResult.grade}</p>
          <p>이름: {hoveredResult.name}</p>
          <p>설명: {hoveredResult.description}</p>
        </div>
      )}
    </div>
  );
};

export default ResultBox;
