'use client';
// import Link from "next/link"
import GettingStarted from '@/components/sections/getting-started';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import React from 'react';

import { useSidebarStore } from '@/store/useSideBarStore'; // Import Zustand store

export default function GettingStartedPage() {
  const { setContent, setVisibility } = useSidebarStore();

  React.useEffect(() => {
    setVisibility(true);
    // Set sidebar content and visibility
    setContent([
      {
        title: 'Getting Started',
        url: '/documentation/getting-started',
        items: [
          {
            url: '/documentation/getting-started#installation-step-video',
            title: 'Installation Video',
          },
          {
            url: '/documentation/getting-started#installation-step-1',
            title: 'Installation Step 1',
          },
          {
            url: '/documentation/getting-started#installation-step-2',
            title: 'Installation Step 2',
          },
          {
            url: '/documentation/getting-started#installation-step-3',
            title: 'Installation Step 3',
          },
        ],
      },
    ]);

    // Cleanup on unmount
    return () => {
      setContent(null); // Reset the content when leaving the page
      setVisibility(false); // Optionally hide the sidebar
    };
  }, []);

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Getting Started</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Welcome to our documentation. This page will help you get started with
          our library.
        </p>
      </div>

      <h2 className="mb-2 text-2xl font-semibold">Installation Steps Video</h2>

      <div className="flex flex-col sm:space-x-8">
        {/* <ul className="list-inside list-disc space-y-2 flex-1">
      <li>
        <Link href="/documentation/api/toast" className="text-primary hover:underline">
          Learn about the toast() function
        </Link>
      </li>
      <li>
        <Link href="/documentation/api/toast-container" className="text-primary hover:underline">
          Understand the ToastContainer component
        </Link>
      </li>
      <li>
        <Link href="/documentation/styling/theming" className="text-primary hover:underline">
          Customize your toasts with theming
        </Link>
      </li>
    </ul> */}

        <div
          id="installation-step-video"
          className="flex-none mt-4 sm:mt-0 sm:w-3/5 radius-lg"
        >
          {/* <h3 className="underline">Installation Steps Video</h3> */}
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="/instructions/installation/video.mp4"
            thumbnailSrc="/instructions/installation/thumbnail.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>

      <h2 className="mt-8 mb-2 text-2xl font-semibold">Installation Steps</h2>
      <GettingStarted />
    </div>
  );
}
