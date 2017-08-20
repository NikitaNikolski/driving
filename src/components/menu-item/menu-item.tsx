import * as React from "react";
import { Button, Image } from 'react-bootstrap';
import { Link, Route } from "react-router-dom";

interface IMenuItem {
    pictureUrl: string,
    buttonText: string,
    urlPage: string
}


export default class MenuItem extends React.Component<IMenuItem> {
    render() {
        const { pictureUrl, buttonText, urlPage } = this.props;
        
        return (
            <div className = "menu-item-container" >
                <Image className = "picture" src = { pictureUrl } rounded />

                <Link to={urlPage}>
                    <Button href={urlPage} className = "button" bsStyle = "success" width = "100%">
                        { buttonText }
                    </Button>
               </Link>
            </div>
        )
    }
}
