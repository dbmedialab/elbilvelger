import React from "react";
import CarCard from "./CarCard";
import axios from "axios";

class Car extends React.Component {
    state = {
      elbiler: []
  }

  // Getting data from after first render
  componentDidMount() {
    axios.get("elbier.json")
    .then(response => {
        this.setState({elbiler: response.data})
    })

    .catch(error => {
      console.log(error)
    })
  }

  render() {
    console.log(this.state.elbiler);
    const list = this.state.elbiler.map(car => <CarCard Modell={car.Merke} Merke={car.Modell} BildeID={car.BildeID}/> );
    return (
      <div>
        <div>{list}</div>
      </div>
    );
  }
}

export default Car;
