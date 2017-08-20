import * as React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../home-page";
import MyAccount from "../my-account";

export default class MainPage extends React.Component {
    render() {
        return <main>
            <Switch>
                <Route exact path='/homePage' component={HomePage}/>
                <Route exact path='/myAccount' component={MyAccount}/>         
            </Switch>
        </main>
    }
    /*
    <Route path='/roster' component={Roster}/>
    <Route path='/schedule' component={Schedule}/>*/
}