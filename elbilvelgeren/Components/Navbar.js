import React, { Component } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const NavbarWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #3CA069;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    height: 50px;
    padding: 0rem .8rem 0rem .8rem;
    color: white;      
`

class Navbar extends Component {
    render() {
        return(
            <NavbarWrapper>
                <Link href="/">
                    <a>
                    <div className="logo">
                        <img src="../static/img/elbilvelgerlogo.svg" alt="elbilvelger" width="140" />
                    </div>
                    </a>
                </Link>
            </NavbarWrapper>
        )
    }
}


export default Navbar;