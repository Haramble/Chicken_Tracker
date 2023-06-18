import React, { useState } from 'react';

function RightBox({ handleDraw , drawCount , gradeCounts, total}) {

    const { three,four,five } = gradeCounts;
    const fivePer = drawCount > 0 ? (five / drawCount) * 100 : 0;
    const fourPer = drawCount > 0 ? (four / drawCount) * 100 : 0;
    const threePer = drawCount > 0 ? (three / drawCount) * 100 : 0;
    const fiveFix = fivePer.toFixed(4);
    const fourFix = fourPer.toFixed(4);
    const threeFix = threePer.toFixed(4);

    return (
        <div class="right-box">

            <div class="ceiling">
                천장게이지
            </div>

            <div class="inner-box">
                <div class="data-area">
                    <div class="box1">연차 횟수<div>{drawCount}</div></div>
                    <div class="box2">5성<div>{gradeCounts.five}</div><div>{fiveFix}%</div></div>
                    <div class="box3">4성<div>{gradeCounts.four}</div><div>{fourFix}%</div></div>
                    <div class="box4">3성<div>{gradeCounts.three}</div><div>{threeFix}%</div></div>
                    <div class="box5">소모한 원석<div>{total}개</div></div>
                </div>

                <div class="right-inner-box2">
                </div>
                <div>
                    <button className="button1" onClick={() => handleDraw(1)}>
                        1회뽑기
                    </button>
                    <button className="button10" onClick={() => handleDraw(10)}>
                        10회뽑기
                    </button>
                </div>
            </div>
        </div>
    );

}

export default RightBox;