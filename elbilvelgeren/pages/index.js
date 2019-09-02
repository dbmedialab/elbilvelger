import React, { Component } from 'react';
import Car from '../Components/Car';
import Navbar from "../Components/Navbar";

import styled from '@emotion/styled';
import { Global } from '@emotion/core'



const Appwrapper = styled.div`
    background: none;
    padding: 0;
    margin:  60px 0 0 0;    
    text-align: center;
    font-family: 'barlow', 'helvetica', sans-serif;
`

class App extends Component {
  render() {
    return (
      <Appwrapper>
        <Global
            styles={{
              'body, html': {
                margin: 0,
                padding: ".1rem",
                background: "#2d2d2d"
              }
            }}
        />
        <Navbar />
        <Car />
      </Appwrapper>
    );
  }
}

export default App;
