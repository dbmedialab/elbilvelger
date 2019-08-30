import React, { Component } from 'react';
import "../Css/Footer.css";

class Footer extends Component {
    render() {
        return(
            <div className="Footer">
                <div className="Footer-inner">
                <button onClick={this.sortByPrice}>Sort by Range</button>
                </div>
            </div>
        )
    }
}

export default Footer;