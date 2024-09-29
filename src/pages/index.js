/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { LandingLayouts } from "@/layouts";
import { CustomLayout } from "@/components/customLayout";
import { HeroSection } from "@/components/ui/hero";
import { ComponentTag } from "@/components/ComponentTag";
import { ProductCard } from "@/components/productCard";
import { FaCheck } from "react-icons/fa";
import { dataPartner, productData } from "@/helpers/data";
import { useEffect, useState } from "react";
import Head from "next/head";
import { GiCheckMark } from "react-icons/gi";
import { PrimaryButton } from "@/components/button";
import { GoArrowRight } from "react-icons/go";
import { TestimonialCard } from "@/components/card/testimonyCard";
import { offerings, principles, services, testimonialData } from "@/helpers/data/data";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [current, setCurrent] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
    }, [8000]);

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  return (
    <main className={montserrat.className}>
      <Head>
        <title>Synthesis Tech - Home </title>
        <meta name="description" content="Buy quality lubricants - Bellamari" />
      </Head>
      <LandingLayouts>
        <HeroSection />
        <CustomLayout>
          <section className="px-4 md:px-12 py-10 ">
            <div className="text-center w-full ">
              <h3 className="font-bold text-2xl ">Core Leadership principles</h3>
              <div className="md:max-w-xl  mx-auto text-center">
                <p className="font-normal text-base my-2">
                  Empowering children with the values they need to lead today and shape tomorrow.
                </p>
              </div>
            </div>
            <div className="grid my-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-2 ">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="py-5 px-5  rounded-md "
                  style={{ backgroundColor: principle.color }}
                >
                  <div className="text-3xl">{principle.icon}</div>
                  <h3 className="font-semibold text-white text-lg">{principle.title}</h3>
                  <p className="text-base font-medium text-white ">{principle.description}</p>
                </div>
              ))}
            </div>
          </section>
        </CustomLayout>
        <CustomLayout>
          <section className="px-4 md:px-12 py-10  ">
            <div className="flex items-center justify-center flex-col w-full ">
              <h3 className="font-bold text-2xl ">Programs and Lectures</h3>
              <div className="max-w-3xl text-center">
                <p className="font-normal text-base my-2">
                  Our exciting programs and lectures are designed to help children grow as leaders.
                  From interactive workshops to inspiring talks by industry leaders, your child will
                  learn the skills they need to succeed.
                </p>
              </div>
            </div>
            <div className="grid my-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-2 ">
              <div className="max-w-sm  border rounded-lg flex items-center justify-center flex-col">
                <img className="w-[300p rounded-lg" src="/assets/leader7.avif" alt="" />
                <div className="flex items-center  justify-center flex-col py-2 px-2">
                  <h3 className="text-[#333333]  font-medium">Leadership Workshop</h3>
                  <p className="text-sm font-normal text-center">
                    Interactive activities to help kids practice real leadership skills.
                  </p>
                </div>
              </div>
              <div className="max-w-sm  border rounded-lg flex items-center justify-center flex-col">
                <img className="w-[300p rounded-lg" src="/assets/leader9.avif" alt="" />
                <div className="flex items-center  justify-center flex-col py-2 px-2">
                  <h3 className="text-[#333333]  font-medium">Creative Problem Solving</h3>
                  <p className="text-sm font-normal text-center">
                    Workshops that teach critical thinking and decision-making.
                  </p>
                </div>
              </div>
              <div className="max-w-sm  border rounded-lg flex items-center justify-center flex-col">
                <img className="w-[300p rounded-lg" src="/assets/leader1.avif" alt="" />
                <div className="flex items-center  justify-center flex-col py-2 px-2">
                  <h3 className="text-[#333333]  font-medium">Team Building</h3>
                  <p className="text-sm font-normal text-center">
                    We educate students not to do life on their own, teaching the beauty of
                    collaboration
                  </p>
                </div>
              </div>
            </div>
          </section>
        </CustomLayout>
        <CustomLayout>
          <section className="py-10 pb-5 px-4 md:px-10 flex items-center justify-center flex-col ">
            <h3 className="font-bold text-[#333333] text-2xl text-center">
              About Us: Building Tomorrow&apos;s Leaders Today
            </h3>
            <div className="max-w-5xl mt-3 text-[#333333] text-sm ">
              <p className="my-2 ">
                At Student Guard, we believe that leadership is not something children grow
                into—it&rsquo;s something they can learn and embody from a young age. Founded with
                the mission to empower the next generation, we are dedicated to teaching children
                the skills, values, and confidence they need to become the leaders of tomorrow.
              </p>
              <p className="my-2">
                Our programs are designed to inspire and equip young minds, fostering their natural
                curiosity and drive to make a difference. Through hands-on workshops,
                school-to-school campaigns, and inspiring guest lectures, we show children that
                leadership is not about age or position—it&rsquo;s about responsibility, empathy,
                and action.
              </p>
              <p className="mb-3">
                Our approach is simple:{" "}
                <span className="text-[#FF6B6B]">empower today, lead tomorrow.</span> By creating a
                nurturing and engaging environment, we give children the tools they need to think
                critically, communicate effectively, and step up as leaders in their own unique way.
              </p>
              <PrimaryButton>Join us</PrimaryButton>
            </div>
          </section>
        </CustomLayout>
      </LandingLayouts>
    </main>
  );
}
