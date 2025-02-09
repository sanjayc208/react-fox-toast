
"use client";
import React from "react";
import { toast } from "react-fox-toast"
import Meteors from "@/components/ui/meteors";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ToastDemo from "@/components/sections/toast-example"
import AnimatedListDemo from '@/components/features/feature-list'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Road_Rage } from 'next/font/google'
import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";

import useOnScreen from '@/hooks/use-onscreen'; // Import your custom hook
import { useIsMobile } from "@/hooks/use-mobile"

const road_rage = Road_Rage({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  const router = useRouter()
  const isMobile = useIsMobile()
  const [onScreenRef, onScreenVisible] = useOnScreen() as [React.RefObject<HTMLDivElement>, boolean];

  // const [pulseStart, setPulseStart] = React.useState(false);

  return (
    <div className="">
      <div className={`relative ${isMobile ? 'min-h-[77vh]' : ''} flex w-full flex-col items-center justify-center overflow-hidden`}>
        <header></header>
        <Meteors number={40} />

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 18,
              duration: 0.5,
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 1, // Start bouncing after the initial drop
              }}
            >
              <Image
                src="/bg/fox_cook.png"
                width={270}
                height={270}
                alt="Fox Logo"
                className="mx-auto mb-2"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className={`${road_rage.className} lg:text-7xl xs:text-6xl font-semibold text-yellow-950 mb-4`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
            transition={{
              duration: 1.5,
              times: [0, 0.3, 0.6],
              repeatType: "reverse",
              repeatDelay: 1,
              delay: 1.5 // Delay to start after the fox has dropped
            }}
          >
            Welcome to
          </motion.h1>

          {/* "React Fox Toast" with pulsing animation after the initial animation */}
          <motion.h1
            className={`${road_rage.className} lg:text-8xl xs:text-6xl font-bold text-yellow-900`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
              // pulseStart ? { scale: [1, 1.1, 0.9 , 1], opacity: 1 } : 
              { scale: [0.5, 1.3, 1], opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 1.7, // Delay to start after "Welcome to" has appeared
              times: [0, 0.3, 0.6],
              repeatDelay: 1,
              // repeat: pulseStart ? Infinity : 0, // Start pulsing after the first animation
              repeatType: "loop", // Infinite pulse
            }}
          // onAnimationComplete={() => setPulseStart(true)} // Trigger pulsing after initial animation
          >
            React Fox Toast
          </motion.h1>
          {!isMobile && <div className={`xs:text-sm xs:my-2 xs:m-3 md:my-16 md:text-md text-yellow-950 font-semibold`}>
            <TextAnimate delay={1000} animation="scaleUp" as="h1">
              {/* For every developer, it is not just a library, but a toast canvas waiting to be painted with your vision */}
              {/* Like a Fox Lightweight and swift, it brings a whisper of notification to your users, leaving no heavy mark behind */}
              Like a Fox, which thrives in the quiet spaces between the trees
            </TextAnimate>
            <TextAnimate delay={10000} animation="scaleUp" as="h1">
              this library is a silent but powerful presence—quick to act, yet never overwhelming.
            </TextAnimate>
            <TextAnimate delay={10000} animation="scaleUp" as="h1">
              It moves with purpose, light as a shadow, and as adaptable as the fox itself.
            </TextAnimate>
          </div>}
        </motion.div>
      </div>

      <div className="grid grid-cols-2 xs:gap-2 sm:gap-5 items-center">
        <RainbowButton
          onClick={() => router.push('/documentation/getting-started')}
          className="py-1 lg:pl-5 lg:pr-3 xs:pl-4 xs:pr-2 justify-self-end"
        >
          <div className="flex justify-center items-center space-x-1">
            <span>Getting Started</span>
            <ArrowRight />
          </div>
        </RainbowButton>
        <button
          onClick={() =>
            toast(
              <>
                Welcome to React Fox Toast!
              </>,
              {
                position: 'top-center',
                icon: (
                  <div className="flex size-8 items-center justify-center rounded-lg bg-yellow-300">
                    <Image src="/logos/fox4.png" alt={`fox_logo`} width={20} height={20} />
                  </div>
                )
              }
            )
          }
          className="rounded-xl sm:px-5 xs:px-3 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-white shadow-sm text-black justify-self-start">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-yellow-300 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="grid grid-cols-5 py-1 xs:gap-1 sm:gap-2 relative text-black transition duration-300 group-hover:text-yellow-800 ease items-center justify-center">
            <Image className="col-span-1" src="/logos/fox4.png" alt="fox_logo" width={25} height={25} />
            <span className="col-span-4" >{isMobile ? "Try it Yourself" : "Try it out Yourself"}</span>
          </span>
        </button>
      </div>
      <div className="z-10 grid grid-cols-1 gap-2 min-h-20 items-center justify-center">
        <div
          className="cursor-pointer col-span-1 flex items-center justify-self-center"
          onClick={() => window.open("https://github.com/sanjayc208/react-fox-toast", "_blank")}
        >
          <AnimatedGradientText>
            <Image
              src={'/static/github-mark.svg'}
              alt="Icon"
              width={20}
              height={20}
            />
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Github
            </span>
          </AnimatedGradientText>
        </div>

        {/* <div className="col-span-1 flex justify-self-start">
          <button onClick={() => window.open("https://www.buymeacoffee.com/sanjayc208", "_blank")}>
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              width="150"
            />
          </button>
        </div> */}
      </div>

      <div ref={onScreenRef || undefined} className="mx-auto xs:px-4 lg:px-20 md:lg:px-12 sm:lg:px-12 py-5 lg:min-h-[630px]">
        {onScreenVisible && <TypingAnimation
          className="text-4xl mb-4 mt-6 font-bold text-black dark:text-white"
          text="🚀 Toast It Your Way"
          duration={100}
        />}
        <ToastDemo />
      </div>

      <TypingAnimation
        className="text-4xl mb-6 underline font-bold text-black dark:text-white"
        text="Why Should You Use This Toast?"
        duration={100}
      />

      <div className="max-w-fit mx-auto my-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="xs:w-[22rem] xs:max-w-[22rem] lg:max-w-[400px] lg:min-w-[400px] p-3">

            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
              Supercharge Your UI with React Toast
            </h1>
            <p className="text-xl text-muted-foreground">
              Lightweight. Flexible. Powerful. Everything you need, nothing you don't.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Why Developers Will Love It</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fully customizable: position, duration, content.</li>
                  <li>Supports promises for dynamic messages.</li>
                  <li>Expandable toasts for more content.</li>
                  <li>Global container for easy management.</li>
                  <li>TailwindCSS-ready for quick styling.</li>
                  <li>Pause on hover to control timing.</li>
                  <li>Ultra-lightweight with no performance hit.</li>
                </ul>
              </CardContent>
            </Card>

          </div>
          <AnimatedListDemo className="xs:w-[22rem] xs:max-w-[22rem] lg:max-w-[33rem] lg:w-[33rem]" />
        </div>
      </div>

      {/* Avoid flickering issue when scrolled down with toast open */}
      <div className="w-full py-2">
      </div>

      <footer className="w-full mt-8 bg-[#e0e0d6] text-gray-800 border-t border-gray-300">
        <div className="flex items-center justify-center p-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} <b>react-fox-toast</b> by <b>Sanjay Rajeev</b>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}