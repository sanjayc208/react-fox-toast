"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { Paintbrush, Expand, Pause, Feather, User } from 'lucide-react'

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Light Weight",
    // description: "Magic UI",
    // time: "15m ago",

    icon: <Feather />,
    color: "#00C9A7",
  },
  {
    name: "Easy To use",
    // description: "Magic UI",
    // time: "10m ago",
    icon: <User />,
    color: "#FFB800",
  },
  {
    name: "Tailwind CSS Support",
    // description: "Magic UI",
    // time: "5m ago",
    icon: <img alt="Icon"
    className="w-6 h-4" src="/static/tailwindcss-logo-64px.png" />,
    color: "#f0f0f0" //"#FF3D71",
  },
  {
    name: "Highly Customizable",
    // description: "Magic UI",
    icon: <img
    src="/logos/fox4.png"
    width={30}
    height={10}
    alt="Fox Logo"
  />,
    color: "#FEF08A",
  },
  {
    name: "Expandable",
    // description: "Magic UI",
    icon: <Expand />, //"🗞️",
    color: "#8ce3f9" //"#1E86FF",
  },
  {
    name: "Custom Class / Style support",
    // description: "Magic UI",
    icon: <Paintbrush />, //"👷🏽",
    color: "#bd8cf9 " //"#1E86FF",
  },
  {
    name: "Pause on Hover",
    // description: "Magic UI",
    icon: <Pause />, //"👷🏽",
    color: "#c4f98c  " //"#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification: any = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            {/* <span className="mx-1">·</span> */}
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-4 overflow-hidden ",
        className,
      )}
    >
      <AnimatedList delay={1000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
