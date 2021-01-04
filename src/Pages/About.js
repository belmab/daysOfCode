import React from 'react';
import Title from '../Components/Title';
import Navbar from '../Components/Navbar';

function About() {
  return (
    <div>
      <Title />
      <Navbar />
      <h2 style={{ padding: '1rem' }}>About Days of Code</h2>
      <p style={{ lineHeight: '1.3' }}>
        This is a personal project on my ✨ Coding Path ✨.
        <br />
        I have two goals.⬇️
        <br />
        ☝️ I want to , advance my coding skills, mainly Javascript including its
        Frameworks.
        <br />
        ✌️ I want to show my projects.
      </p>
    </div>
  );
}

export default About;
