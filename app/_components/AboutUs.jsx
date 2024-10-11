import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const AboutUs = () => {
  return (
    <>
    <Header/>
    <Head>
        <title>About Us | AI Course Generator</title>
        <meta name="description" content="Learn about AI Course Generator, your ultimate tool for creating personalized AI courses." />
        <meta name="keywords" content="AI courses, course generator, artificial intelligence, personalized learning" />
        <link rel="canonical" href="https://www.yourwebsite.com/about-us" />
      </Head>
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">About Us</h1>
    <p className="mb-4 text-xl">
      Welcome to AI Course Generator, your ultimate tool for creating personalized AI courses. Our mission is to simplify the learning process by leveraging the power of artificial intelligence to provide tailored educational experiences for users of all levels.
    </p>
    <p className="mb-4 text-xl">
      At AI Course Generator, we believe that everyone should have access to high-quality education. Our platform uses the Gemini API to generate comprehensive course content that meets the needs of students and professionals alike. Whether you are a beginner looking to learn the basics of AI or an experienced practitioner seeking advanced topics, we have something for you.
    </p>
    <p className="mb-4 text-xl">
      Our team consists of passionate educators and AI enthusiasts dedicated to enhancing the learning experience. We continually update our courses to reflect the latest advancements in technology and education, ensuring that our users receive the best possible resources.
    </p>
    <p className="mb-4 text-lg">
      Join us on this exciting journey and unlock the potential of AI in your education!
    </p>
  </div>
  <Footer/>
    </>
  )
}

export default AboutUs