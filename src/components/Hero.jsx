import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const slides = [
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

const carouselSlides = [...slides, slides[0]];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
  }, [isAnimating]);

  const handleTransitionEnd = () => {
    if (index === slides.length) {
      setIsAnimating(false);
      setIndex(0);
    }
  };

  const next = () => {
    clearInterval(timerRef.current);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    clearInterval(timerRef.current);

    if (index === 0) {
      setIsAnimating(false);
      setIndex(slides.length);
      requestAnimationFrame(() => {
        setIsAnimating(true);
        setIndex(slides.length - 1);
      });
    } else {
      setIndex((i) => i - 1);
    }
  };

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setIndex(i);
  };

  return (
    <div className="flex flex-col w-full h-[430px] overflow-hidden rounded-box bg-base-200 border border-base-300">
      {/* slides */}
      <div className="flex-[5] relative overflow-hidden">
        <div
          className="flex h-full"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isAnimating ? "transform 750ms ease-in-out" : "none",
            willChange: "transform",
          }}
        >
          {carouselSlides.map((slide, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0 flex items-center px-10 lg:px-24"
            >
              <div className="flex-1 z-10">
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
                  {slide.title}
                </h1>
                <p className="mt-6 text-xl opacity-70 max-w-md">
                  {slide.subtitle}
                </p>
                <div className="mt-10">
                  <Link
                    to="/products"
                    className="btn btn-primary rounded-full px-10"
                  >
                    shop now
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-end h-full py-8 lg:py-12">
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

      {/* controls */}
      <div className="flex-1 grid grid-cols-3 items-center px-10 lg:px-24">
        <div />

        {/* dots */}
        <div className="flex justify-center gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full ${
                index % slides.length === i
                  ? "bg-primary"
                  : "bg-base-content/20"
              }`}
            />
          ))}
        </div>

        {/* buttons */}
        <div className="flex items-center justify-end gap-3">
          <button onClick={prev} className="btn btn-circle">
            <FaChevronLeft />
          </button>
          <button onClick={next} className="btn btn-circle">
            <FaChevronRight />
          </button>
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="btn btn-circle btn-primary"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
