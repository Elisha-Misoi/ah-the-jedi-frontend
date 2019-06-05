import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

require('../../assets/styles/reset_password.css');

export class ResetPasswordForm extends Component {
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <div className="box">
        <Form className="box-form" onSubmit={onSubmit}>
          <Form.Group>
            <p id="error" />
            <Form.Label>Enter your email:</Form.Label>
            <Form.Control
              id="email"
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={onChange}
            />
          </Form.Group>
          <div className="col-md-12 text-center">
            <Button variant="primary" className="box-form-button" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </div>
    );
  }
}
export default ResetPasswordForm;