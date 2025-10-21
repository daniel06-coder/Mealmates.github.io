'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import ContactSubmit from './ContactSubmit';


const page = () => {
    
  return (
 <main className='min-h-dvh'>

        <ContactSubmit/>

 </main>
  )
}

export default page
