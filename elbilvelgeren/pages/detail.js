import React, { Component } from 'react';
import Navbar from "../Components/Navbar";
import elbiler from '../elbiler.json';
import Fade from 'react-reveal/Fade';
import CarCard from "../Components/CarCard";
import styled from '@emotion/styled';

const Appwrapper = styled.div`
background: none;
padding: 0;
margin:  60px 0 100px 0;    
text-align: center;

 a {
   color: #fff;
 }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elbilId: "23"
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let url = window.location.href
    let query = url.split("=")
    let queryId = Number(query[1])
    // Setting elbilId state to the id from Params
    this.setState({elbilId: queryId});
  }

  render() {
    // Filtering out all the Cars that does not match the id 
    const elbilDetail = elbiler.filter (elbil => elbil.id === this.state.elbilId)
    // Mapping the id that remains after filtering
    const elBiler = elbilDetail.map(elbil => 
      
      <Fade>
   

        <CarCard 
          merke={elbil.modell} 
          modell={elbil.merke}  
          rekkevidde={elbil.rekkevidde} 
          pris={elbil.pris} 
          bildeURL={elbil.bildeURL}
          type={elbil.type}
          id={elbil.id}
      />

        <h1>{elbil.merke} {elbil.modell} {elbil.type}</h1>
        <h3>Pris: {elbil.pris} ,-</h3>
        <h3>Sitteplasser: {elbil.sitteplasser}</h3>

        <h3>Tester:</h3>
        <a href={elbil.tester} target="_blank">{elbil.tester}</a>

      </Fade>
      );

    return (
      <Appwrapper>
        <Navbar />
        {elBiler}
      </Appwrapper>
    );
  }
}

export default App;
