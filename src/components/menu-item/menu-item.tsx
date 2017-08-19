import * as React from "react";
import { Button, Image } from 'react-bootstrap';

interface IMenuItem {
    pictureUrl: string,
    buttonText: string,
    urlPage?: string
}

export default class MenuItem extends React.Component<IMenuItem> {
    render() {
        const { pictureUrl, buttonText } = this.props;

        return (
            <div className = "container" >
                <Image className = "picture" src = { pictureUrl } rounded />
                <Button className = "button" bsStyle = "success" width = "100%">
                    { buttonText }
                </Button>
            </div>
        )
    }
}
