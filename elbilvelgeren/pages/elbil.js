import React, { useState, useEffect } from 'react';
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
query MyBodyText($id: Int) {
  labrador {
    article(id: $id) {
      title
      subtitle
      publishedURL
      sectionTag
      tags
      siteDomain
      imageId
      bodytextStructured {

        ... on Labrador_HTMLElement {
          name
          attributes {
            key
            value
          }
          children {

            ... on Labrador_HTMLElement {
              name
              attributes {
                key
                value
              }
              children {

                ... on Labrador_HTMLElement {
                  name
                  attributes {
                    key
                    value
                  }
                  children {
    
                    ... on Labrador_HTMLElement {
                      name
                      attributes {
                        key
                        value
                      }
                      children {
      
                        ... on Labrador_HTMLElement {
                          name
                          attributes {
                            key
                            value
                          }
                     
                        }
                        ... on Labrador_Text {
                          text
                        }
                      }
                    }
                    ... on Labrador_Text {
                      text
                    }
                  }
                }
                ... on Labrador_Text {
                  text
                }
              }
            }
            ... on Labrador_Text {
              text
            }
          }
        }
      }
    }
  }
}
`

ElbilDetail.getInitialProps = async ({req, query}) =>{
  let elbilId = Number(query.id)
  return {elbilId};
}

function ElbilDetail({elbilId}) {
  // Getting article id of tester
  const articleID = elbiler[elbilId].tester
  console.log(articleID)

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      variables: { id: articleID }
    }
  )
  
  // Stopping if error
  if (error) {
    console.log("Vi har en feil")
    return null
  } 


  console.log(JSON.stringify(data))
  // Using State Hook
  const [articleTitle, setTitle] = useState(0);
  const [articleText, setText] = useState(1);


  useEffect(() => {
    // Update the document title using the browser API
    if (data.labrador === undefined) {
      setTitle("Vi finner ikke data")
    } else {
      setTitle(JSON.stringify(data.labrador.article.title))
      setText(JSON.stringify(data.labrador.article.bodytextHTML))
    }
  });

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
    
      </Detail>
    </Fade>
    

    return (
      <FlexWrapper>
        <Navbar />
        {elBiler}
        {articleTitle} 
        {articleText}
        

        
       
      </FlexWrapper>
    )
}

export default withApollo(ElbilDetail);



