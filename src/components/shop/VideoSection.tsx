import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
        >
          <source src="/videos/spring-summer-2025.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">
          Spring Summer 2025
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Experience the future of footwear
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
          Shop Collection
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
