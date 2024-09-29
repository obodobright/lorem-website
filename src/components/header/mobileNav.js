import Link from "next/link";
import { useRouter } from "next/router";
import { navData } from "./navData";

export const MobileNav = () => {
  const router = useRouter();
  return (
    <section style={{ background: "#fff" }} className="w-full py-12 absolute left-0 ">
      <ul className="flex  items-center justify-start flex-col gap-6">
        {navData.map((nav, navIndex) => (
          <li
            key={navIndex}
            className={`text-base font-semibold text-black ${
              nav.link === router.pathname ? "text-bold border-b-2 border-[#F4B004]" : ""
            }`}
          >
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
