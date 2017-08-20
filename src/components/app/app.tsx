import * as React from "react";

import Header from "../header";
import RouterPage from "../router-page";

export default class App extends React.Component {
    render() {
        return <div className="app-container">
            <Header />
            <RouterPage />
        </div>

    }
}