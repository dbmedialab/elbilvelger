import React, { Component } from 'react';
import "../Css/Navbar.css";


class Navbar extends Component {
    render() {
        return(
            <div className="Navbar">
                <div className="logo">
                    <img src="../img/elbilvelgerlogo.svg" width="140" />
                </div>
            </div>
        )
    }
}

export default Navbar;