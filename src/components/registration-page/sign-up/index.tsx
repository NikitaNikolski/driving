import * as React from "react";
import { Button, Image } from 'react-bootstrap';


export default React.createClass({
  render: function() {
    return (
        <div className="reg-theme">
            <div className="wrap">
                <h1 className="reg-theme">Register</h1>
            </div>
            <div className="wrap">
                <div className="_content">
                    <fieldset className="fieldset">
                    <label className="input-block">
                        <span className="_label">Username</span><input type="text" id="username" name="username" style={{width: '40%'}} />
                    </label>
                    <label className="input-block">
                        <span className="_label">E-mail</span><input type="email" id="email" name="email" style={{width: '40%'}}/>
                    </label>
                    </fieldset>
                    <div className="input-block">
                    <span className="_label" /><input type="submit" defaultValue="Register" />
                    <span className="_web-br"><span className="_label" /><a href="https://www.snelslagen.nl/app/#/wachtwoord-verloren">Forgot password?</a></span>
                    <span className="_web-br"><span className="_label" /><div style={{textAlign: 'center', fontStyle: 'italic'}}>or</div></span>
                    <span className="_web-br"><span className="_label" /><a href="https://www.snelslagen.nl/app/#/inloggen/facebook" className="button _type-1 _app-button _register-button">Sign in with Facebook directly</a></span>
                    </div>
                    <p style={{paddingTop: '1em'}}>
                        Register here, or sign in with your Facbook account to use the <strong>free theory</strong> for the <strong>car, motor and moped</strong> . You can also practice a free theory exam in the app. Do you want to prepare yourself better? Via Snelslagen.nl you can pay per practice exam. Thus you determine how much you purchase. You pay only 3.49 euros per practice exam. Of course, you can also buy all the theory exams. Via Snelslagen.nl you pay only 24.95 euros, because we believe that a qualitative online practice exam in preparation for the CBR exam must not be expensive.
                        </p>
                    <p>Success in learning your CBR theory exam!</p>
                    <p>
                        <video controls preload="auto" autoPlay style={{width: '100%', height: 'auto'}} poster="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.jpg">
                            <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.m4v" type="video/mp4" />
                            <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.webm" type="video/webm" />
                            <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.ogv" type="video/ogg" />
                            <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.mp4" />
                        </video>
                    </p>
                </div>
            </div>
      </div>
    );
  }
});
