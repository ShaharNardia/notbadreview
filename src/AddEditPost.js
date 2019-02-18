import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik'

class AddEditPost extends Component {
  render() {
    return (
      <div className="">
        <h1>Write Your New - "Not Bad Review..." </h1>
        <Formik
          initialValues={{ title: '' }}
        >
          <Form>
            <Field />
          </Form>
        </Formik>
      </div>
    );
  }
}

export default AddEditPost;
