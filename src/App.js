import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Car from './Car';
import Headline from './Headline';
import FlexWrapper from './FlexWrapper';

const HEADERTITLE = "Elbilvelgeren";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Headline>{HEADERTITLE}</Headline>
        </div>
        <FlexWrapper>
          <Car />
        </FlexWrapper>
      </div>
    );
  }
}

export default App;
