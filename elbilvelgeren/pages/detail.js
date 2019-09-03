import React, { Component } from 'react';
import Navbar from "../Components/Navbar";
import elbiler from '../elbiler.json';
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
  constructor(props) {
    super(props);

    this.state = { 
      elbilId: null
    };
  }

  componentDidMount() {
    let url = window.location.href
    let query = url.split("=")
    let queryId = query[1]
    debugger
    // Setting elbilId state to the id from Params
    this.setState({elbilId: queryId})
   
  }

  render() {
    // Filtering out all the Cars that does not match the id 
    const elbilDetail = elbiler.filter (elbil => elbil.id === 1)
    // Mapping the id that remains after filtering
    const elBiler = elbilDetail.map(elbil => 
      
      <Fade>
        <img src="´/static/img/${elbil.bildeURL}´" />
        <h1>{elbil.merke}</h1>
        <p>{elbil.tester}</p>
        <p>{elbil.pris}</p>
        <p>{elbil.storelse}</p>
        <p>{elbil.sitteplasser}</p>
        
      </Fade>
      );

    return (
      <Appwrapper>
        <Navbar />
        <h1>Hei Detail </h1>
        {elBiler}
      </Appwrapper>
    );
  }
}

export default App;
