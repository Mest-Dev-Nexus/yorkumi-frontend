import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
  return (
    <div>
      <div className="bg-[url(assets/images/yorkumi.jpg)] bg-cover bg-center bg-fixed h-[120vh] flex items-end justify-start p-6 w-full">
        <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-xl text-left text-gray-800 mb-8 ml-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            100% Natural Extracts.
            <br />
            Be{" "}
            <span className="text-amber-700">
              <Typewriter
                words={["clean.", "pure.", "natural."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Sourcing our ingredients from women, we bring shea butter, black
            soap, neem & other natural raw ingredients to life so you can be
            nurtured.
          </p>
        </div>
      </div>

      <section>more</section>
    </div>
  );
};

export default Landing;
