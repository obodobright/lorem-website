import Image from "next/image";

export const ComponentTag = ({ componentTitle, componentImg }) => {
  return (
    <div className="flex items-center flex-col md:flex-row  justify-center gap-3">
      <Image width={60} height={60} src={componentImg} alt="" />
      <h3 className="text-xl md:text-4xl md:max-w-[50px] uppercase border-b relative  md:md:before:content-[''] md:before:h-2 md:before:w-2 md:before:bg-black md:before:absolute md:before:rounded-full md:before:-bottom-1 md:before:left-52 md:md:after:content-[''] md:after:absolute md:after:h-[1px] md:after:w-[210px] md:after:bg-black font-black">
        {componentTitle}
      </h3>
    </div>
  );
};
