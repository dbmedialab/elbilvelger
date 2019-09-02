import React from 'react'; 


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
