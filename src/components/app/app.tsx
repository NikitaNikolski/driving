import * as React from "react";

import Header from "../header";
import MainPage from "../main-page";
import MenuItem from "../menu-item";
import RouterPage from "../router-page";

export default class App extends React.Component {
    render() {
        return <div className="app-container">
            <Header />
            <RouterPage />
        </div>

    }
}