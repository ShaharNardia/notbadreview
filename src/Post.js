import React, { Component } from 'react';
import {Formik, Form} from 'formik'

class Post extends Component {
  render() {
    return (
      <div className="">
      <h1>Write Your New - "Not Bad Review..." </h1>
        <Formik
        initialValues={{title:''}}       
        >
          <Form>

          </Form>
        </Formik>
      </div>
    );
  }
}

export default Post;
