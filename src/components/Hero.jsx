import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.webp";

const originalData = [
  {
    id: 1,
    image: hero1,
    title: "Smarter Shopping",
    subtitle: "Discover effortless style and comfort.",
  },
  {
    id: 2,
    image: hero2,
    title: "Play Has No Limits",
    subtitle: "Next-gen gaming starts here.",
  },
  {
    id: 3,
    image: hero3,
    title: "Modern Living",
    subtitle: "Find the perfect match for everyone.",
  },
  {
    id: 4,
    image: hero4,
    title: "Curated Gifts",
    subtitle: "Upgrade your space with new decor.",
  },
];

const carouselData = [...originalData, originalData[0]];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const runTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }, 5000);
    }
  };

  if (isPlaying && !timerRef.current) runTimer();

  const handleManualChange = (step) => {
    setIsTransitioning(true);
    if (step === "next") {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex((prev) =>
        prev === 0 ? originalData.length - 1 : prev - 1
      );
    }
    runTimer();
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= carouselData.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col w-full h-[430px] lg:h-[430px] overflow-hidden rounded-box bg-base-200 border border-base-300">
      {/*Image & Content Section*/}
      <div className="flex-[5] relative overflow-hidden">
        <div
          className="flex h-full"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? "transform 750ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center px-10 lg:px-24"
            >
              <div className="flex-1 z-10">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-base-content tracking-tight">
                  {slide.title}
                </h1>
                <p className="mt-6 text-xl text-base-content/70 max-w-md">
                  {slide.subtitle}
                </p>
                <div className="mt-10">
                  <Link
                    to="/products"
                    className="btn btn-primary btn-md lg:btn-lg rounded-full px-10"
                  >
                    Shop now
                  </Link>
                </div>
              </div>

              <div className="flex-1 hidden md:flex justify-end h-full py-12">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full max-w-[600px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Controls Bar --- */}
      <div className="flex-1 grid grid-cols-3 items-center px-10 lg:px-24">
        <div className="hidden lg:block"></div>

        <div className="flex justify-center gap-4">
          {originalData.map((_, index) => {
            const activeIndex = currentIndex % originalData.length;
            return (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  runTimer();
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? "bg-primary" : "bg-base-content/20"
                }`}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => handleManualChange("prev")}
            className="btn btn-circle btn-md bg-base-100 border-none shadow-md hover:bg-primary hover:text-primary-content"
          >
            <FaChevronLeft size={16} />
          </button>

          <button
            onClick={() => handleManualChange("next")}
            className="btn btn-circle btn-md bg-base-100 border-none shadow-md hover:bg-primary hover:text-primary-content"
          >
            <FaChevronRight size={16} />
          </button>

          <button
            onClick={togglePlay}
            className="btn btn-circle btn-md bg-primary text-primary-content border-none shadow-md hover:scale-105"
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
