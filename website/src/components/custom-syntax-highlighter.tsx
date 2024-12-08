'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Check, Copy } from 'lucide-react'

const CustomSyntaxHighlighter = ({ codeSyntax, className, language = 'JSX' }: { codeSyntax: string, className: string, language?: string }) => {
    const [copied, setCopied] = React.useState(false);

    // Function to handle copying to clipboard
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(codeSyntax);
            setCopied(true);

            // Reset the state after 2 seconds (or any duration you prefer)
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className={className}>
            <div className="border rounded-t-lg overflow-hidden shadow-lg">
                <div className="bg-gray-800 text-white p-2 flex justify-between items-center max-h-8">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span>{language || 'JSX'}</span>
                    
                    {/* Animated Button switch when copy clicked */}
                    <Button
                        // variant="ghost"
                        size="icon"
                        onClick={copyToClipboard}
                        className="w-10 h-10 relative bg-[#1F2937] hover:bg-[#1F2937] focus:ring-0 focus:outline-none"
                    >
                        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${copied ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                            <Copy className="h-4 w-4" />
                        </span>
                        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                            <Check className="h-4 w-4" />
                        </span>
                        <span className="sr-only">{copied ? 'Copied' : 'Copy'}</span>
                    </Button>
                </div>
                <div className="transition-all duration-500 ease-in-out ">
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        customStyle={{ fontSize: '15px', margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}
                    >
                        {codeSyntax}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}

export default CustomSyntaxHighlighter

