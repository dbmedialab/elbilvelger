import React from "react";
import CarCard from "../Components/CarCard";
import elbiler from '../elbiler.json';
import "../Css/Footer.css";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';


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
    console.log(this.state.elbilDefault);
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
      <div>
        {elBiler}
        <div className="Footer">
          <div className="Footer-inner">
              <button onClick={this.sortByRange}>Sort by Range</button>
              <button onClick={this.sortByPrice}>Sort by Price</button>
              <button onClick={this.reset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
