import { OutlineButton, PrimaryButton } from "@/components/button";
import { CustomLayout } from "@/components/customLayout";
import { GoArrowRight } from "react-icons/go";

export const HeroSection = () => {
  return (
    <CustomLayout className="mx-auto max-w-[800px]  md:max-w-[1050px] px-18 lg:max-w-[1920px] mt-[500px]">
      <div
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100%",
          backgroundImage: "url(/assets/team1.jpg)",
        }}
        className="min-h-[40vh]  md:min-h-[80vh] mt-[80px] flex items-center "
      >
        <div
          style={{ background: "rgba(74, 144, 226, 0.4)", backdropFilter: "blur(4px)", zIndex: 1 }}
          className="absolute mt-[80px]  top-0 min-h-[40vh]  md:min-h-[80vh] w-full"
        ></div>
        <div className="flex items-center justify-center flex-col w-full relative z-20 px-6 space-y-3 md:px-16 ">
          <h3 className="font-bold text-white  max-w-3xl text-center text-2xl md:text-6xl ">
            Tomorrow’s Leaders, Starting Today!
          </h3>
          <p className="text-base font-semibold max-w-md text-center text-white">
            Leadership and Growth for Children, Because Age Isn’t a Barrier to Greatness
          </p>
          <div className="flex items-center justify-center gap-2">
            <PrimaryButton>
              <div className="flex items-center justify-start gap-2">
                <span>For Student </span>
              </div>{" "}
            </PrimaryButton>
            <OutlineButton>
              <div className="flex items-center justify-start gap-2">
                <span>For School </span>
              </div>{" "}
            </OutlineButton>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};
