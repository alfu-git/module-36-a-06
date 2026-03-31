import React from "react";
import UserImg from "../../assets/user.png";
import PackageImg from "../../assets/package.png";
import RocketImg from "../../assets/rocket.png";

const Steps = () => {
  return (
    <section className="container mx-auto px-5 py-30 bg-[#F9FAFC]">
      <div>
        <div>
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-[#101727] text-5xl font-extrabold">
              Get Started in 3 Steps
            </h2>
            <p className="text-[#627382]">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5">
            <div className="p-6 bg-base-100 border border-[#F1F1F1] rounded-2xl shadow">
              <div className="flex justify-end -m-1 -r-1">
                <div className="mb-7 py-2.5 px-3 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full max-w-fit flex justify-center items-center">
                  <span className="text-base-100 text-sm font-bold">01</span>
                </div>
              </div>

              <div className="mb-4 flex justify-center items-center">
                <div className="p-5 bg-[#F9FAFC] rounded-full">
                  <img src={UserImg} />
                </div>
              </div>

              <div className="text-center">
                <h5 className="mb-4 text-[#101727] text-2xl font-bold">
                  Create Account
                </h5>
                <p className="pb-16 text-[#627382]">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>

            <div className="p-6 bg-base-100 border border-[#F1F1F1] rounded-2xl shadow">
              <div className="flex justify-end -m-1 -r-1">
                <div className="mb-7 py-2.5 px-3 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full max-w-fit flex justify-center items-center">
                  <span className="text-base-100 text-sm font-bold">02</span>
                </div>
              </div>

              <div className="mb-4 flex justify-center items-center">
                <div className="p-5 bg-[#F9FAFC] rounded-full">
                  <img src={PackageImg} />
                </div>
              </div>

              <div className="text-center">
                <h5 className="mb-4 text-[#101727] text-2xl font-bold">
                  Choose Products
                </h5>
                <p className="pb-16 text-[#627382]">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>
            </div>

            <div className="p-6 bg-base-100 border border-[#F1F1F1] rounded-2xl shadow">
              <div className="flex justify-end -m-1 -r-1">
                <div className="mb-7 py-2.5 px-3 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full max-w-fit flex justify-center items-center">
                  <span className="text-base-100 text-sm font-bold">03</span>
                </div>
              </div>

              <div className="mb-4 flex justify-center items-center">
                <div className="p-5 bg-[#F9FAFC] rounded-full">
                  <img src={RocketImg} />
                </div>
              </div>

              <div className="text-center">
                <h5 className="mb-4 text-[#101727] text-2xl font-bold">
                  Start Creating
                </h5>
                <p className="pb-16 text-[#627382]">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
