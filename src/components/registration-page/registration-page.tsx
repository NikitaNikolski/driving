import * as React from "react";

export default React.createClass({
  render: function() {
    return (

      <main className="page-content ng-scope" ng-app="snelslagenApp">
        <div className="header">
          <div className="wrap">
            <div ng-controller="headerController" className="ng-scope">
              <nav className="exam-nav">
                {/* ngInclude: 'partials/menu/header.html?version=1.2.17' */}<span ng-include="'partials/menu/header.html?version=1.2.17'" className="ng-scope"><span ng-controller="menuController" className="ng-scope">
                    <span>
                      <a href="https://www.snelslagen.nl/app/#/menu" className="_item ng-hide" ng-show="loggedIn && notHome">Menu</a>
                      <a href="https://www.snelslagen.nl/app/#/home" className="_item ng-hide" ng-show="!loggedIn && notHome">&lt;Back</a>
                    </span>
                    <span className="remainingTime ng-hide" ng-show="RemainingMinutes">
                      <span>Remaining Time </span>
                      <span>Minutes</span><span className="ng-binding" />
                      <span></span>
                    </span>
                  </span>
                </span>    
              </nav>
              <div ng-show="ExamData" className="ng-hide">
                <a href="https://www.snelslagen.nl/app/#/oefenexamens//examen/bladeren" className="icon gridIcon" />
                <div className="icon markIcon" ng-click="mark(ExamData.questionId)" />
              </div>
              <div ng-show="!ExamData">
                {/* ngInclude: 'partials/shoppingcart/icon.html?version=1.2.17' */}<div ng-include="'partials/shoppingcart/icon.html?version=1.2.17'" className="ng-scope"><a href="https://www.snelslagen.nl/app/#/shoppingcart/" className="icon shoppingcart ng-scope ng-hide" ng-controller="shoppingCartController" ng-show="show">
                    <span className="badge green ng-binding ng-hide" ng-show="products.length > 0" />
                  </a></div>
                {/* ngInclude: 'partials/notifications/globe.html?version=1.2.17' */}<div ng-include="'partials/notifications/globe.html?version=1.2.17'" className="ng-scope"><a href="https://www.snelslagen.nl/app/#/notifications/" className="icon notificationglobe ng-scope ng-hide" ng-controller="notificationsCountController" ng-show="show">
                    <span className="badge red ng-binding ng-hide" ng-show="notificationCount > 0" />
                  </a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="ng-toast ng-toast--right ng-toast--top "><ul className="ng-toast__list">{/* ngRepeat: message in messages */}</ul></div>
        {/* ngView */}<div ng-view className="ng-scope"><div className="_app">
            <div className="wrap">
              <a href="https://www.snelslagen.nl/">
                <img src="./Quick theory exams_files/snelslagen-logo-medium.png" className="logo" />
              </a>
              <a href="https://www.snelslagen.nl/app/#/inloggen/facebook" className="button _type-1 _app-button" target="_top">Sign in with Facebook </a>
              <a href="https://www.snelslagen.nl/app/#/inloggen" className="button _type-1 _app-button">Log in Sign up for </a>
              <a href="https://www.snelslagen.nl/app/#/registreren" className="button _type-1 _app-button">free</a>
              <p className="home-text">
                    Welcome to the special Snelslagen.nl App! Log in to use the free theory for the car, motor and moped. You can also practice a free theory exam in the app. Do you want to prepare yourself better? Via Snelslagen.nl you can pay per practice exam. Thus you determine how much you purchase. You pay only 3.49 euros per practice exam. Of course, you can also buy all the theory exams. Via Snelslagen.nl you pay only 29.99 euro, because we believe that a qualitative online practice exam in preparation for the CBR exam must not be expensive.
                  </p>
              <p className="home-text">Success in learning your CBR theory exam!</p>
              <p className="home-text">
                <video controls preload="auto" autoPlay style={{width: '100%', height: 'auto'}} poster="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.jpg">
                  <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.m4v" type="video/mp4" />
                  <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.webm" type="video/webm" />
                  <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.ogv" type="video/ogg" />
                  <source src="//static.snelslagen.nl/video/online-theorie-examens-auto-motor-en-bromfiets-oefenen-via-snelslagen.mp4" />
                </video>
              </p>
            </div>
          </div></div>
      </main>
    );
  }
});
