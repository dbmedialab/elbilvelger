import React from 'react'; 

class Image extends React.Component {
  render() {
    return (
      <div>
         {this.props.backgroundImage}
      </div>
    );
  }
}

export default Image;
