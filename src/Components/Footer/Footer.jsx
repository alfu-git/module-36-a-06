import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <section className="container mx-auto px-5 pt-30 bg-[#101727]">
      <div>
        <div className="text-base-100">
          <div className="pb-20 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <h6 className="mb-4 text-3xl font-extrabold">DigiTools</h6>
              <p className="opacity-80 max-w-87.5">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h6 className="mb-4 text-xl font-medium">Product</h6>

              <ul className="space-y-4">
                <li>
                  <a className="opacity-80" href="/">
                    Features
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Templates
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="mb-4 text-xl font-medium">Company</h6>

              <ul className="space-y-4">
                <li>
                  <a className="opacity-80" href="/">
                    About
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="mb-4 text-xl font-medium">Resources</h6>

              <ul className="space-y-4">
                <li>
                  <a className="opacity-80" href="/">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Community
                  </a>
                </li>
                <li>
                  <a className="opacity-80" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="mb-4 text-xl font-medium">Social</h6>

              <div className="flex gap-3 items-center">
                <span className="p-2 w-8.5 h-8.5 bg-base-100 rounded-full flex justify-center items-center">
                  <a className="text-[#101727]" href="/">
                    <TbBrandInstagramFilled className="w-6 h-6" />
                  </a>
                </span>

                <span className="p-2 w-8.5 h-8.5 bg-base-100 rounded-full flex justify-center items-center">
                  <a className="text-[#101727]" href="/">
                    <FaFacebookSquare className="w-5 h-5" />
                  </a>
                </span>

                <span className="p-2 w-8.5 h-8.5 bg-base-100 rounded-full flex justify-center items-center">
                  <a className="text-[#101727]" href="/">
                    <FaXTwitter className="w-4.5 h-4.5" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="py-7.5 border-t border-[#E5E7EB]/20 flex gap-10 flex-col md:flex-row justify-between items-center">
            <p className="text-[#FAFAFA] opacity-50">
              © 2026 Digitools. All rights reserved.
            </p>

            <ul className="flex gap-7">
              <li>
                <a className="text-[#FAFAFA] opacity-50" href="/">
                  PrivacyPolicy
                </a>
              </li>
              <li>
                <a className="text-[#FAFAFA] opacity-50" href="/">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-[#FAFAFA] opacity-50" href="/">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
