import * as React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../main-page";
import HomePage from "../home-page";

export default class RouterPage extends React.Component {
    render() {
        return <main>
                <Switch>
                    <Route exact path='/' component={ MainPage }/>
                    <Route exact path='/signIn' component={MainPage}/>
                    <Route exact path='/signUp' component={MainPage}/>
                    <Route exact path='/homePage' component={HomePage}/>          
                </Switch>
        </main>
    }
}