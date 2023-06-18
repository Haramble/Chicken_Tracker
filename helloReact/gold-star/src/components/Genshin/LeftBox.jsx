import React from "react";

function LeftBox({ results, handleMouseEnter, handleMouseLeave, hoveredResult }) {
    return (
        <div class="left-box">
            <div class="inner-box">
                뽑기 결과
                <div class="left-inner-box2">
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
                </div>
            </div>
        </div>
    );
}

export default LeftBox;