import * as React from "react";

import Header from "../header";
import MainPage from "../main-page";

export default class App extends React.Component {
    render() {
        return <div className="app-container">
            <Header />
            <MainPage />
        </div>
    }
}