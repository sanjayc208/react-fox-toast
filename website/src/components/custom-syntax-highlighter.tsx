'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Check, Copy } from 'lucide-react'
import { cn } from "@/lib/utils"

interface TabInfo {
  language?: string;
  codeSyntax: string;
  icon?: string;
}

interface CustomSyntaxHighlighterProps {
  tabs: TabInfo[];
  className?: string;
}

const CustomSyntaxHighlighter: React.FC<CustomSyntaxHighlighterProps> = ({ tabs, className }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tabs[activeTabIndex].codeSyntax);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={cn("", className)}>
      <div className="bg-[#1c1c1c] text-white p-2 rounded-t-lg">
        <div className='flex items-center h-6'>
          {/* Window controls */}
          <div className="flex space-x-2 items-center mr-6">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
          </div>

          {/* Tabs */}
          <div className="flex items-center">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTabIndex(index)}
                className={cn(
                  "group relative flex items-center h-7 px-3 text-xs select-none  cursor-pointer",
                  "transition-all duration-200",
                  "mx-0.5 max-w-[200px] min-w-[60px]",
                  index === activeTabIndex
                    ? "bg-[#2a2a2a] text-white"
                    : "bg-transparent text-gray-400 hover:bg-[#252525]"
                )}
              >
                {/* Custom curved shape for active tab */}
                {index === activeTabIndex && (
                  <>
                    {/* Purple top border */}
                    <div className="absolute -top-px left-1 right-1 h-[2px] bg-yellow-500" />
                    
                    {/* Background with curved edges */}
                    <div className="absolute inset-0 bg-[#2a2a2a]">
                    </div>
                  </>
                )}
                
                {/* Tab content */}
                <div className="flex items-center space-x-2 overflow-hidden flex-1 relative z-10">
                  {tab.icon && (
                    <img 
                      src={tab.icon} 
                      alt="" 
                      className="w-4 h-4 object-contain flex-shrink-0"
                    />
                  )}
                  <span className="truncate flex-1 text-sm">
                    {tab.language || 'jsx'}
                  </span>
                  {/* <X className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" /> */}
                </div>
              </div>
            ))}
          </div>

          {/* Copy button */}
          <Button
            size="icon"
            onClick={copyToClipboard}
            className="w-8 h-8 relative bg-[#1F2937] hover:bg-[#374151] focus:ring-0 focus:outline-none ml-auto"
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
      </div>

      <div className="transition-all duration-500 ease-in-out">
        <SyntaxHighlighter
          language={tabs[activeTabIndex].language?.toLowerCase() || 'jsx'}
          style={oneDark}
          customStyle={{ 
            fontSize: '15px', 
            margin: 0, 
            borderRadius: '0 0 0.5rem 0.5rem',
            // background: '#1c1c1c' 
          }}
        >
          {tabs[activeTabIndex].codeSyntax}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CustomSyntaxHighlighter

