'use client';
import React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter'

export default function ToastAPIPage() {
    return (

        <Card id="basic-usage">
            <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>How to use the toast() API in your components</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap sm:flex-nowrap mt-4 sm:mt-0">
                <div className="w-full sm:w-1/2 pr-2">
                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg"
                        tabs={{
                            'jsx': {
                                syntax: `import { toast } from "react-fox-toast";

function MyComponent() {
  const showToast = () => {
    toast("Toast it Yourself");
  };

  return <Button onClick={showToast}>
          Successfully Generated Toast
        </Button>;
}`,
                                language: 'jsx'
                            }
                        }}
                    />
                </div>

                <div className="w-full sm:w-1/2 mt-4 sm:mt-0 content-center">
                    {/* <h2 className="text-2xl font-semibold text-center mb-2 underline">Preview</h2> */}
                    <video className="rounded-lg lg:max-h-80" autoPlay loop muted playsInline style={{ pointerEvents: "none" }}>
                        <source src="/instructions/toast-api/usage.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </CardContent>
        </Card>
    )
}