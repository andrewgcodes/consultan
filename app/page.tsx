"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
        <svg
          style={{ filter: "contrast(125%) brightness(110%)" }}
          className="fixed z-[1] w-full h-full opacity-[35%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
          <motion.svg
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="block w-[100px] row-start-2 mb-8 md:mb-6"
            viewBox="0 0 87 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.432617 14H9.31836V11.0469H4.15918V1.31738H0.432617V14ZM13.3771 14H17.1037V1.31738H13.3771V14ZM21.7689 14H25.4955V9.50879H30.1889V6.71387H25.4955V4.27051H30.6811V1.31738H21.7689V14ZM37.5875 14H41.3141V4.27051H44.8297V1.31738H34.0719V4.27051H37.5875V14ZM54.241 14.3428C55.5359 14.3428 56.6609 14.0732 57.616 13.5342C58.5711 12.9951 59.3094 12.2275 59.8309 11.2314C60.3582 10.2354 60.6219 9.0459 60.6219 7.66309V7.64551C60.6219 6.26855 60.3582 5.08203 59.8309 4.08594C59.3094 3.08984 58.5711 2.32227 57.616 1.7832C56.6609 1.24414 55.5359 0.974609 54.241 0.974609C52.952 0.974609 51.827 1.24414 50.866 1.7832C49.9109 2.31641 49.1697 3.08398 48.6424 4.08594C48.115 5.08203 47.8514 6.26855 47.8514 7.64551V7.66309C47.8514 9.0459 48.1121 10.2383 48.6336 11.2402C49.1609 12.2363 49.9021 13.0039 50.8572 13.543C51.8182 14.0762 52.9461 14.3428 54.241 14.3428ZM54.241 11.3018C53.7313 11.3018 53.2801 11.1553 52.8875 10.8623C52.5008 10.5635 52.1961 10.1416 51.9734 9.59668C51.7566 9.0459 51.6482 8.40137 51.6482 7.66309V7.64551C51.6482 6.90723 51.7566 6.26562 51.9734 5.7207C52.1961 5.17578 52.5008 4.75684 52.8875 4.46387C53.2801 4.16504 53.7313 4.01562 54.241 4.01562C54.7508 4.01562 55.199 4.16504 55.5857 4.46387C55.9783 4.75684 56.283 5.17578 56.4998 5.7207C56.7166 6.26562 56.825 6.90723 56.825 7.64551V7.66309C56.825 8.40137 56.7166 9.0459 56.4998 9.59668C56.283 10.1416 55.9783 10.5635 55.5857 10.8623C55.199 11.1553 54.7508 11.3018 54.241 11.3018ZM64.6631 14H68.3896V9.50879H73.083V6.71387H68.3896V4.27051H73.5752V1.31738H64.6631V14ZM77.6252 14H81.3518V9.50879H86.0451V6.71387H81.3518V4.27051H86.5373V1.31738H77.6252V14Z"
              fill="#1E2B3A"
            />
          </motion.svg>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[130px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
            Practice for <br />
            consulting<span className="text-[#407BBF]">interviews</span>
            <span className="font-inter text-[#407BBF]">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Instant expert feedback.
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Have an unbiased and expert AI review your responses instantly and get suggestions.
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Free!
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Free to use. Thanks to @Tameyer41.
              </p>
            </div>
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="https://github.com/Tameyer41/liftoff"
                target="_blank"
                className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                  <svg
                    className="w-[16px] h-[16px] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.5 6.5L12 12.25L18.5 6.5"
                    ></path>
                  </svg>
                </span>
                Star on Github
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="/demo"
                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> Try it out </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </main>

        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
        <div className="h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
          <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
            Interview questions from McKinsey, Bain, BCG, Deloitte, and more.
          </p>
  
        </div>
      </div>
    </AnimatePresence>
  );
}
