import React, { Component } from 'react';
import {Form,Button,Container,Col} from 'react-bootstrap';
import * as constants from '../../constants.js';
import { reduxForm,Field } from 'redux-form'
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types'

const renderUserName = props =>
    <Form.Group {...props.input} controlId="userName" >
            <Form.Control required type="userName" placeholder={constants.USERNAME} />
            <Form.Control.Feedback type="invalid">
                 {constants.USER_MISS}
             </Form.Control.Feedback>
            </Form.Group>; 

const renderPassword = props =>
    <Form.Group {...props.input} controlId="userPassword">
                <Form.Control required type="password" placeholder={constants.PASSWORD} />
                <Form.Control.Feedback type="invalid">
                    {constants.PASS_MISS}
                 </Form.Control.Feedback>
                </Form.Group>;

//const state=useSelector(state=>state);

class filterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  };                       
    }

    login = (event)=>{
        console.log(event);
        this.props.login();
    }
    
    render() {
        return (
           <form>
            <Container>
                <div className='loginPage'>
                <Field name="userName" component={renderUserName} />
                <Field name="userPassword" component={renderPassword} />
                <Col sm={{ span: 10, offset: 5 }}>
                    <Button  variant="warning" onClick={this.login}>{constants.LOGIN}</Button>
                </Col>
                </div>
            </Container>
            </form>
        );
    }
}

filterPanel.propTypes = {
    login: PropTypes.func.isRequired,
  }
export default reduxForm({form:'filterPanel'})(filterPanel);