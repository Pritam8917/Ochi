"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import LandingPage from "@/Components/LandingPage";
import Marquee from "@/Components/Marquee";
import About from "@/Components/About";
import Eyes from "@/Components/Eyes";
import Featured from "@/Components/Featured";
import Cards from "@/Components/Cards";
import ReadyToStart from "@/Components/ReadyToStart";
import Footer from "@/Components/Footer";
import LastFooter from "@/Components/LastFooter";
const page = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-hidden no-scrollbar">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <ReadyToStart />
      <Footer />
      <LastFooter />
    </div>
  );
};

export default page;
