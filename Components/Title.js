import React from "react"
import styled from '@emotion/styled'

const TextAlign = styled.div`
    text-align: ${props => props.align};
    margin-top: 0;
`

export default function Title(props){
    // Getting Fontsize
    let fontSize = props.size
    // Setting Title and Alignment from props
    const textAlign = <TextAlign align={props.align}>{props.title}</TextAlign>
    switch (fontSize) {
        case 'h1':
            return (<h1>{textAlign}</h1>)
        case 'h2':
            return (<h2>{textAlign}</h2>)
        case 'h3':
             return (<h3>{textAlign}</h3>)
        case 'h4':
            return (<h4>{textAlign}</h4>)
        case 'h5':
            return (<h5>{textAlign}</h5>)
        default:
          return (<h2>{textAlign}</h2>)
      }
}
