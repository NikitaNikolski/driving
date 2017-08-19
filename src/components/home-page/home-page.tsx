import * as React from "react";
import MenuItem from "../menu-item";
import { Grid, Col, Row } from "react-Bootstrap";
  /*  const temp = <div className="news">
                <Col xs={6} md={4}>
               <Thumbnail src="/src/images/my-invoices.svg" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                    </Thumbnail>
                    </Col>
            </div>

  var Menu = React.createClass({
    render: function() {
        var news= [];
         var item = new Item("buttonLabel","linkToPage","linkToPicture");
   
         var items =[];
         items.push(item);
        for(var i =0 ; i < 8; i++){
            news.push(temp);
            
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

class Item {
    private buttonLabel : string;
    private linkToPage :string;
    private linkToPicture : string;
    
    constructor(buttonLabel:string, linkToPage:string,linkToPicture:string ) { 
        this.buttonLabel = buttonLabel;
        this.linkToPage = linkToPage;
        this.linkToPicture = linkToPicture; 
    }

    getButtonLabel():string{
        return this.buttonLabel;
    }
    getLinkToPage():string{
        return this.linkToPage;
    }
    getLinkToPicture():string{
        return this.linkToPicture;
    }

}*/
/*
<Grid>
<Row>
    
<Col xs={6} md={4} >
    <MenuItem pictureUrl="/src/images/person-10.svg" buttonText="Rewiews"></MenuItem>
</Col>

<Col xs={6} md={4}>
    <MenuItem pictureUrl="/src/images/shopping-cart.svg" buttonText="Upgrade"></MenuItem>
</Col>
<Col xs={6} md={4}>
    <MenuItem pictureUrl="/src/images/person-9.svg" buttonText="Book theory"></MenuItem>
</Col>
<Col xs={6} md={4}>
    <MenuItem pictureUrl="/src/images/snelslagen-korting.png" buttonText="Discount code"></MenuItem>
</Col>
<Col xs={6} md={4}>
    <MenuItem pictureUrl="/src/images/my-drivingschool.svg" buttonText="My driving school"></MenuItem>
</Col>
<Col xs={6} md={4}>
    <MenuItem pictureUrl="/src/images/document-edit-flat.png" buttonText="My account"></MenuItem>
</Col>
<Col xs={6} md={4}>
    <MenuItem pictureUrl="/src/images/my-invoices.svg" buttonText="My Invoicies"></MenuItem>
</Col>
<Col xs={6} md={4}>
    <MenuItem pictureUrl="/src/images/power-button-sign.svg" buttonText="Log out"></MenuItem>
</Col>


</Row>
</Grid>*/

export default class HomePage extends React.Component {

    render() {
        return <div> 
            HomePage
        </div>
    }
}