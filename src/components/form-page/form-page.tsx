import * as React from "react";
import { Button } from 'react-bootstrap';

export default class FormPage extends React.Component {

    render() {
        return <div className="form-container">
            <h1>My account</h1>
            <h1 className="only-mobile-version">This application is only available through the phone</h1>
            <form className="driving-form">
                <h2 className="sub-title">Personal information</h2>
                <label className="input-block">
                    <span className="_label">Username</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue='asdasdasd'
                        placeholder=''
                        ref='name'
                        autoFocus={ true }
                    />
                </label>
                <label className="input-block">
                    <span className="_label">E-mail</span>
                    <input
                        type='text'
                        className='_field'
                        placeholder=''
                        defaultValue = 'rebazrahim11@hotmail.com'
                        ref='eMail'
                    />
                </label>
                <label className="input-block">
                    <span className="_label">Exam credits</span>
                    <span>0</span>

                </label>

                <label className="input-block">
                    <span className="_label _app-hidden"></span>
                    <input type="checkbox" className="_input" defaultChecked={true} ref="checked1"/>
                    <span className="_checkbox"></span>
                    Newsletter allowed
                </label>

                <label className="input-block" >
                    <span className="_label _app-hidden"></span>
                    <input type="checkbox" className="_input" defaultChecked={false} ref="checked2"/>
                    <span className="_checkbox"></span>
                    Theory exam with extra time
                </label>
                <h2 className="sub-title">Password</h2>
                <label className="input-block">
                    <span className="_label">Current password</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue=''
                        placeholder=''
                        ref='oldPassword'
                        
                    />
                </label>
                <label className="input-block">
                    <span className="_label">New password</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue=''
                        placeholder=''
                        ref='newPassword'
                        
                    />
                </label>
                <label className="input-block">
                    <span className="_label">Confirm new password</span>
                    <input
                        type='text'
                        className='_field'
                        defaultValue=''
                        placeholder=''
                        ref='repeatNewPassword'
                    />
                </label>

                <Button className="add-btn" bsStyle="primary" bsSize="large" block
                        ref='alert_button'>
                    Save</Button>
            </form>

        </div>
    }
}