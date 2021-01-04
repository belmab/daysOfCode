import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Grid from './Grid';
import Footer from './Components/Footer';
import Dizzy from './Projects/Dizzy';
import NeverEnding from './Projects/NeverEnding';
import { Container } from './Styled/Container';
import { GlobalStyle } from './Styled/Global';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/dizzy" component={Dizzy}></Route>
        <Route exact path="/story" component={NeverEnding}></Route>
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
