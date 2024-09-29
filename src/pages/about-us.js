import { CustomLayout } from "@/components/customLayout";
import { LandingLayouts } from "@/layouts";
import Head from "next/head";
import { useRouter } from "next/router";

const Contactus = () => {
  const router = useRouter();
  return (
    <section>
      <Head>
        <title> About us | Bellmari</title>
        <meta name="description" content="Buy quality lubricants - Bellamari" />
      </Head>
      <LandingLayouts>
        <CustomLayout className="mx-auto max-w-[800px]  md:max-w-[1050px] px-18 lg:max-w-[1920px]">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url(/assets/hero-bg-about.png)",
            }}
            className=" md:min-h-[80vh] pt-16 flex items-center "
          >
            <>
              <div className="pt-16 w-full px-4 pb-20 md:px-16 ">
                <h3 className="font-[900] text-black  max-w-md text-left text-3xl md:text-[65px] md:leading-[5rem]">
                  About Bellmari
                </h3>
                <p className="font-medium text-base my-3">
                  Welcome to Bellmari, your trusted source for premium lubricants and oils. At
                  Bellmari, we specialize in providing a comprehensive range of products tailored to
                  meet the diverse needs of industries, vehicles, and marine applications. Whether
                  you&apos;re looking for engine oils that optimize performance, industrial
                  lubricants that enhance productivity, marine oils that withstand harsh conditions,
                  or greases and specialties for specialized applications, Bellmari has you covered.
                </p>
                <p className="font-medium text-base my-3">
                  With years of expertise and a commitment to quality, Bellmari ensures that every
                  product meets stringent standards for performance and reliability. Our extensive
                  selection includes top brands and formulations designed to exceed industry
                  expectations, backed by our dedication to customer satisfaction.
                </p>
                <button
                  onClick={() => router.push("/contact-us")}
                  className="bg-[#F4B004] text-black text-base  rounded font-medium py-2 px-2 "
                >
                  Contact us now!
                </button>
              </div>
            </>
          </div>
        </CustomLayout>
      </LandingLayouts>
    </section>
  );
};

export default Contactus;
