import React, { Component } from 'react';
import AllCars from '../Components/AllCars';
import Navbar from "../Components/Navbar";
import FlexWrapper from "../Components/FlexWrapper";

class App extends Component {
  render() {
    return (
        <FlexWrapper>
          <Navbar />
          <AllCars />
        </FlexWrapper>
    );
  }
}

export default App;

