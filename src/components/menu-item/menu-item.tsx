import * as React from "react";
import { Button, Image } from 'react-bootstrap';
import { Link, Route } from "react-router-dom";
import MyAccount from "../menu-item";

interface IMenuItem {
    pictureUrl: string,
    buttonText: string,
    urlPage?: string
}
const myAccount = () => (
    <div>
      <h2>Home</h2>
    </div>
  )

export default class MenuItem extends React.Component<IMenuItem> {
    render() {
        const { pictureUrl, buttonText,urlPage } = this.props;

        return (
            <div className = "container" >
                <Image className = "picture" src = { pictureUrl } rounded />
                <Button href={ urlPage } className = "button" bsStyle = "success" width = "100%">
                    { buttonText }
                </Button>
            </div>
        )
    }
}
