import Link from "next/link";
import { IoClose, IoCloseSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { LogoIcon } from "../icons";
import { CustomLayout } from "../customLayout";
import { navData } from "./navData";
import { useRouter } from "next/router";
import { MobileNav } from "./mobileNav";
import { isDesktop } from "@/utils";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const isActive = (link) => {
    return router?.pathname?.split("/")[1] == link?.split("?")[0].slice(1);
  };

  useEffect(() => {
    const dropdowns = document.querySelectorAll(".desktop-dropdown");

    if (isDesktop) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("group");
      });
    }

    setTimeout(() => {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.add("group");
      });
    }, 50);
  }, [router.pathname]);

  const toggleMobileNavbar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("hide-scroll-bar");
  };
  return (
    <>
      <header className="w-full max-w-[1920px]  z-50  fixed top-0 bg-[#4A90E2]    backdrop-blur-lg h-20  px-4  md:px-10  lg:px-16   right-1/2 left-1/2 translate-x-[-50%] ">
        <nav className=" h-full flex  items-center justify-between">
          <Link href="/">
            <h3 className="text-2xl font-bold font-[arial] text-[white]">Lorem Ipsum</h3>
          </Link>
          <ul className="hidden md:flex  items-center justify-center gap-8">
            {navData.map((nav, navIndex) => {
              if (nav.dropdown && nav.dropdown.length > 0) {
                return (
                  <div
                    key={navIndex}
                    className="group relative  h-full flex flex-col justify-center desktop-dropdown"
                  >
                    <li
                      className={` group hover:text-[darkblue] relative text-base font-medium font-[cursive]  ${
                        isActive(nav.link)
                          ? "text-[darkblue] font-semibold "
                          : "text-[white] font-normal "
                      }`}
                      key={navIndex}
                    >
                      <Link href={nav.link}>{nav.name}</Link>
                    </li>
                    <div className="wrapper  absolute w-[300px] z-[2100] pt-[10px] -top-2 md:hidden lg:block  md:-left-4 right-0 invisible opacity-0 pointer-events-none translate-y-[30px] transition-opacity group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto">
                      <div className="w-auto rounded bg-white shadow px-2 pt-2 pb-2">
                        <ul className=" gap-[37px] justify-between">
                          {nav.dropdown.map((d, i) => {
                            return (
                              <li
                                key={i}
                                role="button"
                                className="flex navItems text-base font-medium font-[cursive]   relative justify-between items-center cursor-pointer px-2 py-2.5 hover:bg-[#F6F8FA] rounded hover:border hover:border-[#E2E4E9] flex-row gap-4"
                              >
                                <Link href={d.link} className="flex items-center gap-3">
                                  <span className="block text-[#00000099] text-sm font-semibold capitalize">
                                    {d.name}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <li
                  className={`text-base font-medium hover:text-[darkblue]  font-[cursive]  ${
                    isActive(nav.link)
                      ? "text-[whitesmoke] font-semibold "
                      : "text-[white] font-normal "
                  }`}
                  key={navIndex}
                >
                  <Link href={nav.link}>{nav.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </nav>

        {isOpen && <MobileNav />}
      </header>
    </>
  );
};
