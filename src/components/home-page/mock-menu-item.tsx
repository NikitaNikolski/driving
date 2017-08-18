import * as React from "react";
import { Thumbnail } from "react-bootstrap";
import { Button } from "react-bootstrap";


export default class MockMenuItem extends React.Component {
    render() {
        return     (  <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
        )
    }
}

