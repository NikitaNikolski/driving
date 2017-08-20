import * as React from "react";
import { Button, Image } from 'react-bootstrap';


export default React.createClass({
  render: function() {
    return (
      <div className="reg-theme">
        <div className="wrap">
          <h1 >Log In</h1>
        </div>
        <div >
        <fieldset className="fieldset">
            <label className="input-block"><span >E-mail</span><input type="email" /></label>
            <label className="input-block"><span >Password</span><input type="password"  style={{width: '70%'}} /></label>
        </fieldset>
        <div className="input-block">
            <input type="submit" defaultValue="Inloggen" className="button _type-1 _app-button _login-button" />
            <a href="https://www.snelslagen.nl/app/#/inloggen/facebook" className="button _type-1 _app-button _login-button">Sign in with Facebook</a>
            <span className="_web-br"><span className="_label" /><a href="https://www.snelslagen.nl/app/#/wachtwoord-verloren">Forgot password?</a></span>
        </div>
        </div>
      </div>
    );
  }
});
