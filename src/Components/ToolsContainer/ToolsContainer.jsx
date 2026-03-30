import React from "react";
import "./ToolsContainer.css";

const ToolsContainer = () => {
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
              <button className="tab-active">Products</button>
              <button className="tab-inactive">
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
