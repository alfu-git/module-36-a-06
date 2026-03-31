import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({ cartList }) => {
  const [status, setStatus] = useState(false);

  const handleMenu = () => {
    setStatus(!status);
  };

  return (
    <section className="container mx-auto px-5 py-3 md:px-6 border-b border-[#F2F2F2] shadow">
      <div>
        <div className="flex gap-5 justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="relative">
              <div className="pt-1.5 lg:hidden">
                <button onClick={handleMenu}>
                  {status ? <X /> : <Menu />}
                </button>
              </div>

              <ul
                className={`
                  flex flex-col items-center gap-2 
                  absolute top-11.5 z-50 
                  bg-linear-to-b from-[#4F39F6] to-[#9514FA]
                  rounded-xl py-3 px-4 transform transition-all duration-500 ease-in-out origin-top
                  ${
                    status
                      ? "translate-y-0 opacity-100 scale-100"
                      : "-translate-y-5 opacity-0 scale-95 pointer-events-none"
                  }
                `}
              >
                <li className="px-6">
                  <a
                    className="text-base-100 text-sm font-semibold opacity-90"
                    href="/"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="text-base-100 text-sm font-semibold opacity-90"
                    href="/"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="text-base-100 text-sm font-semibold opacity-90"
                    href="/"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-base-100 text-sm font-semibold opacity-90"
                    href="/"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="text-base-100 text-sm font-semibold opacity-90"
                    href="/"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <span className="inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-extrabold">
              DigiTools
            </span>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <a className="text-[#101727] font-semibold opacity-90" href="/">
                  Products
                </a>
              </li>
              <li>
                <a className="text-[#101727] font-semibold opacity-90" href="/">
                  Features
                </a>
              </li>
              <li>
                <a className="text-[#101727] font-semibold opacity-90" href="/">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-[#101727] font-semibold opacity-90" href="/">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="text-[#101727] font-semibold opacity-90" href="/">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative">
              <span className="text-[#101727]">
                <ShoppingCart />
              </span>

              {cartList.length !== 0 && (
                <span className="inline-block bg-linear-to-b from-[#4F39F6] to-[#9514FA] px-1 text-base-100 text-sm rounded-full absolute z-50 -top-2 -right-2">
                  {cartList.length}
                </span>
              )}
            </div>

            <div className="hidden md:flex gap-4 items-center">
              <button className="font-semibold opacity-90 cursor-pointer">
                Login
              </button>

              <button className="btn py-3 px-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-base-100 font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
