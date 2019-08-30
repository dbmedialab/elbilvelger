import React, { Component } from 'react';
import Car from './Components/Car';
import Navbar from "./Components/Navbar";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
     
          <Car />
     
      </div>
    );
  }
}

export default App;
