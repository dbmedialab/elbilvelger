import React from "react";
import CarCard from "../Components/CarCard";
import elbiler from '../elbiler.json';
import Fade from 'react-reveal/Fade';
import FlexWrapper from '../Components/FlexWrapper';
import styled from '@emotion/styled';

const Footer = styled.footer`
    position: fixed;
    display: flex;
    width: 100vw;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    bottom: 0;
    left: 0;
    height: 50px;
    background: #fff;        
`

const Footerinner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      elbiler: elbiler,
      elbilDefault: [...elbiler]
    };

    //this.reset = this.reset.bind(this);
  }

  sortByRange = (index) => {
    let filterCopy = [...this.state.elbiler]
    filterCopy.sort(function(a, b) {
      return a.rekkevidde - b.rekkevidde;
    })

    this.setState({elbiler: filterCopy});
  }

  sortByPrice = (index) => {
    let filterCopy = [...this.state.elbiler]
    filterCopy.sort(function(a, b) {
      return a.pris - b.pris;
    })

    this.setState({elbiler: filterCopy});
  }

  reset = () =>{
    let elbilDefault = [...this.state.elbilDefault]
    this.setState({elbiler: elbilDefault});
  }

  render() {
    const elBiler = this.state.elbiler.map(elbil => 

    <Fade>
      <CarCard 
          merke={elbil.modell} 
          modell={elbil.merke}  
          rekkevidde={elbil.rekkevidde} 
          pris={elbil.pris} 
          bildeURL={elbil.bildeURL}
          type={elbil.type}
      /> 
    </Fade>
    );

    return (
      <FlexWrapper>
        {elBiler}
        <Footer>
          <Footerinner>
              <button onClick={this.sortByRange}>Sort by Range</button>
              <button onClick={this.sortByPrice}>Sort by Price</button>
              <button onClick={this.reset}>Reset</button>
          </Footerinner>
        </Footer>
      </FlexWrapper>
    );
  }
}

export default Car;
