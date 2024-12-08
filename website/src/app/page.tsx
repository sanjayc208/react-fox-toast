
"use client";
import { toast } from "react-fox-toast"
import Meteors from "@/components/ui/meteors";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShinyButton from "@/components/ui/shiny-button";
import GradualSpacing from "@/components/ui/gradual-spacing";
import ToastDemo from "@/components/welcome/toast-example"
import AnimatedListDemo from '@/components/welcome/feature-list'
import GettingStarted from '@/components/welcome/getting-started'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {

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
      <div className="flex justify-center items-center space-x-4">
        <RainbowButton
          onClick={() => window.open("https://github.com/sanjayc208/react-fox-toast", "_blank")}
        >
          <div className="flex justify-center items-center space-x-4"><img
            src={'/static/github-mark-white.svg'}
            alt="Icon"
            className="w-5 h-5 mr-2" // Adjust size and margin
          />
            Github
          </div>
        </RainbowButton>
        <div>
          <ShinyButton className="h-[2.6rem]"
          onClick={() => toast.custom(<>Custom JSX component</>, 
            {  position: 'top-center',icon: 
                <div
                    className="flex size-8 items-center justify-center rounded-lg bg-yellow-300"
                >
                    <span className='text-lg'>🦊</span>
                </div>
                 })}>
            Try Yourself</ShinyButton></div>
      </div>

      <h1 className="max-w-fit mx-auto mb-6 mt-10 text-3xl underline">Getting Started</h1>
      <GettingStarted />

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
      <div className="mx-auto xs:px-4 lg:px-20 md:lg:px-12 sm:lg:px-12 py-8 lg:min-h-[630px]">
        <h1 className="text-3xl font-bold text-center mb-6">🚀 Toast It Your Way</h1>
        <ToastDemo />
      </div>

      <Card className="w-full mt-8 bg-[#e0e0d6] text-gray-800 border-t border-gray-300">
      <CardContent className="flex items-center justify-center p-4">
        <p className="text-sm text-center">
          © 2024 <b>react-fox-toast</b> by <b>Sanjay Rajeev</b>. All rights reserved.
        </p>
      </CardContent>
    </Card>
    </div>
  )
}