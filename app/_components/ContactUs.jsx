"use client"
import Head from 'next/head'
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'


import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
const ContactUs = () => {
 
  return (
    <>
    <Header/>
     <Head>
        <title>Contact Us | AI Course Generator</title>
        <meta name="description" content="Get in touch with AI Course Generator for any inquiries, feedback, or support." />
        <meta name="keywords" content="contact, customer support, AI courses" />
        <link rel="canonical" href="https://www.yourwebsite.com/contact-us" />
      </Head>
  
  <Footer/>
    </>
  )
}

export default ContactUs