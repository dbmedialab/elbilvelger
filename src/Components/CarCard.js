import React from "react";
import "../Css/CarCard.css";
import { FaBookmark, FaMapPin, FaTag} from 'react-icons/fa';


class CarCard extends React.Component {
  render() {

    let imgStyle = {
        backgroundImage: "url(" + "img/" + this.props.bildeURL + ")",
    }
    
    return (
      <div style={imgStyle} className="cardWrapper" >
        <div className="cardHeader">
          <h2 className="imgTitle">
              <span>{this.props.modell} </span>
              <span>{this.props.merke} </span>
              <span>{this.props.type}</span>
          </h2>
        </div>
        <div className="cardFooter">
          <ul>
            <li><span><FaMapPin  /></span> {this.props.rekkevidde} km | {this.props.pris},-</li>
            <li><FaBookmark /></li>
           
          </ul>
        </div>
      </div>
    );
  }
}

export default CarCard;
