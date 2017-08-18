import * as React from "react";
import MockMenuItem from "../home-page";
import { Thumbnail } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Grid } from "react-bootstrap";
import { Row } from "react-bootstrap";
var News = React.createClass({

    render: function() {
        var news= [];
      
        return (
            <div className="news">
                <Col xs={6} md={4}>
               <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                    </Thumbnail>
                    </Col>
            </div>
        );
    }
});
 
  var Menu = React.createClass({

    render: function() {
        var news= [];
         for(var i =0 ; i<8; i++){
            news.push(News);
        }
      
        return (
             <Grid>
    <Row>
        {news}
            </Row>
  </Grid>
            
        );
    }
});

export default class HomePage extends React.Component {

    render() {
        return <main>
            <div className="main-page-container"><News/></div>
        </main>
    }
}