import * as React from "react";
import { Link } from "react-router-dom";


export default React.createClass({
  render: function() {
    return (
      <div className="wrap">
        <a href="/signIn">
          <img className="reg-image" src={"/src/images/snelslagen-logo-medium.png"}/>
        </a>

        <p><a href="https://www.snelslagen.nl/app/#/inloggen/facebook"><input type="button" className = "reg-button" value="Sign In with Facebook"/></a></p>
        <p><Link to='/signIn'><input type="button" className = "reg-button" value="Sign In"/></Link></p>
        <p><Link to='/signUp'><input type="button" className = "reg-button" value="Sign up for free"/></Link></p>

        <p className="reg-text">
              Welcome to the special Snelslagen.nl App! Log in to use the free theory for the car, motor and moped. You can also practice a free theory exam in the app. Do you want to prepare yourself better? Via Snelslagen.nl you can pay per practice exam. Thus you determine how much you purchase. You pay only 3.49 euros per practice exam. Of course, you can also buy all the theory exams. Via Snelslagen.nl you pay only 29.99 euro, because we believe that a qualitative online practice exam in preparation for the CBR exam must not be expensive.
            </p>
        <p className="reg-text">Success in learning your CBR theory exam!</p>
        <p className="reg-text">
          <video controls preload="auto" autoPlay style={{width: '100%', height: 'auto'}} poster="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.jpg">
            <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.m4v" type="video/mp4" />
            <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.webm" type="video/webm" />
            <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.ogv" type="video/ogg" />
            <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.mp4" />
          </video>
        </p>
      </div>
    );
  }
});
