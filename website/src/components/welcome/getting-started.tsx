'use client';

import CustomSyntaxHighlighter from '@/components/custom-syntax-highlighter'

const secondStepInstallation = `import { ToastContainer } from "react-fox-toast"

// Add ToastContainer to Main application component 
const App = () => {
  return (
    <>
      <ToastContainer /> 
    </>
  )
`

const thirdStepInstallation = `import { toast } from "react-fox-toast"

// Use this toast functionality on any component
toast.success('Successfully created a toast')`



const GettingStarted = () => {
 
    return (<div className="max-w-fit mx-auto my-4">

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">

              STEP 1 :- Install package with npm / pnpm / yarn
            </h3>
            <CustomSyntaxHighlighter className="xs:w-[20rem] xs:max-w-[22rem] lg:max-w-[33rem] lg:w-[33rem] border rounded-lg overflow-x-auto shadow-lg"
              codeSyntax={`npm i react-fox-toast`} />
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pt-0.5 pb-8">

            <div className="max-w-[368px]">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                STEP 2 :- Add 'ToastContainer' on top of the Application
              </h3>
              <p>Adding ToastContainer on the Component where 'toast' hook will be used also works</p>
            </div>
            <CustomSyntaxHighlighter className="xs:w-[20rem] xs:max-w-[22rem] lg:max-w-[33rem] lg:w-[33rem] border rounded-lg overflow-x-auto shadow-lg"
              codeSyntax={secondStepInstallation} />
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pt-0.5 pb-8">

            <div className="max-w-[368px]">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                STEP 3 :- Import 'toast' from 'react-fox-toast'
              </h3>
              <p>Use this in any JSX/TSX component and if using NEXT.JS then see to it that there is 'use client'; on top . Since react-fox-toast supports only
                client side
              </p>
            </div>
            <CustomSyntaxHighlighter className="xs:w-[20rem] xs:max-w-[22rem] lg:max-w-[33rem] lg:w-[33rem] border rounded-lg overflow-x-auto shadow-lg"
              codeSyntax={thirdStepInstallation} />
          </div>
        </div>
      </div>)

}

export default GettingStarted