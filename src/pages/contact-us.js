import { FiPhone } from "react-icons/fi";
import { CiClock2, CiLocationOn } from "react-icons/ci";

import { LandingLayouts } from "@/layouts";
import { CustomLayout } from "@/components/customLayout";
import Head from "next/head";

const Contactus = () => {
  return (
    <main>
      <Head>
        <title> Contact us | Bellmari</title>
        <meta name="description" content="Buy quality lubricants - Bellamari" />
      </Head>
      <LandingLayouts className="w-full p-10">
        <CustomLayout className="mx-auto max-w-[800px]  md:max-w-[1050px] px-18 lg:max-w-[1920px]">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url(/assets/hero-img.png)",
            }}
            className=" min-h-[30vh] md:min-h-[80vh] pt-16 flex items-center "
          >
            <>
              <div className="mt w-full px-4 md:px-16 ">
                <h3 className="font-[900] text-white  max-w-md text-left text-5xl md:text-[65px] md:leading-[5rem]">
                  Contact us
                </h3>
              </div>
            </>
          </div>
        </CustomLayout>
        <CustomLayout>
          <div className="px-4 md:px-16 py-5 pb-16 md:pb-20 md:py-20">
            <div className="md:flex  items-center gap-12">
              <div className="max-w-md">
                <div>
                  <h3 className={`font-bold text-[24px] md:text-[38px] md:leading-[52.2px]`}>
                    Contact Us. It’s Easy.
                  </h3>
                </div>{" "}
                <p className="font-normal text-[#595566] my-1 text-lg ">
                  We value your questions and feedback. Connect with us effortlessly through any of
                  our contact options.
                </p>
              </div>
              <div>
                <form>
                  <section className="grid grid-cols-2 gap-3">
                    <ContactForm placeholder="John David" label="Full Name" />
                    <ContactForm placeholder="consult@mail.com" label="Phone" />
                    <ContactForm placeholder="yourcompany.com" label="Product to buy" />
                    <ContactForm placeholder="+008 654 231" label="Units of product" />
                  </section>
                  <ContactTextField placeholder="Send us a message" label="Message" />
                </form>
              </div>
            </div>
          </div>
        </CustomLayout>
      </LandingLayouts>
    </main>
  );
};

export default Contactus;

export const ContactForm = ({ label, placeholder }) => {
  return (
    <section className="my-2">
      <label className="w-full" htmlFor="Full Name">
        {label}
      </label>
      <input
        type="text"
        className="h-10 w-full outline-none border rounded-full px-3"
        placeholder={placeholder}
      />
    </section>
  );
};

export const ContactTextField = ({ label, placeholder }) => {
  return (
    <section className="my-2">
      <label className="w-full" htmlFor="Full Name">
        {label}
      </label>
      <textarea
        name={label}
        placeholder={placeholder}
        className="h-28  w-full outline-none border rounded-[22px] py-2 px-3"
        id=""
      ></textarea>
    </section>
  );
};
