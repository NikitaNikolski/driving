import * as React from "react";

import Header from "../header";
import MainPage from "../main-page";
import HomePage from "../home-page";
import MenuItem from "../menuItem";

export default class App extends React.Component {
    render() {
        return <div className="app-container">
            <Header />
            <HomePage/>
        </div>
    }
}