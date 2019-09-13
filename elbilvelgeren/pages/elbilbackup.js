import React, { useEffect, useState, Component } from 'react';
import Navbar from "../Components/Navbar";
import CarCard from "../Components/CarCard";
import FlexWrapper from "../Components/FlexWrapper"
import styled from '@emotion/styled';

import elbiler from '../elbiler.json';
import Fade from 'react-reveal/Fade';

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { withApollo } from "../lib/apollo"

const Detail = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-self: center;  
`

const ALL_POSTS_QUERY = gql`
{
    labrador {
    article(id: 71564397) {
      title
      bodytextHTML
      imageId
    }
  }
}
`

class elbilDetail extends Component {
render() {
  return()
}
}


ElbilDetail.getInitialProps = async ({req}) =>{
  let url = ''
  if (typeof window !== "undefined") {
    url = window.location.href
  } else {
    url = req.url
  }
  
  let parameter = url.split("=")
  // Getting the id from the second part of the URL
  let elbilId = Number(parameter[1])
  // Returning elbilId to the id from Params
  return {elbilId};
}

function ElbilDetail({elbilId}) {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      notifyOnNetworkStatusChange: true
    }
  )

  // Using effect to 
  useEffect(() => {
    console.log("Component before ");
    // returned function will be called on component unmount 
    return () => {
      console.log("Component umount");
    }
  }, console.log("Siste call 1 gang"))


  const articleData = JSON.stringify(data)

  // Filtering out the car that matches the elbilId
  const singleElbil = elbiler.filter (elbil => elbil.id === elbilId)  
  const elBiler =  
    <Fade>
      <Detail>
      <CarCard 
        merke={singleElbil[0].modell} 
        modell={singleElbil[0].merke}  
        type={singleElbil[0].type}
        rekkevidde={singleElbil[0].rekkevidde} 
        pris={singleElbil[0].pris} 
        bildeURL={singleElbil[0].bildeURL}
        id={singleElbil[0].id}
    />
      <h3>Sitteplasser: {singleElbil[0].sitteplasser}</h3>
      {articleData}
      </Detail>
    </Fade>
    

    return (
      <FlexWrapper>
        <Navbar />
        {elBiler}
      </FlexWrapper>
    )
}

export default withApollo(ElbilDetail);



