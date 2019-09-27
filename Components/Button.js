import React from "react"
import styled from '@emotion/styled'
import Link from 'next/link'
import { FaArrowRight} from 'react-icons/fa';


const Button = styled.button`
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: normal;
    padding: .7rem;
    margin: 1rem 0;

    a{
        color: #fff;
    }

    span{
        margin-right: .5rem;
    }
`

function ButtonLink(props) {
    return(
        <Link href={props.link} as={props.hrefAs} >
            <Button>
                   <span>{props.title}</span><FaArrowRight />
            </Button>
        </Link>
       
    )
}

export default ButtonLink