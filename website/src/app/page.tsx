
"use client";
import { toast } from "react-fox-toast"
import Meteors from "@/components/ui/meteors";
import { RainbowButton } from "@/components/ui/rainbow-button";
import GradualSpacing from "@/components/ui/gradual-spacing";
import ToastDemo from "@/components/welcome/toast-example"
import AnimatedListDemo from '@/components/welcome/feature-list'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const router = useRouter()

  return (
    <div className="">
      <div className="relative flex min-h-[400px] max-h-fit w-full flex-col items-center justify-center overflow-hidden">
        <header></header>
        <Meteors number={40} />
        <span
          className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent max-w-3xl mx-auto block"
        >
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="Welcome To"
          />
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="React 🦊 Toast"
          />
        </span>
      </div>

      <div className="flex justify-center items-center lg:space-x-3 xs:space-x-1">
        <RainbowButton
          onClick={() => router.push('/documentation/getting-started')}//window.open("https://github.com/sanjayc208/react-fox-toast", "_blank")}
          className="lg:pl-5 lg:pr-3 xs:px-2"
        >
          <div className="flex justify-center items-center space-x-3">
            <span>Getting Started</span>
            <ArrowRight />
          </div>
        </RainbowButton>
        <div>
        </div>
        <a onClick={() => toast(<>Custom JSX component</>,
          {
            position: 'top-center',
            icon:
              <div
                className="flex size-8 items-center justify-center rounded-lg bg-yellow-300"
              >
                <span className='text-lg'>🦊</span>
              </div>
          }
          )} className="rounded-xl px-5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-white shadow-sm text-black text-white">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-yellow-300 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-300 group-hover:text-yellow-800 ease space-x-2"><span className='text-md'>🦊</span><span>Try it out Yourself</span></span>
        </a>
      </div>

      <div className="z-10 flex min-h-20 items-center justify-center">
        <div className="cursor-pointer" onClick={() => window.open("https://github.com/sanjayc208/react-fox-toast", "_blank")}>
          <AnimatedGradientText>
            {/* 🎉 */}
            <img
              src={'/static/github-mark.svg'}
              alt="Icon"
              className="w-5 h-5" // Adjust size and margin
            />
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Github
            </span>
          </AnimatedGradientText>
        </div>
      </div>

      <div className="mx-auto xs:px-4 lg:px-20 md:lg:px-12 sm:lg:px-12 py-5 lg:min-h-[630px]">
        <TypingAnimation
          className="text-4xl mb-4 mt-6 font-bold text-black dark:text-white"
          text="🚀 Toast It Your Way"
          duration={100}
        />
        {/* <h1 className="text-3xl font-bold text-center mb-6">🚀 Toast It Your Way</h1> */}
        <ToastDemo />
      </div>

      <TypingAnimation
        className="text-4xl mb-6 underline font-bold text-black dark:text-white"
        text="Why Should You Use This Toast?"
        duration={100}
      />
      {/* <h1 className="max-w-fit mx-auto mb-6 mt-10 text-3xl underline">Why Use this Toast</h1> */}
      {/* <GettingStarted /> */}

      <div className="max-w-fit mx-auto my-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* <FeatureGrid /> */}
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

      <Card className="w-full mt-8 bg-[#e0e0d6] text-gray-800 border-t border-gray-300">
        <CardContent className="flex items-center justify-center p-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} <b>react-fox-toast</b> by <b>Sanjay Rajeev</b>. All rights reserved.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}