import * as React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../main-page";
import HomePage from "../home-page";
import MyAccount from "../my-account";
import DrivingSchoolsPage from "../driving-schools-page/driving-schools-page";

export default class RouterPage extends React.Component {
    render() {
        return <main>
                <Switch>
                    <Route exact path='/' component={ MainPage }/>
                    <Route exact path='/signIn' component={MainPage}/>
                    <Route exact path='/signUp' component={MainPage}/>
                    <Route exact path='/homePage' component={HomePage}/>
                    <Route exact path='/myAccount' component={MyAccount}/>
                    <Route exact path='/drivingSchoolPage' component={DrivingSchoolsPage}/>
                </Switch>
        </main>
    }
}