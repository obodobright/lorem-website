import Link from "next/link";
import { CustomLayout } from "../customLayout";
import { LogoIconDark } from "../icons";
import { ContactSection } from "../ui/contactus/contactSection";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

export const Footer = () => {
  return (
    <footer className="relative">
      <CustomLayout>
        <div className="w-full bg-[#4A90E2] px-5 md:px-16 py-4">
          <section className=" mx-auto md:flex items-center justify-between">
            <div>
              <Link href="/">
                <h3 className="text-4xl font-bold font-[arial] text-[white]">Lorem Psum</h3>
              </Link>
            </div>
            <div className="flex mt-3 items-center justify-start gap-4">
              <FaFacebook cursor="pointer" color="#fff" fontSize={18} />
              <FaTwitter cursor="pointer" color="#fff" fontSize={18} />
              <SlSocialLinkedin cursor="pointer" color="#fff" fontSize={18} />
              <div className="text-white font-black">|</div>
              <p className="text-base font-sembibold text-white">
                {" "}
                <span>&copy;</span> 2024
              </p>
            </div>
          </section>
        </div>
      </CustomLayout>{" "}
    </footer>
  );
};
