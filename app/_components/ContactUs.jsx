import React from 'react'

const ContactUs = () => {
  return (
    <>
     <Head>
        <title>Contact Us | AI Course Generator</title>
        <meta name="description" content="Get in touch with AI Course Generator for any inquiries, feedback, or support." />
        <meta name="keywords" content="contact, customer support, AI courses" />
        <link rel="canonical" href="https://www.yourwebsite.com/contact-us" />
      </Head>
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
    <p className="mb-4">
      We would love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us using the contact form below or through our social media channels.
    </p>
    <form className="mb-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name:</label>
        <input type="text" id="name" className="border border-gray-300 rounded-md w-full p-2" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
        <input type="email" id="email" className="border border-gray-300 rounded-md w-full p-2" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message:</label>
        <textarea id="message" className="border border-gray-300 rounded-md w-full p-2" rows="4" required></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Send Message</button>
    </form>
    <p className="mb-4">You can also reach us through our social media channels:</p>
    <ul className="flex space-x-4">
      <li><a href="#" className="text-blue-500">Facebook</a></li>
      <li><a href="#" className="text-blue-500">Twitter</a></li>
      <li><a href="#" className="text-blue-500">Instagram</a></li>
    </ul>
  </div>
    </>
  )
}

export default ContactUs