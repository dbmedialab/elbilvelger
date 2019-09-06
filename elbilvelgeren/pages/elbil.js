import React, { useEffect } from 'react';
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
  useEffect(() => {
   
  });


  const articleData = JSON.stringify(data)
  console.log(articleData)
  
  // Filtering out all the Cars that does not match the id 
  const elbilDetail = elbiler.filter (elbil => elbil.id === elbilId)
  // Mapping the id that remains after filtering
  const elBiler = elbilDetail.map(elbil => 

    <Fade>
      <Detail>
      <CarCard 
        merke={elbil.modell} 
        modell={elbil.merke}  
        type={elbil.type}
        rekkevidde={elbil.rekkevidde} 
        pris={elbil.pris} 
        bildeURL={elbil.bildeURL}
        id={elbil.id}
    />
      <h3>Sitteplasser: {elbil.sitteplasser}</h3>
      {articleData}
      </Detail>
    </Fade>
    );

    return (
      <FlexWrapper>
        <Navbar />
        {elBiler}
      </FlexWrapper>
    )
}

export default withApollo(ElbilDetail);

