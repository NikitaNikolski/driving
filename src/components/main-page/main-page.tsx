import * as React from "react";
import {Link, Switch, Route } from "react-router-dom";
import HomePage from "../home-page";
import MyAccount from "../my-account";
import MenuItem from "../menu-item";

export default class MainPage extends React.Component {
    render() {
        return <div className="main-page-container">
            <div className="menuItem">
                <MenuItem pictureUrl="/src/images/snelslagen-korting.png" buttonText="Discount code" urlPage="/myAccount"></MenuItem>
            </div>
            <div className="menuItem">
                <MenuItem pictureUrl="/src/images/person-10.svg" buttonText="Rewiews" urlPage="/myAccount"></MenuItem>
            </div>
            <div className="menuItem">
                <MenuItem pictureUrl="/src/images/document-edit-flat.png" buttonText="My account" urlPage="/formPage"></MenuItem>
            </div>

            <h1 className="main-title">Rijschool zoeken en vergelijken en gratis theorie (examens) oefenen</h1>
            <h2>Gratis theorie leren, theorie examens-oefenen en rijscholen vergelijken</h2>
            <p>Op Snelslagen.nl kan je de beste rijschool in jouw buurt zoeken en vergelijken. Binnenkort het CBR theorie examen? Via Snelslagen.nl kan je ook <a target="_blank" href="https://www.snelslagen.nl/app/#/menu?utm_source=SnelslagenHome8">gratis theorie oefenen</a> voor zowel de auto, motor als bromfiets en kan je een <a target="_blank" href="https://www.snelslagen.nl/app/#/menu?utm_source=SnelslagenHome9">gratis theorie examen oefenen</a>. Het allermooiste is dat deze diensten helemaal gratis zijn! Daarnaast kan je jezelf nog beter voorbereiden met een van de <a target="_blank" href="https://www.snelslagen.nl/app/#/menu?utm_source=SnelslagenHome10">online theoriecursussen</a>, waarmee je nog beter voorbereid bent op het CBR theorie examen.</p>
            <p>Miljoenen bezoekers maakten al gebruik van Snelslagen.nl voor hulp bij het behalen van hun theorie examen of bij het zoeken naar een geschikte en kwalitatief goede rijschool. We wensen je veel succes met behalen van je theorie en rijbewijs!</p>

            <section className="itheorie">
                <div className="wrap">
                    <div className="_main-content">
                        <h2 className="main-title">Online theorie cursus</h2>
                        <p className="_content">Via Snelslagen.nl koop je het complete <br/>online theoriepakket inclusief alle theorie examens al voor € 24,<sup>99</sup></p>
                    </div>
                    <button>Ontdek meer &gt;</button>
                </div>
            </section>
        </div>
    }
}