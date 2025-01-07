// import Link from "next/link"
import GettingStarted from '@/components/welcome/getting-started'
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function GettingStartedPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-4 text-3xl font-bold">Getting Started</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Welcome to our documentation. This page will help you get started with our library.
      </p>
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

        <div className="flex-none mt-4 sm:mt-0 sm:w-3/5 radius-lg">
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
      <p className="mb-4">To get started, install our library using npm:</p>
      <GettingStarted />
    </div>
  )
}