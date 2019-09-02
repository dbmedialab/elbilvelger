import React from "react";
import CarCard from "../Components/CarCard";
import elbiler from '../elbiler.json';
import Fade from 'react-reveal/Fade';
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
    
    button{
      background: none; 
      border: none;
      margin: .5rem;
    }
`

const FlexWrapper = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: .5rem;
    padding-bottom: 3rem;
    align-content: center;
    align-items: center;
    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    .react-reveal{
      width: 100%;
      @media (min-width: 600px) {
        width: 30vw;
        margin: 1rem;
      }
  }`

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      elbiler: elbiler,
      elbilDefault: [...elbiler]
    };
  }

  sortByRange = (index) => {
    let filterCopy = [...this.state.elbilDefault]
    filterCopy.sort(function(a, b) {
      return a.rekkevidde - b.rekkevidde;
    })
    
    this.setState({elbiler: filterCopy});
    filterCopy.reverse() 
  }

  sortByPrice = (index) => {
    let filterCopy = [...this.state.elbilDefault]
    filterCopy.sort(function(a, b) {
      return a.pris - b.pris
    })

    this.setState({elbiler: filterCopy.reverse()});

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
              <button onClick={this.sortByRange}>Rekkevidde</button>
              <button onClick={this.sortByPrice}>Pris</button>
              <button onClick={this.reset}>Tilbakestill</button>
          </Footerinner>
        </Footer>
      </FlexWrapper>
    );
  }
}

export default Car;
