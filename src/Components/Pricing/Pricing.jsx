import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section className="container mx-auto px-5 py-30">
      <div>
        <div>
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-[#101727] text-5xl font-extrabold">
              Simple, Transparent Pricing
            </h2>
            <p className="text-[#627382]">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5">
            <div className="p-6 bg-[#F9FAFC] border border-[#F2F2F2] rounded-2xl shadow space-y-6 flex flex-col">
              <div>
                <h5 className="mb-2 text-[#101727] text-2xl font-bold">
                  Starter
                </h5>
                <p className="text-[#627382]">Perfect for getting started</p>
              </div>

              <div className="flex items-baseline">
                <span className="text-[#101727] text-[40px] font-bold">$0</span>
                <span className="text-[#627382] text-xl">/Month</span>
              </div>

              <ul className="flex-1">
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>Access to 10 free tools</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>Basic templates</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>Community support</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>1 project per month</span>
                </li>
              </ul>

              <button className="w-full h-13 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-base-100 font-bold">
                Get Started Free
              </button>
            </div>

            <div className="p-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border border-[#F2F2F2] rounded-2xl space-y-6 relative">
              
                <div className="py-1.5 px-3 bg-[#FEF3C6] rounded-full absolute z-50 -top-4.5 left-1/2 -translate-x-1/2">
                  <span className="text-[#BB4D00] text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              

              <div className="text-base-100">
                <h5 className="mb-2 text-2xl font-bold">Pro</h5>
                <p className="opacity-80">Best for professionals</p>
              </div>

              <div className="flex items-baseline text-base-100">
                <span className="text-[40px] font-bold">$29</span>
                <span className="text-xl">/Month</span>
              </div>

              <ul>
                <li className="flex gap-2 items-center">
                  <span className="text-base-100">
                    <Check className="w-5" />
                  </span>
                  <span className="text-base-100">Access to all premium tools</span>
                </li>

                <li className="flex gap-2 items-center">
                  <span className="text-base-100">
                    <Check className="w-5" />
                  </span>
                  <span className="text-base-100">Unlimited templates</span>
                </li>

                <li className="flex gap-2 items-center">
                  <span className="text-base-100">
                    <Check className="w-5" />
                  </span>
                  <span className="text-base-100">Priority support</span>
                </li>

                <li className="flex gap-2 items-center">
                  <span className="text-base-100">
                    <Check className="w-5" />
                  </span>
                  <span className="text-base-100">Unlimited projects</span>
                </li>

                <li className="flex gap-2 items-center">
                  <span className="text-base-100">
                    <Check className="w-5" />
                  </span>
                  <span className="text-base-100">Cloud sync</span>
                </li>

                <li className="flex gap-2 items-center">
                  <span className="text-base-100">
                    <Check className="w-5" />
                  </span>
                  <span className="text-base-100">Advanced analytics</span>
                </li>
              </ul>

              <button className="w-full h-13 btn bg-base-100 shadow-none border-none rounded-full text-base-100 font-bold">
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  Get Started Free
                </span>
              </button>
            </div>

            <div className="p-6 bg-[#F9FAFC] border border-[#F2F2F2] rounded-2xl shadow space-y-6">
              <div>
                <h5 className="mb-2 text-[#101727] text-2xl font-bold">
                  Enterprise
                </h5>
                <p className="text-[#627382]">For teams and businesses</p>
              </div>

              <div className="flex items-baseline">
                <span className="text-[#101727] text-[40px] font-bold">
                  $99
                </span>
                <span className="text-[#627382] text-xl">/Month</span>
              </div>

              <ul>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>Team collaboration</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>SLA guarantee</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#30B868]">
                    <Check className="w-5" />
                  </span>
                  <span>Custom branding</span>
                </li>
              </ul>

              <button className="w-full h-13 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-base-100 font-bold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
