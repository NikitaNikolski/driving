import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/header";
import { MainPage } from "./components/main-page";

ReactDOM.render(
    <div className="driving-app-container">
        <Header />
        <MainPage />
    </div>,
    document.getElementById("drivingApp")
);