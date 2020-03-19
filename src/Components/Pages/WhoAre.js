import React, { Component } from 'react';
import AboutSectionMenu from './../Partials/AboutSectionMenu';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the Who Are page.
 * 
 * @component
 * @example
 * return (
 *   <WhoAre />
 * )
 */
class WhoAre extends Component {
    render() {
        return (
            <div className="page">
                <Jumbotron className="page whoare">
                    <h2>Who Are</h2>
                    <p>This is the who are page</p>
                </Jumbotron>
                <AboutSectionMenu />
            </div>
        );
    }
}

export default WhoAre;