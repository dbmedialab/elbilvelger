import React from 'react'; 
import "../Css/FlexWrapper.css";

class FlexWrapper extends React.Component {
  render() {
    return (
      <div className="FlexWrapper">
        {this.props.children}
      </div>
    );
  }
}

export default FlexWrapper;
