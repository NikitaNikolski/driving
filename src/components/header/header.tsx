import * as React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component {
    render() {
        return <header>
            <div className="logo"></div>
            <div className="auth">
                <span className="signIn">Sign In</span>
                <span className="signUp">Sign Up</span>
            </div>
        </header>
    }
}