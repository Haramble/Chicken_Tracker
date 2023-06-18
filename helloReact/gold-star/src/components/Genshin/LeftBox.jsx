import React from "react";

function LeftBox({ pickResult, handleMouseEnter, handleMouseLeave, hoveredResult }) {
    return (
        <div class="left-box">
            <div class="inner-box">
                뽑기 결과
                <div class="left-inner-box2">
                    <div className="result-container">
                        <div className="result-grid">
                            {pickResult.map((pickResult, index) => (
                                <div
                                    key={index}
                                    className={`result-item ${pickResult.grade}`}
                                    onMouseEnter={() => handleMouseEnter(pickResult)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {pickResult.grade}
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