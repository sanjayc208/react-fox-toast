'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon } from 'lucide-react'

const CustomSyntaxHighlighter = ({codeSyntax, className}:{codeSyntax: string, className: string}) => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSyntax)
    }

    return (
        <div className={className}>
            <div className="border rounded-t-lg overflow-hidden shadow-lg">
                <div className="bg-gray-800 text-white p-2 flex justify-between items-center max-h-8">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span>JSX</span>
                    <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                        <CopyIcon className="h-4 w-4" />
                    </Button>
                </div>
                <SyntaxHighlighter
                    language="jsx"
                    style={oneDark}
                    customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}
                >
                    {codeSyntax}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default CustomSyntaxHighlighter

