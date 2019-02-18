import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  login = (values) => {
    if (values === 'google') {
      console.log('Great - log in with google');
    }
    else if (values === 'facebook') {
      console.log('Great - log in with facebook');
    }
    else {
      console.log('Great - classical log in ');     
    }
    this.props.history.push('/feed')
  }
  render() {
    return <div>
      <h1>Log In</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => { this.login(values); }}
      >
        <Form>
          <Field className='input' type='email' name='email' autoComplete='username' placeholder='Email' />
          <Field className='input' type='password' name='password' autoComplete='current-password' placeholder='Password' />
          <button type='submit' className=''>Login</button>
          <hr />
          <FacebookLoginButton className='socialbtn' onClick={this.login.bind(this, 'facebook')} ></FacebookLoginButton>
          <GoogleLoginButton className='socialbtn' onClick={this.login.bind(this, 'google')} ></GoogleLoginButton>
        </Form>
      </Formik>
    </div>
  }
}

export default Login
