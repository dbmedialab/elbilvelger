import React, { Component } from 'react';
import Car from './Components/Car';
import FlexWrapper from './Components/FlexWrapper';
import Navbar from "./Components/Navbar";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FlexWrapper>
          <Car />
        </FlexWrapper>
      </div>
    );
  }
}

export default App;
