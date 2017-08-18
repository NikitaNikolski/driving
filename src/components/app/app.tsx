import * as React from "react";

import Header from "../header";
import MainPage from "../main-page";
import MenuItem from "../menuItem";

export default class App extends React.Component {
    render() {
        return <div className="app-container">
            <Header />
            <MenuItem pictureUrl="src/images/person-3.svg" buttonText="bla" />
            <MainPage />
        </div>
    }
}