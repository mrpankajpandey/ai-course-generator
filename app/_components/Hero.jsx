import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-10 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
              <span className="text-black"> Ai Course </span>Generator.
              <strong className=" mt-5 font-medium text-3xl text-black sm:block">
                {" "}
                Custom Learning paths, Powered By Ai.{" "}
              </strong>
            </h1>

            <p className="mt-4 text-xm relaxed">
              Unlock personalized education with Ai-driven course creation.
              Tailor your learning journey to fit your unique goals and pace.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={"/dashboard"}>
                <Button size="lg">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </div>
  );
};

export default Hero;
