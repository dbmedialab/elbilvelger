import React from 'react'; 
import Headline from './Headline';
import Image from './Image';



const carWrapper = {
  border: '2px solid #fafafa',
  borderRadius: '5px'
};

const carHeader = {
};

const carDescription = {
};



const CarsArray = require('./BilData');
console.log(CarsArray)

class Car extends React.Component {

  createCarList () {

    CarsArray.map((car) =>
    <li>{car.Merke}</li>
  );
  }

  render() {
    return (
      <div style={carWrapper}>
        <div className={carHeader}>
        <Image backgroundImage={'../img/zoey.jpg'}/>
        <Headline>Tittel henta fra json her</Headline>
        </div>
        <div>{this.createCarList}</div>
        <p className={carDescription}>
          Description henta fra json her
        </p>
      </div>
    );
  }
}

export default Car;
