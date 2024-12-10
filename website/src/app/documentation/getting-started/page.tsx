import Link from "next/link"
import GettingStarted from '@/components/welcome/getting-started'

export default function GettingStartedPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-4 text-3xl font-bold">Getting Started</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Welcome to our documentation. This page will help you get started with our library.
      </p>
      <h2 className="mb-2 text-2xl font-semibold">Quick Links</h2>
      <ul className="list-inside list-disc space-y-2">
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
      </ul>
      <h2 className="mt-8 mb-2 text-2xl font-semibold">Installation</h2>
      <p className="mb-4">To get started, install our library using npm:</p>
      <GettingStarted />

    </div>
  )
}

