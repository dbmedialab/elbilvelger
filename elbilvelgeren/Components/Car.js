import React from "react";
import CarCard from "../Components/CarCard";
import Fade from 'react-reveal/Fade';
import elbiler from '../elbiler.json';
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
      elbilDefault: [...elbiler],
      orderByRange: 'asc',
      orderByPrice: 'asc'
    };
  }

  // Have to change from string to number  in json for it to work
  sortBySize = () => {
    let elbilerSize = [...this.state.elbiler]
    elbilerSize.sort(function(a, b) {
      return a.storelse - b.storelse
    })

    this.setState({elbiler: elbilerSize})

  }

  sortByRange = () => {
    let elbilerCopy = [...this.state.elbiler]
    elbilerCopy.sort(function(a, b) {
      return a.rekkevidde - b.rekkevidde;
    })

    if(this.state.orderByRange === "desc") {
      elbilerCopy.reverse() 
    }
    
    this.setState({elbiler: elbilerCopy});
  }

  sortByPrice = () => {
    let elbilerCopy = [...this.state.elbiler]
    elbilerCopy.sort(function(a, b) {
      return a.pris - b.pris
    })

    if(this.state.orderByPrice === "desc") {
      elbilerCopy.reverse() 
    }

    this.setState({elbiler: elbilerCopy});
  }

  reset = () =>{
    this.setState({elbiler: this.state.elbilDefault});
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
          id={elbil.id}
      /> 
    </Fade>
    );

    return (
      <FlexWrapper>
        {elBiler}
        <Footer>
          <Footerinner>
              <button onClick={() => {
                this.setState({
                  orderByRange: (this.state.orderByRange === 'asc' ? 'desc' : 'asc')
                }, () => {
                  this.sortByRange();
                })
              }}>
                Rekkevidde
              </button>
              <button onClick={() => {
                this.setState({
                  orderByPrice: (this.state.orderByPrice === 'asc' ? 'desc' : 'asc')
                }, () => {
                  this.sortByPrice();
                })
              }}>Pris</button>
               <button onClick={this.sortBySize}>Størrelse</button>
              <button onClick={this.reset}>Tilbakestill</button>
          </Footerinner>
        </Footer>
      </FlexWrapper>
    );
  }
}

export default Car;
