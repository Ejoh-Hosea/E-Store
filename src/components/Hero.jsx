import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

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

8const carouselData = [
  originalData[originalData.length - 1],
  ...originalData,
  originalData[0],
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const runTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleManualChange("next");
      }, 5000);
    }
  }, [isPlaying]);

  useEffect(() => {
    runTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [runTimer]);

  const handleManualChange = (direction) => {
    // BUG FIX: prevent clicking if already moving
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (direction === "next") {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
    runTimer();
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex >= carouselData.length - 1) {
      setCurrentIndex(1);
    }
    if (currentIndex <= 0) {
      setCurrentIndex(originalData.length);
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full h-[430px] overflow-hidden rounded-box bg-base-200 border border-base-300">
      <div className="flex-[5] relative overflow-hidden">
        <div
          className="flex h-full"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
            transition: isTransitioning
              ? "transform 750ms ease-in-out"
              : "none",
            willChange: "transform",
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
              <div className="flex-1 flex justify-end h-full py-12">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full max-w-[600px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 grid grid-cols-3 items-center px-10 lg:px-24">
        <div className="hidden lg:block"></div>
        <div className="flex justify-center gap-4">
          {originalData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index + 1);
                runTimer();
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                (currentIndex === 0
                  ? originalData.length
                  : currentIndex > originalData.length
                  ? 1
                  : currentIndex) ===
                index + 1
                  ? "bg-primary"
                  : "bg-base-content/20"
              }`}
            />
          ))}
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
