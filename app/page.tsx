import { Text } from "@/app/src";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/hero-img.png"

import { UI } from "@/components/Icons";
import ClickToCopy from "@/components/ClickToCopy";
import GetStarted from "@/components/GetStarted";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="relative w-full text-textColor dark:text-darkTextColor transition-all duration-300 ease-in-out ">
      <div className="absolute -z-[1] inset-0 bg-color bg-top bg-no-repeat bg-home h-[100%] lg:h-[100dvh]">
        <div
          className="absolute inset-0 bg-[bottom_1px_center] bg-grid dark:bg-bottom dark:border-b dark:border-slate-100/5"
          style={{ maskImage: "linear-gradient(transparent, black)" }}></div>
      </div>
      <Navbar />
      <div className=" w-full mx-auto  ">
        <div className="relative pb-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 lg:h-[calc(100vh-85px)] w-full max-w-[1400px] place-items-center mx-auto ">
          <div className="flex flex-col items-center pt-7 px-4">
            <h1 className="text-3xl lg:text-5xl xl:text-7xl flex items-center gap-2 justify-center">
              Landing Page{" "}
              <span className="text-4xl inline-block lg:hidden">
                <UI width={40} height={40} />
              </span>
              <span className="text-7xl hidden lg:inline-block xl:hidden">
                <UI width={48} height={48} />
              </span>
              <span className="text-7xl hidden xl:inline-block">
                <UI width={72} height={72} />
              </span>
            </h1>
            <p className="text-lg lg:text-2xl flex items-center gap-2 justify-center lg:pt-3">
              React Component library
            </p>
            <p className=" text-balance text-center text-base mt-6 group">
              Introducing Landing Page UI – your go-to library for creating
              stunning landing pages with React and Tailwind CSS. Effortlessly
              create captivating pages with our seamless blend of React
              components. <br></br>
              <Text
                tagName="span"
                styles="underline underline-offset-2 decoration-[#6fb8e6] group-hover:decoration-[3px] group:transition-all group:duration-300 group:ease-in-out">
                Elevate your designs today!
              </Text>
            </p>
            <div className="mt-7 flex flex-col lg:flex-row items-center gap-5">
              <div className="flex items-center gap-3 border border-gray-500 hover:border-gray-950 hover:dark:border-[#6fb8e6] group px-3 py-2 rounded-md">
                <p className="font-code flex gap-2">
                  <Text
                    tagName="span"
                    styles="dark:text-[#c699e3] text-[#7e4bdd] ">
                    npm
                  </Text>{" "}
                  <Text
                    tagName="span"
                    styles="group-hover:text-gray-950 group-hover:dark:text-[#6fb8e6]">
                    i landing-page-ui
                  </Text>
                </p>
                <ClickToCopy />
              </div>
              <GetStarted />
            </div>
            <Link
              href="https://www.producthunt.com/posts/landing-page-ui?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-landing-page-ui"
              target="_blank" className="w-[200px] mt-4 ">
              <Image
                src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=456159&theme=light`}
                alt="Landing Page UI - Easily Create Beautiful Landing Pages with us. | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </Link>
          </div>
          <div className="relative before:absolute before:top-1/2  before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:w-[100%] before:h-[100%] before:bg-[url('/rrr.svg')] before:dark:bg-[url('/ttt.svg')] before:bg-[length:80%_100%] before:lg:bg-contain before:bg-no-repeat before:bg-center before:content-[''] before:pb-7 before:-z-[1]">
            <Image
              src={HeroImage}
              alt="Hero Image"
              loading="lazy"
              // placeholder="blur"
              className="shadow-none"
            />
          </div>
          
        </div>
        
      </div>
    </main>
  );
}
