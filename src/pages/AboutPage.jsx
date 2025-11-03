import React from "react";
import Footer from "../components/Footer.jsx";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        About Us
      </h1>
      <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl mx-auto">
        Welcome to VirtualR, where we are passionate about creating immersive and
        innovative virtual reality experiences. Our mission is to push the
        boundaries of what's possible in the digital world and to provide our
        users with unforgettable adventures.
      </p>

      <div className="mt-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
          Our Story
        </h2>
        <p className="mt-8 text-center text-lg text-neutral-500 max-w-4xl mx-auto">
          Founded in 2023, VirtualR was born from a shared dream among a group of
          tech enthusiasts and storytellers. We saw the potential of VR to
          transport people to new worlds, and we wanted to be the ones to build
          those worlds. From our humble beginnings in a garage to becoming a
          leading name in the industry, our journey has been one of passion,
          perseverance, and a relentless pursuit of excellence.
        </p>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
          Our Team
        </h2>
        <p className="mt-8 text-center text-lg text-neutral-500 max-w-4xl mx-auto">
          Our team is a diverse blend of creative minds, technical wizards, and
          visionary leaders. We have artists, engineers, designers, and writers,
          all working together to create experiences that are not only visually
          stunning but also emotionally engaging. We believe that our collective
          passion is our greatest asset, and we are proud of the culture of
          collaboration and innovation that we have built.
        </p>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
          Our Vision
        </h2>
        <p className="mt-8 text-center text-lg text-neutral-500 max-w-4xl mx-auto">
          We envision a future where virtual reality is not just for gaming but is
          an integral part of how we learn, work, and connect with others. We are
          committed to developing VR solutions that are accessible, affordable,
          and enriching for people from all walks of life. Our goal is to
          empower individuals and communities to explore, create, and dream
          without limits.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
