import React, { useState } from "react";
import "./ToolsContainer.css";

const ToolsContainer = () => {
  const [tabText, setTabText] = useState("products");

  const handleTabBtn = (text) => {
    setTabText(text);
  };

  return (
    <section className="container mx-auto px-5 my-30">
      <div>
        <div>
          {/* title */}
          <div className="mb-4 flex justify-center text-center">
            <div className="max-w-135">
              <h2 className="mb-4 text-5xl text-[#101727] font-extrabold">
                Premium Digital Tools
              </h2>
              <p className="text-[#627382]">
                Choose from our curated collection of premium digital products
                designed to boost your productivity and creativity.
              </p>
            </div>
          </div>

          {/* tab btn */}
          <div className="flex justify-center">
            <div className="p-1 border border-[#F6F6F6] rounded-full max-w-fit">
              <button
                onClick={() => handleTabBtn('products')}
                className={`
                  w-30 h-12.5
                  ${tabText === "products" ? "btn tab-active" : "tab-inactive"}
                  `}
              >
                Products
              </button>

              <button
                onClick={() => handleTabBtn('cart')}
                className={`
                  w-30 h-12.5
                  ${tabText === "cart" ? "btn tab-active" : "tab-inactive"}
                  `}
              >
                Cart
                <span>(0)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsContainer;
