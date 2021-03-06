import React from "react";
import { Footer } from "react-materialize";

class Foot extends React.Component {
    state = {
        user: null
    };




    render() {
        return (
            <Footer copyrights="Copyright © 2019 The Pichardo. All rights reserved"
                moreLinks={
                    <a className="grey-text text-lighten-4 right" href="#!">Privacy</a>
                }
                links={
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">My Profile</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Search Friends</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Top adventures</a></li>
                    </ul>
                }
                className='thefooter'
            >
                <h5 className="white-text">The pichardo</h5>
                <p className="grey-text text-lighten-4">Digital technologist.</p>
            </Footer>
        );
    }
}

export default Foot;