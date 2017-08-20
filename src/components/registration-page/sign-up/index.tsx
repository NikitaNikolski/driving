import * as React from "react";
import { Link } from "react-router-dom";


export default React.createClass({
  render: function() {
    return (
        <div className="reg-theme">

            <div className="reg-title">
                <div>Register</div>
            </div>

            <div className="reg-fields">

                <p >E-mail</p>
                <input className="reg-fieldset" type="email" />
                <p >Password</p>
                <input className="reg-fieldset" type="password" />

                <p><Link to='/signIn'><input type="submit" className = "reg-button" value="Register"/></Link></p>

                <h4 style={{padding: '1em' }}>or</h4>          

                <p><Link to='/signIn'><input type="submit" className = "reg-button" value="Log in"/></Link></p>
                <p><Link to='/https://www.snelslagen.nl/app/#/inloggen/facebook'><input type="button" className = "reg-button" value="Sign in with Facebook"/></Link></p>

            </div>

            <div className="reg-text">
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
    );
  }
});
