import React, { Component } from "react";
import { FaBookmark, FaMapPin } from 'react-icons/fa';
import styled from '@emotion/styled';




class CarCard extends Component {
  render() {

  const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center center;
  background-image: url(/static/img/${this.props.bildeURL});
  padding: 0;
  margin-bottom: 1.3rem;
  height: 35vh;
  color: #fff;   

    .imgTitle{
      position: relative;
      color: #fff;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 100%);
      width: auto;
      bottom: 0;
      font-weigth: bold;
      padding: 2rem 0 .7rem 0rem;
      font-size: 1.4rem;
      text-align: center;
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
  
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 ;
      padding: 0;
   }
  
    ul li{
      margin: 1rem;
    }
  
    .cardFooter{
      position: relative;
      display: flex;
      flex-direction: row;
      padding: .5rem;

      background: rgba(0,0,0,0.8);
      color: #fff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
`
    
    return (
      <CardWrapper>

        <div className="imgTitle">
          <span>{this.props.modell} </span>
          <span>{this.props.merke} </span>
          <span>{this.props.type}</span>
        </div>

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
