import React from 'react'; 

const imgUrl = "../img/zoey.jpg";
const imgStyle = {
  backgroundImage: 'url(' + 'imgURL' + ')'
};

class Image extends React.Component {
  render() {
    return (
      <div style={imgStyle} >
         {this.props.backgroundImage}
      </div>
    );
  }
}

export default Image;
