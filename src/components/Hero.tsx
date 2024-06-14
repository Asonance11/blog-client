import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mt-12 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-6xl text-center mb-6 font-heading">
        Discover Insights and Stories
      </h1>
      <div className="text-sm md:text-lg text-center max-w-xs md:max-w-2xl mx-auto">
        <p>
          Welcome to A blog, your source for the latest in thoughts and other
          stuff
        </p>
        <Button className="mt-6" variant="default" size="lg" asChild>
          <Link href="register">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
