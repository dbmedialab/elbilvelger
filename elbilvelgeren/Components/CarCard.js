import React, { Component } from "react";
import { FaBookmark, FaMapPin } from 'react-icons/fa';
import styled from '@emotion/styled';




class CarCard extends Component {
  render() {

  const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center center;
  background-image: url(/static/img/${this.props.bildeURL});
  padding: 0rem;
  margin-bottom: 1.3rem;
  height: 35vh;
  color: #fff;   

    .imgTitle{
      color: #fff;
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
      line-height: 2rem;
    }
  
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
      margin: 0 ;
      padding: 0;
   }
  
    ul li{
      margin: 1rem;
    }
  
    .cardFooter{
      position: relative;
      bottom: -4px;
      display: flex;
      flex-direction: row;
      padding: .5rem;
      background: #fafafa;
      color: #2d2d2d;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
`
    
    return (
      <CardWrapper>

        <h2 className="imgTitle">
          <span>{this.props.modell} </span>
          <span>{this.props.merke} </span>
          <span>{this.props.type}</span>
        </h2>

        <div className="cardFooter">
          <ul>
            <li><span><FaMapPin  /></span> {this.props.rekkevidde} km | {this.props.pris},-</li>
            <li><FaBookmark /></li>           
          </ul>
        </div>

      </CardWrapper>
    );
  }
}

export default CarCard;
