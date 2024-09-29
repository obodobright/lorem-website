import { CustomLayout } from "@/components/customLayout";
import ProductItems from "@/components/productItems";
import { productDetails } from "@/helpers/data";
import { LandingLayouts } from "@/layouts";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Product = () => {
  const handleReplaceRoute = (slug) => {
    const newLocation = `/products?product=${slug}`;

    router.replace(newLocation);
  };

  const router = useRouter();
  const query = router.query.product;
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState(query);
  const [currentItem, setCurrentItem] = useState(0);
  const tabs = [
    {
      tab: "Engine Oil",
      slug: "engine-oil",
    },
    {
      tab: "Industrial Oil",
      slug: "industrial-oil",
    },
    {
      tab: "Marine Oil",
      slug: "marine-oil",
    },
    {
      tab: "Greases",
      slug: "greases",
    },
    {
      tab: "Specialties",
      slug: "specialties",
    },
  ];

  const eachProduct = productDetails?.find((item) => item.slug === query);

  return (
    <main className={inter.className}>
      <Head>
        <title>Products | Bellmari </title>
        <meta name="description" content="Buy quality lubricants - Bellamari" />
      </Head>
      <LandingLayouts>
        <CustomLayout className="mx-auto max-w-[800px]  md:max-w-[1050px] px-18 lg:max-w-[1920px]">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url(/assets/product-bg-hero.png)",
            }}
            className="min-h-[30vh] md:min-h-[70vh] pt-16 flex items-center "
          >
            <>
              <div className="mt w-full px-16 ">
                <h3 className="font-[900] text-white  max-w-md text-left text-3xl md:text-[65px] leading-[5rem]">
                  {eachProduct?.name}
                </h3>
              </div>
            </>
          </div>
        </CustomLayout>
        <CustomLayout>
          <div className="px-3 md:px-16 bg-white max-w-5xl mt-12  mx-auto py-4 md:py-16 md:pb-20">
            <div className="flex flex-wrap md:flex-nowrap items-center  md:justify-center gap-3 md:gap-7">
              {tabs.map((tab, tabIndex) => (
                <button
                  onClick={() => {
                    setActiveTab(tab.slug);
                    handleReplaceRoute(tab.slug);
                    setCurrentItem(0);
                  }}
                  key={tabIndex}
                  className={`h-12 transition-all rounded-[30px] px-3  text-base font-medium ${
                    activeTab === tab.slug ? "bg-[#F4B004] text-white" : "bg-[#F4B0044D] text-black"
                  } `}
                >
                  {tab.tab}
                </button>
              ))}
            </div>
            <div
              style={{
                gridTemplateColumns: "27fr 66fr",
              }}
              className="md:grid  md:grid-cols-2 flex-col md:flex-row  items-start md:justify-start gap-7 mt-8 md:mb-8 mb-14 "
            >
              <div>
                {eachProduct?.types.map((dt, dtIndex) => (
                  <ProductItems
                    current={current}
                    productDetails={productDetails}
                    setCurrentItem={setCurrentItem}
                    currentItem={currentItem}
                    dt={dt}
                    dtIndex={dtIndex}
                    key={dtIndex}
                  />
                ))}
              </div>
              <div
                style={{
                  boxShadow: "4px 5px 20px 0px #00000040",
                }}
                className="bg-[#F4B004] rounded w-full p-10 "
              >
                <h3 className="font-semibold text-xl text-white">PRODUCT DATA</h3>
                <div className="grid grid-cols-2 items-start justify-between gap-4">
                  {/* title */}
                  <section>
                    <p className="text-sm text-white font-normal">WAF P Super Plus</p>
                    <div className="my-2">
                      <h5 className="text-[13px] font-bold text-white">Market Applications:</h5>
                      <p className="text-xs text-white font-normal">
                        WAF P Super Plus 20W/50 is multigrade engine oil embodying the latest in
                        automotive lubricant technology. It is designed to meet motor manufacturer’s
                        requirement for passengers’ cars and light vans operating under services
                        conditions including vehicles equipped with anti-pollution devices. While
                        primarily intended as a high performance lubricant for petrol engines, Super
                        Petrol Extra 20W/50 is equally suitable for use in diesel engines for which
                        multi-grade oils conforms to the API – SJ/CF or equivalent performance
                        levels are specified.
                      </p>
                    </div>
                    <div className="my-2">
                      <h5 className="text-[13px] font-bold text-white">Performance Levels:</h5>
                      <p className="text-xs text-white font-normal">
                        US Military M/L-L-46152D and MIL-L-2104C API Classification SL/CF
                      </p>
                    </div>
                    <div className="my-2">
                      <h5 className="text-[13px] font-bold text-white">Product Description:</h5>
                      <p className="text-xs text-white font-normal">
                        WAF P Super Plus 20W/50 is formulated from high quality mineral oils and
                        features an extremely sophisticated additive package. The result is a
                        balanced lubricant which gives the best possible standard of performance
                        over an extremely wide range of climatic and driving conditions. WAF P Super
                        Plus 20W/50 is capable of providing excellent lubrication and protection for
                        the high performance car engines of today.
                      </p>
                    </div>
                    <div className="my-2">
                      <h5 className="text-[13px] font-bold text-white">Typical Data:</h5>
                      <div className="border-2 my-2 p-2 border-white">
                        <p className="text-xs text-white font-normal">
                          SAE Rating 20W/50 Relative Density @ 20Deg C 0.890 Viscosity @ 100 deg Cst
                          (min) 18.0 CCS Viscosity, cP max@ -15 deg C - CCS Viscosity, cP max@ -10
                          deg C 4500 Viscosity index 125 Pour point, deg C -24 Flash point, deg C
                          (min) 210
                        </p>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="my-2">
                      <h5 className="text-[13px] font-bold text-white">
                        Performance Characteristics:
                      </h5>
                      <div className=" ">
                        <p className="text-xs text-white font-normal">
                          WAF P Super Plus 20W/50 is specially formulated to provide extremely rapid
                          oil circulation through the engine under cold start conditions, thereby
                          ensuring that the oil reaches heavily loaded area quickly. It must be
                          noted that the most severe engine wears occurs during cold start
                          conditions, thus any reduction in the time taken for the oil to circulate
                          reduces wear during the critical period. The water/oil emulsion formed on
                          the rocker can cover during low temperature operations is a phenomenon
                          usually associated with modern oils. WAF P Super Plus combines complete
                          engine protection with a low tendency to form water/oil emulsions in the
                          cooler parts of the engine
                        </p>
                      </div>
                      <div className="my-2">
                        <h5 className="text-[13px] font-bold text-white">Benefit:</h5>
                        <p className="text-xs text-white font-normal">
                          WAF P Super Plus contains an advanced additive package which include the
                          following:
                        </p>
                        <ul>
                          <li className="text-xs text-white font-normal">
                            Detergent/Dispersant additives
                          </li>
                          <li className="text-xs text-white font-normal">
                            Detergent/Dispersant additives
                          </li>
                          <li className="text-xs text-white font-normal">
                            Detergent/Dispersant additives
                          </li>
                          <li className="text-xs text-white font-normal">
                            Detergent/Dispersant additives
                          </li>
                        </ul>
                      </div>
                      <div className="my-2">
                        <h5 className="text-[13px] font-bold text-white">
                          HANDLING, HEALTH AND SAFETY:
                        </h5>
                        <p className="text-xs text-white font-normal">
                          Lubricants consisting of highly refined mineral oils with specific
                          additives. In normal conditions of use, these lubricants present no
                          particular toxic hazard. All lubricants, of any kind, should always be
                          handled with great care, particularly avoiding any contact with the skin.
                          Prevent any risk of splashing, and keep away from combustible materials.
                          Store under cover and away from any risk of contamination
                        </p>
                      </div>
                      <div className="my-2">
                        <p className="text-xs text-white font-normal">
                          Pack size: 1, 4.5, 25 and 205 litres, Bulk
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </CustomLayout>
        {/* <CustomLayout>
          <section className=" px-4 md:px-16 py-5  md:py-16">
            <h3 className="font-[900] text-[black]   text-left text-2xl md:text-3xl md:leading-[5rem]">
              We sell varieties of lubricants oil
            </h3>
            <div className="grid  mt-2 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] justify-center items-center gap-12">
              {allProductData.map((product, productIndex) => (
                <ProductCard key={productIndex} product={product} />
              ))}
            </div>
            <div className="my-12 flex items-center justify-center">
              <button className="bg-black text-white text-lg  rounded font-semibold py-2 px-6">
                Order Now
              </button>
            </div>
          </section>
        </CustomLayout> */}
      </LandingLayouts>
    </main>
  );
};

export default Product;
