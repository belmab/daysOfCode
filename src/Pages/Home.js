import React from 'react';
import Title from '../Components/Title';
import Navbar from '../Components/Navbar';
import Grid from '../Grid';
import '../style.css';
import { WelcomeMsg } from '../Styled/WelcomeMsg';

function Home() {
  const author = 'Belma Besirevic';
  return (
    <div>
      <Title />
      <Navbar />
      <WelcomeMsg>
        Welcome to this Page of Coding Projects by {author}
      </WelcomeMsg>
      <Grid />
    </div>
  );
}

export default Home;
