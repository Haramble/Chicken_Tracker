import React from "react";
import LeftBox from "./LeftBox";

function Body() {
    return (
        <main class="main-content">
          <LeftBox/>

    <div class="right-box">
      
      <div class="ceiling">
          천장게이지
      </div>
      
      <div class="inner-box">
        <div class="data-area">  
          <div class="box1">연차 횟수</div>
          <div class="box2">5성</div>
          <div class="box3">4성</div>
          <div class="box4">3성</div>
          <div class="box5">소모한 원석</div>
        </div>

        <div class="right-inner-box2">
        
        </div>
        
      </div>
    </div>
  </main>
    );
}

export default Body;
