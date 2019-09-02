import React, { Component } from 'react';
import Navbar from "../Components/Navbar";
import elbiler from '../elbiler.json';
import CarCard from "../Components/CarCard";
import Fade from 'react-reveal/Fade';

import styled from '@emotion/styled';

const Appwrapper = styled.div`
    background: none;
    padding: 0;
    margin:  60px 0 100px 0;    
    text-align: center;
    font-family: 'barlow', 'helvetica', sans-serif;
`

class App extends Component {
  static getInitialProps({query}) {
    console.log({query})
    return {query}
  }

  render() {
    var elbil = elbiler.find(function(elbil) {
      return elbil === 10;
    });

    return (
      <Appwrapper>
        <Navbar />
        <h1>Hei Detail</h1>
        {elbil}
      </Appwrapper>
    );
  }
}

export default App;
