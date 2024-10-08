
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import "./style.css";

const Index: React.FC = () => {
  const formik = useFormik({
    initialValues : {
      name : "",
      email : "",
      subject : "",
      message : ""
    },
    validationSchema : Yup.object({
      name : Yup.string().required('Name is required'),
      email : Yup.string().email('Invalid email address').required('Email is required'),
      subject : Yup.string().required('Subject is required'),
      message : Yup.string().required('Message is required')
    }),
    onSubmit : (values) => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className='submit-message'>
        <h1>Lets build something cool together</h1>
        <label>Name</label>
        <input id="name" type='text' {...formik.getFieldProps('name')} placeholder='Hilman Mauludin'></input>
        {(formik.touched.name && formik.errors.name) ? (<div className='text-[#FF0000]'>{formik.errors.name}</div>) : null}
        <label>Email</label>
        <input id="email" type='text' {...formik.getFieldProps('email')} placeholder='hilmaul@gmail.com'></input>
        {(formik.touched.email && formik.errors.email) ? (<div className='text-[#FF0000]'>{formik.errors.email}</div>) : null}
        <label>Subject</label>
        <input id="subject" type='text' {...formik.getFieldProps('subject')} placeholder='For web design work Enquire'></input>
        {(formik.touched.subject && formik.errors.subject) ? (<div className='text-[#FF0000]'>{formik.errors.subject}</div>) : null}
        <label>Message</label>
        <textarea id="message" {...formik.getFieldProps('message')} className="textarea" placeholder='Type your message'></textarea>
        {(formik.touched.message && formik.errors.message) ? (<div className='text-[#FF0000]'>{formik.errors.message}</div>) : null}
        <button type="submit" disabled={formik.isSubmitting}> {formik.isSubmitting ? "Submitting..." : "Submit"}</button>
    </form>
  );
}

export default Index;
