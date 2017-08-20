import * as React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../main-page";
import HomePage from "../home-page";

import RegistrationPage from "../registration-page/main";
import SignIn from "../registration-page/sign-in";
import SignUp from "../registration-page/sign-up";


export default class RouterPage extends React.Component {
    render() {
        return <main>
                <Switch>
                    <Route exact path='/' component={ MainPage }/>
                    
                    <Route exact path='/registrationPage' component={RegistrationPage}/>
                    <Route exact path='/signIn' component={RegistrationPage}/>
                    <Route exact path='/signUp' component={SignUp}/>
                    
                    <Route exact path='/homePage' component={HomePage}/>          
                </Switch>
        </main>
    }
}