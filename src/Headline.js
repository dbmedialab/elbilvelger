import React from 'react'; 

const headlineStyle = {
  fontSize: 24,
  fontFamily:   'barlow',
  fontWeight: 600 
};

class Headline extends React.Component {
  render() {
    return (
      <h1 style={headlineStyle}>
       {this.props.children}
      </h1>
    );
  }
}

export default Headline;
