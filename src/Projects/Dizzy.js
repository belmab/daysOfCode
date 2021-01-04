import React from 'react';
import Title from '../Components/Title';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaGrimace } from 'react-icons/fa';
import '../style.css';
import { StyledSubtitle } from '../Styled/StyledSubtitle';

const snowSize = {
  fontSize: '3rem',
};
const paddingTop = {
  paddingTop: '2rem',
};

function Dizzy() {
  return (
    <div>
      <Title />
      <Navbar />
      <StyledSubtitle>I feel dizzy</StyledSubtitle>

      <div className="project-container">
        <FaGrimace style={snowSize} className="rotate anti-rotate" />
        <div style={paddingTop}>
          <button>Dizzzzzy</button>
        </div>
      </div>
    </div>
  );
}

export default Dizzy;
