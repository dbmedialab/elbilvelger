import React from "react";
import Headline from "./Headline";
import Image from "./Image";

const carWrapper = {
  border: "2px solid #fafafa",
  borderRadius: "5px"
};

const carHeader = {};

class CarCard extends React.Component {
  render() {
    return (
      <div style={carWrapper}>
        <div className={carHeader}>
          <Image backgroundImage={"../img/zoey.jpg"} />
          <Headline>{this.props.Merke}</Headline>
          <Headline>{this.props.Modell}</Headline>
        </div>
        <div />
      </div>
    );
  }
}

export default CarCard;
