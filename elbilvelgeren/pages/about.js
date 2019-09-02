import React, { Component } from 'react';
import Car from '../Components/Car';
import Navbar from "../Components/Navbar";

import styled from '@emotion/styled';
import { Global, css } from '@emotion/core'

const Appwrapper = styled.div`
    background: none;
    padding: 0;
    margin:  60px 0 100px 0;    
    text-align: center;
    font-family: 'barlow', 'helvetica', sans-serif;
`

class App extends Component {
  render() {
    return (
      <Appwrapper>
        <Navbar />
        <Car />
      </Appwrapper>
    );
  }
}

export default App;
