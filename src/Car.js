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

let i = 0;
function findIndex () {
};


class Car extends React.Component {
  render() {
    return (
      <div style={carWrapper}>
        <div className={carHeader}>
        <Image backgroundImage={'../img/zoey.jpg'}/>
        <Headline>Tittel henta fra json her</Headline>
        </div>
        <p className={carDescription}>
          Description henta fra json her
        </p>
      </div>
    );
  }
}

export default Car;
