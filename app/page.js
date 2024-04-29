"use client"

import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import LandingImage from "./components/assets/BG Image.png"


export default function Home() {
  return (
    <main>
      <div className=" fixed top-0 w-[100%] h-[80px] bg-white z-10 ">
        <Navbar />
      </div>
      <Image 
      src={LandingImage}
      alt="Landing Image"
      quality={100}
      placeholder="blur"
      className="  w-[100%] mt-[80px]"
      />
      <div className=" w-[100%] mt-[400px] z-0  ">
        <Footer />
      </div>
    </main>
  )
}
