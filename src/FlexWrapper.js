import React from 'react'; 

const FlexWrapperStyle = {
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '.5rem',
  margin: '2rem'
};

class FlexWrapper extends React.Component {
  render() {
    return (
      <div style={FlexWrapperStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default FlexWrapper;
