import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let posts = [
  {post : 'Hi, how are you', countLike: 13}, 
  {post : 'it my first post', countLike: 45},
  {post : 'Hi', countLike: 13}, ]

  let name = [
    { name: "Andrey" },
    { name: "Sasha" },
    { name: "Nasty" },
    { name: "Stasya" },
    { name: "Cola" },
  ];
  
  let message = [
    { message: "Hi" },
    { message: "How are yo?" },
    { message: "eah" },
    { messages: "Yo" },
    { message: "REEEEEE" },
  ];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} name={name} message={message} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
