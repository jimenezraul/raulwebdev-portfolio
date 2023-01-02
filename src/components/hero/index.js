import { handleScroll } from "../../utils/handleScroll";
import Profile from "../../img/profile.png";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6 lg:text-end">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Hi there, I'm{" "}
                <span className="inline-block text-blue-accent-700">Raul</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                I'm a Full Stack Web Developer based in Deltona, Florida.
              </p>
            </div>
            <div className="flex items-center justify-start lg:justify-end">
              <a
                href="#about-me"
                onClick={handleScroll}
                className="items-center h-12 px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-accent-400 hover:bg-blue-accent-700 focus:shadow-outline focus:outline-none"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
          <div className="flex w-full relative">
            <img
              className="z-50"
              src={Profile}
              alt=""
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
