import * as React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class DrivingSchoolsPage extends React.Component {
    render() {
        return <div className="driving-school-container">
                    <div className="container-fluid">
                        <h1>Your driving school</h1>
                        <span className="rectangle">?</span>
                        <span className="for-speed">2speed</span>
                        <div className="clear-both"></div>
                        <h2>Opties</h2>
                        <Button className="add-btn _btn" bsStyle="primary" bsSize="large" block
                            ref='save_button'>
                            Save
                        </Button>
                        <Button className="disconnect-btn _btn" bsStyle="primary" bsSize="large" block
                                ref='save_button'>
                            Disconnect
                        </Button>
                    </div>
                    <div className="images-container">
                        <h1>CBR statistics of 1. Hofstad driving training</h1>
                        <img src="./src/images/graph1.png" alt="graph"/>
                        <img src="./src/images/graph2.png" alt="graph"/>
                    </div>
            </div>
    }
}