import '../app.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
  background-color: #B2E6D4;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 16px;
}

:is(h1, h2, h3, h4, h5, h6) {
  font-family: 'Press Start 2P', cursive;
}

/* Media queries  */
@media (min-width: 767px) {
    p {font-size: 1.3rem;}
  }

`;
