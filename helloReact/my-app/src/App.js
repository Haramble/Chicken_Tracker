import Subject from './components/subject';
import React, {useState} from 'react';
import Hello from './components/Hello';
import Counter from './components/Counter';
import axios from 'axios';

function App() {
  const [testText, setTestText] = useState(null);
  const [cnt, setCnt] = useState(0);

  async function testtt() {
      const { data } = await axios.get(
        `http://localhost:3001/testurl`,
        {
          params: {
            count: cnt
          }
        });
      console.log(data);
      setCnt(cnt + 1);
      console.log(cnt);
      setTestText(data);
  }

  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <div className="App">
      Hello, React!!
      <Subject testFunc={testtt} testText={testText} />
      <>
        <div style={style}>{name}</div>
      </>
      <div>
        <Hello name="react" testProps="testtttt" testText={testText}></Hello>
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
