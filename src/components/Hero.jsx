import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-2-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Shopping, but way smarter
        </h1>
        <p className=" mt-8 max-w-xl text-lg leading-8">
          Discover a simple, modern shopping experience built to save you time,
          cut stress, and make every purchase feel smooth and effortless.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            {" "}
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:carousel h-[28rem] carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
