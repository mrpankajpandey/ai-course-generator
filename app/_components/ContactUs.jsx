"use client"
import Head from 'next/head'
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'


import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } =useForm()
  const onSubmit =  (e) => {
    // e.preventDefault();
    
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      // toast.success(`Thank you for your message! ${name}  👏 I will get back to you soon`);
 
      // console.error('Error adding document: ', error);
      toast.error(`Something went wrong, Please try Again ${name} `);
   
  }
  return (
    <>
    <Header/>
     <Head>
        <title>Contact Us | AI Course Generator</title>
        <meta name="description" content="Get in touch with AI Course Generator for any inquiries, feedback, or support." />
        <meta name="keywords" content="contact, customer support, AI courses" />
        <link rel="canonical" href="https://https://mrpankajpandey-ai-course.vercel.app/contact-us" />
      </Head>
      <div name="Contact" className='max-w-screen-2xl ontainer mx-auto px-4 md:px-20 my-10 '>
      <h2 className='text-3xl font-semibold mb-4 '>Contact Me</h2>
      <div className=''>
        <form method='POST' onSubmit={handleSubmit(onSubmit)}  className='flex w-full flex-col  items-center gap-5 border bottom-1 p-3 shadow-sm'>
            <h2 className='text-2xl font-normal'>Send me a Mesaage</h2>
            <h4 className="text-xl font-mono">I'am Very Responsive To Message </h4>
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <input {...register("name", { required: true })} name='name' value={name} onChange={(e) => setName(e.target.value)} className='w-full h-[50px] rounded-full leading-tight border border-black py-2 px-4 dark:bg-[#1c1b23]' type="text" placeholder='Name'/>
                {errors.name && <span className='text-red-300 mx-4' >This field is required</span>}

            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <input {...register("email",  { required: true }, )} name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full h-[50px] rounded-full border border-black py-2 px-4  dark:bg-[#1c1b23]' type="email" placeholder='Email'  />
                {errors.email && <span className=' mx-4 text-red-300'>This field is required</span>}
               
            </div>
            <div className='w-full md:w-1/2 flex  flex-col gap-2'>
                <textarea {...register("message", { required: true })} name='message' value={message} onChange={(e) => setMessage(e.target.value)} className='w-full h-[140px] rounded-md border border-black py-2 px-4  dark:bg-[#1c1b23]'  type="text " placeholder='Enter Your Message'/>
                {errors.message && <span className='mx-4 text-red-300'>This field is required</span>}

            </div>
            <div className='w-1/2 flex items-center justify-center'>
                    <button type='submit' className='px-10 text-white font-medium py-3 bg-blue-400 outline-none hover:bg-blue-900 border  rounded-full' >Send</button>
            </div>
        </form>
      </div>
    </div>
  <Footer/>
    </>
  )
}

export default ContactUs