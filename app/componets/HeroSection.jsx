/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return ( 
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Lynn</h1>
            <p className="text-[#ADB7BE] text-lg lg:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudianda.
            </p>
                </div>
            </div>
            <div className="col-span-5">
                <div className="rounded-full bg-[#181818]">
                <Image
                src="/images/mid-journey-image.jpg"
                alt="hero image"
                width={300}
                height={300}
                />
                

                </div>
               
            </div>
            
        </section>
     );
}
 
export default HeroSection;