import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export const ProductCard = ({ product }) => {
  return (
    <div className="w-full md:max-w-[450px] overflow-hidden rounded bg-white">
      <Image
        priority
        height={300}
        className="w-full md:auto"
        width={300}
        src={product?.img}
        alt=""
      />
      <div className=" py-3 px-4 ">
        <h3 className="font-medium text-lg text-black">{product?.product}</h3>
        <div className="flex items-center justify-between">
          <Image priority width={50} height={50} src="/assets/rating-img.png" alt="" />
          <button className="px-1 flex items-center gap-1 rounded-full text-[11px] bg-[#F4B004] font-normal ">
            <Link className="flex items-center" href={`/products?product=${product?.slug}`}>
              {" "}
              Read more <MdKeyboardArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
