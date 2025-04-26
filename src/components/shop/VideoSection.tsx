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
      <div className="relative z-10 flex flex-col items-start justify-end h-full text-white text-left px-6 pb-16 max-w-2xl">
        <span className="mb-2 text-xs font-bold tracking-widest uppercase font-helvetica-condensed">
          Available Now
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-helvetica">
          Spring Summer 2025
        </h2>
        <button className="bg-white text-black px-6 py-2 rounded font-helvetica-condensed text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
