import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import React,{useState} from 'react';

const Home = () => {
  const [userInput,setUserInput] = useState('');
  const onUserChangedText = (event) =>{
    console.log(event.target.value);
    setUserInput(event.target.value);
  }
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>GTP文章生成器</h1>
          </div>
          <div className="header-subtitle">
            <h2>输入文章的标题</h2>
          </div>
        </div>
        {
          <div className="prompt-container">
          <textarea
            placeholder="写点什么吧"
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
          />
          <div className="prompt-buttons">
            <a className="generate-button" onClick={onUserChangedText}>
              <div className="generate">
                <p>Generate</p>
              </div>
            </a>
          </div>
        </div>
        }
        {/* <div className="prompt-container">
          <textarea placeholder="start typing here" className="prompt-box" />
        </div> */}
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
