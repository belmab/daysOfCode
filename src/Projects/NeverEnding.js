import React, { useState, useEffect } from 'react';
import Title from '../Components/Title';
import Navbar from '../Components/Navbar';
import '../style.css';

export default function NeverEnding() {
  const [words, setWords] = useState('');
  return (
    <div>
      <Title />
      <Navbar />
      <h1 className="padding-space ">Write your story</h1>
      <input
        className="margin-space"
        placeholder={'It all began with...'}
        value={words}
        onChange={(e) => setWords(e.target.value)}
      ></input>
      <div>{words}</div>
    </div>
  );
}
