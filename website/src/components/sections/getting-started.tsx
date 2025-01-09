'use client';

import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter'

const secondStepInstallation = `import { ToastContainer } from "react-fox-toast"

// Add ToastContainer to Main application component 
const App = () => {
  return (
    <div>
      <ToastContainer /> 
    </div>
  )
}    
`

const thirdStepInstallation = `import { toast } from "react-fox-toast"

// Use this toast functionality on any component
toast.success('Successfully created a toast')`



const GettingStarted = () => {
 
    return (<div className="max-w-fit mx-auto my-4">

        <div className="flex lg:lg:gap-x-3 xs:gap-x-1">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="flex justify-center items-center size-5 rounded-full bg-gray-400 dark:bg-neutral-600">
                <span className="text-defaultBase text-lg font-semibold">1</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pt-0.5 pb-8">
          <div className="w-[368px] max-w-[368px]">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">

              Install package with npm / pnpm / yarn
            </h3>
            </div>
            <CustomSyntaxHighlighter className="xs:w-[20rem] xs:max-w-[22rem] lg:max-w-[31rem] lg:w-[31rem] border rounded-lg overflow-x-auto shadow-lg"
              tabs={{
                'npm':{
                  syntax: `npm i react-fox-toast`,
                },
                'pnpm':{
                  syntax: `pnpm add react-fox-toast`,
                },
                'yarn':{
                  syntax: `yarn i react-fox-toast`
                }
                
              }}
              />
          </div>
        </div>

        <div className="flex lg:gap-x-3 xs:gap-x-1">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="flex justify-center items-center size-5 rounded-full bg-gray-400 dark:bg-neutral-600">
                <span className="text-defaultBase text-lg font-semibold">2</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pt-0.5 pb-8">

            <div className="w-[368px] max-w-[368px] ">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Add 'ToastContainer' on top of the Application
              </h3>
              <p>Adding ToastContainer on the Component where 'toast' hook will be used also works</p>
            </div>
            <CustomSyntaxHighlighter className="xs:w-[20rem] xs:max-w-[22rem] lg:max-w-[31rem] lg:w-[31rem] border rounded-lg overflow-x-auto shadow-lg"
              tabs={{
                'jsx': {
                  syntax: secondStepInstallation,
                  language: 'jsx'
                }
              }}
              />
          </div>
        </div>

        <div className="flex lg:gap-x-3 xs:gap-x-1">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="flex justify-center items-center size-5 rounded-full bg-gray-400 dark:bg-neutral-600">
                <span className="text-defaultBase text-lg font-semibold">3</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pt-0.5 pb-8">
            <div className="w-[368px] max-w-[368px]">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Import 'toast' from 'react-fox-toast'
              </h3>
              <p>Use this in any JSX/TSX component and if using NEXT.JS then see to it that there is 'use client'; on top . Since react-fox-toast supports only
                client side
              </p>
            </div>
            <CustomSyntaxHighlighter className="xs:w-[20rem] xs:max-w-[22rem] lg:max-w-[31rem] lg:w-[31rem] border rounded-lg overflow-x-auto shadow-lg"
              tabs={{
                'jsx': {
                  syntax: thirdStepInstallation,
                  language: 'jsx'
                }
              }}
              />
          </div>
        </div>
      </div>)

}

export default GettingStarted