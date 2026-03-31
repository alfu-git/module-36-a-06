import React from "react";
import { toast } from "react-toastify";

const CartList = ({ list, cartList, setCartList, total, setTotal }) => {
  const handleRemoveBtn = (list) => {

    const removeItem = cartList.filter((li) => li.name !== list.name);
    setCartList(removeItem);
    setTotal(total - list.price);

    toast.error(
      <p className="flex gap-1.5 text-xs">
        <span className="text-zinc-500 font-bold">
          {list.name}
        </span>
        <span>removed from cart!</span>
      </p>,
    );
  };

  return (
    <div className="p-3 md:p-5 bg-[#F9FAFC] rounded-2xl shadow hover:scale-103 hover:border-zinc-200 transition-all duration-300 ease-in-out group">
      <div className="flex justify-between md:items-center">
        <div className="flex gap-4 md:items-center flex-col md:flex-row">
          <div className="p-3.5 border border-[#F2F2F2] group-hover:border-[#9514FA] max-w-fit rounded-full">
            <img width={32} src={list.icon} />
          </div>

          <div className="space-y-2">
            <h5 className="text-[#101727] text-xl font-semibold">
              {list.name}
            </h5>
            <span className="inline-block text-[#627382] font-semibold">
              ${list.price}
            </span>
          </div>
        </div>

        <div>
          <button
            onClick={() => handleRemoveBtn(list)}
            className="btn bg-transparent border-none shadow-none text-[#FF3980]"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
