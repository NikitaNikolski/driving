import * as React from "react";
import { Link } from "react-router-dom";
//import { PageHeader } from "react-bootstrap";
//import styles from "./header.css";
export default class Header extends React.Component {
    render() {
        return <header>
            <Link to='/homePage'>homePage</Link><br/><br/>
            <Link to='/mainPage'>mainPage</Link><br/><br/>
        </header>
    }
}