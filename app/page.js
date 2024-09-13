import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

export default function Home() {
  return (
      <>
      {/* header */}
       <Header/>
      {/* Hero Section */}
      <Hero/>
   <Footer/>
      </>
  );
}
