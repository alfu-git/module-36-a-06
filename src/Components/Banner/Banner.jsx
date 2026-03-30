import React from "react";
import PulsingIcon from "../../assets/pulsing icon.png";
import BannerImg from "../../assets/banner.png";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <section className="container mx-auto px-5 py-21">
      <div>
        <div className="flex flex-col-reverse lg:flex-row gap-15 lg:gap-10 xl:gap-15 items-center">
          <div className="max-w-160">
            <div className="mb-4 py-2 px-4 bg-[#E1E7FF] rounded-full flex items-center gap-1 max-w-fit">
              <div>
                <img src={PulsingIcon} alt="Glowing Purple Pulsing" />
              </div>

              <p className="font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </p>
            </div>
            
            <h1 className="mb-4 text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-extrabold text-[#101727] opacity-90 leading-tight">
              Supercharge Your Digital Workflow
            </h1>

            <p className="mb-8 text-lg text-[#627382] lg:w-150 xl:w-full">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>

            <div className="flex gap-4">
              <button className="btn p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-base-100 font-bold">
                Explore Products
              </button>

              <button className="p-4 btn bg-base-100 border border-[#4F39F6] rounded-full flex gap-2 items-center">
                  <span className="text-[#4F39F6]">
                    <Play className="w-5" />
                  </span>

                  <span className="inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                  Watch Demo
                  </span>
              </button>
            </div>
          </div>

          <div>
            <img src={BannerImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
