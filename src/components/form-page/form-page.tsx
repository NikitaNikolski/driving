import * as React from "react";
import  * as ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';

export default class FormPage extends React.Component {

    componentDidMount() {
        let name = ReactDOM.findDOMNode(this.refs.name);
        name.focus();
    }
    onBtnClickHandler(e: any){
        e.preventDefault();
    }
    render() {
        return <div className="form-container">
            <h1>Mijn account</h1>
            <h1 className="only-mobile-version">This application is only available through the phone</h1>
            <form className="driving-form">
                <h2 className="sub-title">Persoonlijke gegevens</h2>
                <label className="input-block">
                    <span className="_label">Gebruikersnaam</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue=''
                        placeholder=''
                        value = 'rebazrahim'
                        ref='name'
                        
                    />
                </label>
                <label className="input-block">
                    <span className="_label">E-mail</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue=''
                        placeholder=''
                        value = 'rebazrahim11@hotmail.com'
                        ref='eMail'
                    />
                </label>
                <label className="input-block">
                    <span className="_label">Examencredits</span>
                    <span>0</span>

                </label>

                <label className="input-block" defaultChecked={true}>
                    <span className="_label _app-hidden"></span>
                    <input type="checkbox" className="_input" value="true" ref="checked1"/>
                    <span className="_checkbox"></span>
                    Nieuwsbrief toegestaan
                </label>

                <label className="input-block" defaultChecked={false}>
                    <span className="_label _app-hidden"></span>
                    <input type="checkbox" className="_input" value="true" ref="checked2"/>
                    <span className="_checkbox"></span>
                    Theorie examen met extra tijd
                </label>
                <h2 className="sub-title">Wachtwoord</h2>
                <label className="input-block">
                    <span className="_label">Huidig wachtwoord</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue=''
                        placeholder=''
                        value = ''
                        ref='oldPassword'
                        
                    />
                </label>
                <label className="input-block">
                    <span className="_label">Nieuw wachtwoord</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue=''
                        placeholder=''
                        value = ''
                        ref='newPassword'
                        
                    />
                </label>
                <label className="input-block">
                    <span className="_label">Bevestig nieuwe wachtwoord</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue=''
                        placeholder=''
                        value = ''
                        ref='repeatNewPassword'
                    />
                </label>

                <Button className="add-btn" bsStyle="primary" bsSize="large" block
                        onClick={this.onBtnClickHandler.bind(this)}
                        ref='alert_button'>
                    Opslaan</Button>
            </form>

        </div>
    }
}