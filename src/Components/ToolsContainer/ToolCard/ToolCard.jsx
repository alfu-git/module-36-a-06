import { Check } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const ToolCard = ({ tool, getClickedTool, cartList }) => {

  const isExists = cartList.find(list => list.name === tool.name);

  const handleBuyBtn = (tool) => {
    if (!isExists) {
      getClickedTool(tool);

      toast.success(
        <p className="flex gap-1.5 text-sm">
          <span
            className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold"
          >
            {tool.name}
          </span>
          <span>
            added to cart
          </span>
        </p>
      )
    }
  }

  return (
    <div className="p-6 bg-base-100 border-2 border-[#F2F2F2] rounded-2xl relative">
      <div className="space-y-4">
        <div>
          <div className="p-3.5 border border-[#F2F2F2] rounded-full max-w-fit">
            <img width={32} src={tool.icon} />
          </div>

          <span
            className={`
              py-1.5 px-3 rounded-full absolute z-50 top-2.5 right-2.5
              ${
                tool.tagType === "best-seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : 
                tool.tagType === "popular" ? "bg-[#E1E7FF] text-[#4F39F6]" :
                "bg-[#DBFCE7] text-[#0A883E]"
              }
              `}
          >
            {tool.tag}
          </span>
        </div>

        <h3 className="text-2xl text-[#101727] font-bold">{tool.name}</h3>

        <p className="text-[#627382]">{tool.description}</p>

        <div className="flex items-baseline">
          <span className="text-[#101727] text-2xl font-bold">
            ${tool.price}
          </span>
          <span className="text-#627382">/{tool.period}</span>
        </div>

        <div>
          <ul>
            {tool.features.map((feature, index) => (
              <li key={index} className="flex gap-2 items-center">
                <span className="text-green-400">
                  <Check className="w-5" />
                </span>
                <span className="text-[#627382]">
                {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => handleBuyBtn(tool)}
          className={`
            btn border-none rounded-full w-full h-13 text-base-100 font-bold
            ${
              isExists ? "bg-green-600" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            }
            `}
        >
          {
            isExists ? 'Added to cart!' : 'Buy Now'
          }
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
