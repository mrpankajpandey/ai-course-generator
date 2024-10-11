import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
     <Head>
        <title>AI Course Generator - Create Personalized AI Courses</title>
        <meta name="description" content="Generate personalized AI courses with our easy-to-use tool. Explore various topics and create your own curriculum today!" />
        <meta name="keywords" content="AI, Course Generator, Online Learning, Educational Tool, Machine Learning, Deep Learning" />
        <meta name="author" content="Pankaj Kumar Pandey" />
        <link rel="canonical" href="https://https://mrpankajpandey-ai-course.vercel.app//" />
        <meta property="og:title" content="AI Course Generator" />
        <meta property="og:description" content="Create personalized AI courses tailored to your needs." />
        <meta property="og:image" content="https://https://mrpankajpandey-ai-course.vercel.app//image.jpg" />
        <meta property="og:url" content="https://https://mrpankajpandey-ai-course.vercel.app//" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Course Generator" />
        <meta name="twitter:description" content="Generate personalized AI courses with our easy-to-use tool." />
        <meta name="twitter:image" content="https://https://mrpankajpandey-ai-course.vercel.app//image.jpg" />
      </Head>
    <div className="flex justify-between p-5 shadow-sm items-center">
      <div className="flex items-center gap-2">

      <Image src={'/logo.png'} width={44} height={44} /> <span className="font-bold text-xl">AI Course Generator</span>
      </div>
      <Link href={'/dashboard'}>
      <Button> Get started</Button>
      </Link>
    </div>
    </>
  );
};

export default Header;
// updated header
