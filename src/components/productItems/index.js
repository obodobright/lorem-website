import { ArrowDown, ArrowUp } from "@/components/icons";
import { useState } from "react";

const ProductItems = ({ current, productDetails, currentItem, setCurrentItem, dtIndex, dt }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentSubItem, setCurrentSubItem] = useState(0);

  return (
    <>
      <div
        role="button"
        key={dtIndex}
        onClick={() => setCurrentItem(dtIndex)}
        className={`${
          currentItem === dtIndex ? "bg-[#D9D9D9]" : "bg-transparent"
        } flex items-center justify-start gap-2 my-1 rounded transition-all font-normal px-4 py-2 text-base text-black`}
      >
        <span>{dt.name}</span>
        {currentItem === dtIndex ? <ArrowDown /> : <ArrowUp />}
      </div>
      {isOpen && currentItem === dtIndex && (
        <div className="bg-[#FFFFFF]  transition-all rounded px-5 py3  w-full p-3 ">
          {productDetails[current]?.types[currentItem].litre.map((lt, ltIndex) => (
            <p
              onClick={() => setCurrentSubItem(ltIndex)}
              key={ltIndex}
              className={`${
                currentSubItem === ltIndex ? "text-[#F4B004]" : "text-black"
              }  rounded cursor-pointer transition-all font-normal  text-sm border-b  py-2`}
            >
              {lt}
            </p>
          ))}
        </div>
      )}
    </>
  );
};
export default ProductItems;
