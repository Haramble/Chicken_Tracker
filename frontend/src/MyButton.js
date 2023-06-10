import React from 'react';
import './Test.css';

function MyButton({ handleDraw }) {
  return (
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
  );
}

export default MyButton;
