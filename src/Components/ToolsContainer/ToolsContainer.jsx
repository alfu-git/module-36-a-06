import React, { use, useState } from "react";
import "./ToolsContainer.css";
import ToolCard from "./ToolCard/ToolCard";
import CartImg from "../../assets/products/cart-logo.png"

const ToolsContainer = ({toolsDataPromise}) => {
  const [tabText, setTabText] = useState("products");

  const handleTabBtn = (text) => {
    setTabText(text);
  };

  const toolsData = use(toolsDataPromise);
  console.log(toolsData);

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
          <div className="mb-10 flex justify-center">
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

          {/* tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7.5">
            {
              toolsData.map(tool => <ToolCard key={tool.id} tool={tool} />)
            }
          </div>

          {/* cart */}
          <div className="p-10 border-2 border-[#F2F2F2] rounded-2xl">
            <h4 className="mb-6 text-[#101727] text-2xl font-bold">Cart</h4>

            {/* empty dashboard */}
            <div className="my-10">
              <div className="flex flex-col items-center gap-5">
                <div className="opacity-30">
                  <img width={70} src={CartImg} />
                </div>
                <p className="text-2xl font-bold opacity-30">Your cart is empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsContainer;
