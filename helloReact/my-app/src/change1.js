import React from 'react';
import ReactDOM from 'react-dom/client';
import Subject from './App';
import reportWebVitals from './reportWebVitals';

const change = ReactDOM.createRoot(document.getElementById('change'));
change.render(
  <React.StrictMode>
    <Subject />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
