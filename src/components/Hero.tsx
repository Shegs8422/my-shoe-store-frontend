import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[600px] bg-gray-100">
      <div className="container mx-auto px-4 h-full">
        <div className="grid md:grid-cols-2 gap-8 h-full items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Step into Style with Our Latest Collection
            </h1>
            <p className="text-xl text-gray-600">
              Discover premium comfort and trendsetting designs in our new
              season arrivals.
            </p>
            <div className="space-x-4">
              <Link
                href="/collection"
                className="inline-block px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/new-arrivals"
                className="inline-block px-8 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
              >
                New Arrivals
              </Link>
            </div>
          </div>
          <div className="relative h-full hidden md:block">
            <Image
              src="/images/hero-shoe.jpg"
              alt="Featured Shoe"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute -bottom-1 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
