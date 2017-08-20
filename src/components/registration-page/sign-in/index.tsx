import * as React from "react";
import { Link } from "react-router-dom";



export default React.createClass({
  render: function() {
    return (
      <div className="reg-theme">
        <div className="reg-title">
            <h1>Log In</h1>
        </div>

        <div className="reg-fields">
            <p >E-mail</p>
            <input className="reg-fieldset" type="email" />
            <p >Password</p>
            <input className="reg-fieldset" type="password" />
      
            <p><Link to='/homePage'><input type="submit" className = "reg-button" value="Log in"/></Link></p>
            <p><Link to='https://www.snelslagen.nl/app/#/inloggen/facebook'><input type="button" className = "reg-button" value="Sign in with Facebook"/></Link></p>
            <h4 style={{padding: '1em' }}>or</h4>          
            <p><Link to='/signUp'><input type="button" className = "reg-button" value="Forgot password?"/></Link></p>
        </div>

      </div>
    );
  }
});
