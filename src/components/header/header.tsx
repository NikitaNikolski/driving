import * as React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component {
    render() {
        return <header>
            <Link to='/'><div className="logo"></div></Link>
            <div className="auth">
                <Link to='/signIn'><span className="signIn">Sign In</span></Link>
                <Link to='/signUp'><span className="signUp">Sign Up</span></Link> 
            </div>
        </header>
    }
}