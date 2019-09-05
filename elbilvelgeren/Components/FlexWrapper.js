import React, { Component } from 'react';
import styled from '@emotion/styled';

const FlexWrapperCSS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: .5rem;
    padding: 4rem  0rem 3rem 0rem;

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .react-reveal{
      width: 100%;

      @media (min-width: 800px) {
        width: 30vw;
        margin: 1rem;
      }
  }
  `
function FlexWrapper(props) { 
    return (
        <FlexWrapperCSS>    
            {props.children}   
        </FlexWrapperCSS>
    )
 };



export default FlexWrapper;

