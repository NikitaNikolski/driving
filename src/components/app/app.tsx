import * as React from "react";

import Header from "../header";
import MainPage from "../main-page";
<<<<<<< HEAD
import HomePage from "../home-page";
=======
import MenuItem from "../menuItem";
>>>>>>> c934949a06f3c0af002bc7e9702bf5fec9b32d3f

export default class App extends React.Component {
    render() {
        return <div className="app-container">
            <Header />
<<<<<<< HEAD
            <HomePage />
=======
            <MenuItem pictureUrl="src/images/person-3.svg" buttonText="bla" />
            <MainPage />
>>>>>>> c934949a06f3c0af002bc7e9702bf5fec9b32d3f
        </div>
    }
}