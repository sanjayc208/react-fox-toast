'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast, ToastPosition } from 'react-fox-toast';
import {
  CheckCircle,
  Smile,
  Paintbrush,
  Clock,
  Expand,
  CircleX,
  Info,
  X,
  AlertCircle,
  MailOpen,
  PanelTopOpen,
} from 'lucide-react';
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

const ToastDemo = () => {
  const [codeSyntax, setCodeSyntax] = useState<string>(
    "\ntoast.success('Successfully Generated Toast,'{\n    position:'bottom-center'\n})"
  );
  const [selectedPosition, setSelectedPosition] =
    useState<ToastPosition>('top-center');

  const showSuccess = () => {
    toast.success('Successfully Generated Toast', {
      position: selectedPosition ? selectedPosition : undefined,
    });

    setCodeSyntax(`
toast.success('Successfully Generated Toast'${
      selectedPosition
        ? `, {
    position: '${selectedPosition}'
})`
        : ')'
    }
`);
  };

  const showError = () => {
    toast.error('Error Generated Toast', {
      position: selectedPosition ? selectedPosition : undefined,
    });

    setCodeSyntax(`
toast.error('Error Generated Toast'${
      selectedPosition
        ? `, {
    position: '${selectedPosition}'
})`
        : ')'
    }
`);
  };

  const showInfo = () => {
    toast.info('Information Generated Toast', {
      position: selectedPosition ? selectedPosition : undefined,
    });

    setCodeSyntax(`
toast.info('Information Generated Toast'${
      selectedPosition
        ? `, {
    position: '${selectedPosition}'
})`
        : ')'
    }
`);
  };

  const showWarning = () => {
    toast.warning('Warning Generated Toast', {
      position: selectedPosition ? selectedPosition : undefined,
    });

    setCodeSyntax(`
toast.warning('Warning Generated Toast'${
      selectedPosition
        ? `, {
    position: '${selectedPosition}'
})`
        : ')'
    }
`);
  };

  const showCustom = () => {
    toast.custom(<div>Custom JSX component</div>, {
      position: selectedPosition ? selectedPosition : undefined,

      icon: (
        <div className="flex size-8 items-center justify-center rounded-xl bg-yellow-200">
          <Image
            src="/logos/fox4.png"
            alt={`fox_logo`}
            width={20}
            height={20}
          />
        </div>
      ),
    });

    setCodeSyntax(`
toast.custom(
  <>Custom JSX component</>,${
    selectedPosition
      ? `
  {  
    position: '${selectedPosition}',`
      : ''
  }
    icon: (
        <div className='flex size-8 items-center justify-center rounded-lg bg-yellow-300'>
            <img src="/logos/fox4.png" alt='fox_logo' width={20} height={20}/>
        </div>
    )
})
`);
  };

  const showDefaultClostButton = () => {
    toast.custom(<>Toast Bar with close Btn</>, {
      position: selectedPosition ? selectedPosition : undefined,
      isCloseBtn: true,
    });
    setCodeSyntax(`
const type = 'success' | 'error' | 'info' | 'custom'

toast[type](<>Toast Bar with close Btn</>,${
      selectedPosition
        ? `{
  position: '${selectedPosition}',`
        : ''
    }
  isCloseBtn: true
})
`);
  };

  const showEnvelope = () => {
    toast.envelope(
      <div className="flex items-center gap-2 text-md font-medium">
        🎉Achievement Unlocked!🎉
      </div>,
      {
        expandedContent: (
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-amber-900">
              Explorer Badge Earned!
            </h3>
            <p className="text-sm text-amber-800">
              You've opened 50+ messages this week 🏆
            </p>
            <div className="pt-4">
              <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 transition-all duration-1000 w-75" />
              </div>
              <p className="text-xs text-amber-600 mt-2">
                Progress to next level: 75/100
              </p>
            </div>
          </div>
        ),
        position: selectedPosition ? selectedPosition : undefined,
      }
    );
    setCodeSyntax(`toast.envelope(
<div className="flex items-center text-md">🎉Achievement Unlocked!🎉</div>,
{${
      selectedPosition
        ? `
  position: '${selectedPosition}',`
        : ''
    }
  expandedContent: (
    <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-amber-900">Explorer Badge Earned!</h3>
        <p className="text-sm text-amber-800">You've opened 50+ messages this week 🏆</p>
        <div className="pt-4">
        <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 transition-all duration-1000 w-75"/>
        </div>
        <p className="text-xs text-amber-600 mt-2">Progress to next level: 75/100</p>
        </div>
    </div>)
})
`);
  };

  const showDrawer = () => {
    toast.drawer(
      <div className="flex flex-col pl-4">
        <p className="font-semibold">New Message!</p>
        <p className="text-sm text-gray-600">From: React Fox Team</p>
      </div>,
      {
        position: selectedPosition ? selectedPosition : undefined,
        expandedContent: (
          <div className="p-4 bg-white lg max-w-md ">
            <h3 className="font-bold mb-4">React Fox Team</h3>
            <div className="space-y-4 border-t pt-4">
              <p className="text-gray-700">
                Hey there! 👋 Thanks for using React Fox Toast!
              </p>
              <p className="text-gray-600">
                This expanded drawer is perfect for showing detailed content
                like messages, notifications, or even quick forms!
              </p>
            </div>
          </div>
        ),
      }
    );
    setCodeSyntax(`toast.drawer(<div className="flex flex-col pl-4">
  <p className="font-semibold">New Message!</p>
  <p className="text-sm text-gray-600">From: React Fox Team</p>
</div>,
{${
      selectedPosition
        ? `
  position: '${selectedPosition}',`
        : ''
    }
  expandedContent: (
    <div className="p-4 bg-white lg max-w-md ">
        <h3 className="font-bold mb-4">React Fox Team</h3>
        <div className="space-y-4 border-t pt-4">
            <p className="text-gray-700">Hey there! 👋 Thanks for using React Fox Toast!</p>
            <p className="text-gray-600">This expanded drawer is perfect for showing detailed content like messages, notifications, or even quick forms!</p>
        </div>
  </div>)
})
`);
  };

  const showPromise = () => {
    const fetchData = () => new Promise((resolve) => setTimeout(resolve, 2000));
    toast.promise(fetchData(), {
      loading: 'Loading data...',
      success: 'Data loaded successfully!',
      error: 'Failed to load data!',
      position: selectedPosition ? selectedPosition : undefined,
    });

    setCodeSyntax(`
toast.promise(fetchData(), {
  loading: 'Loading data...',
  success: 'Data loaded successfully!',
  error: 'Failed to load data!'${
    selectedPosition
      ? `,
  position: '${selectedPosition}'`
      : ''
  }
})
`);
  };

  const showExpandable = () => {
    toast.custom(
      <>
        Custom Expandable Toast{' '}
        <span className="text-xs text-blue-600">click for more details...</span>
      </>,
      {
        position: selectedPosition ? selectedPosition : undefined,
        expandedContent: (
          <div className="justify-items-center">
            <p>Showing more and more data...</p>
            <p>Showing more and more data...</p>
            <p>Showing more and more data...</p>
            <p>Showing more and more data...</p>
            <Button variant="outline" size="sm">
              Example button
            </Button>
          </div>
        ),
      }
    );
    setCodeSyntax(`toast.custom(
<>Custom Expandable Toast <span className="text-xs text-blue-600">click for more details...</span></>,
{${
      selectedPosition
        ? `
  position: '${selectedPosition}',`
        : ''
    }
  expandedContent: (
    <div className='justify-items-center'>
        <p>Showing more and more data...</p>
        <p>Showing more and more data...</p>
        <Button variant="outline" size="sm">Example button</Button>
    </div>
  )
})
`);
  };

  const showTailwindCSS = () => {
    toast.success('Success data with Tailwind Css', {
      position: selectedPosition ? selectedPosition : undefined,
      className: 'bg-[#282c34] text-[#e5e5e5] rounded-3xl',
    });
    setCodeSyntax(`
toast.success('Success data with Tailwind Css',{
  className: 'bg-[#282c34] text-[#e5e5e5] rounded-3xl',${
    selectedPosition
      ? `
  position: '${selectedPosition}'`
      : ''
  }
})
`);
  };

  const showCustonIcon = () => {
    toast.success('Success data with Tailwind Css', {
      position: selectedPosition ? selectedPosition : undefined,
      icon: '👍',
    });
    setCodeSyntax(`
toast.success('Success data with Tailwind Css',{
  icon: '👍'${
    selectedPosition
      ? `,
  position: '${selectedPosition}'`
      : ''
  }
})
`);
  };

  return (
    <>
      {/* Position List */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-3xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center underline">
            Select Position & Click Any Button
          </h2>
          <RadioGroup
            value={selectedPosition}
            onValueChange={setSelectedPosition}
            className="flex flex-wrap justify-center gap-4"
          >
            {positions.map((position) => (
              <div key={position} className="flex items-center space-x-2">
                <RadioGroupItem value={position} id={position} />
                <Label htmlFor={position} className="text-sm whitespace-nowrap">
                  {position}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Example List */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 xs:px-4 lg:px-20 md:lg:px-12 sm:lg:px-12 ">
        <div className="grid grid-cols-2 gap-4 flex-none lg:w-[45%] lg:max-h-[200px]">
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showSuccess}
          >
            <CheckCircle color="#159d12" />
            Success
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showError}
          >
            <CircleX color="#df2121" />
            Error
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showInfo}
          >
            <Info color="#2a47eb" />
            Info
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showWarning}
          >
            <AlertCircle color="#FFA500" />
            Warning
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showCustom}
          >
            <Paintbrush />
            Custom JSX/TSX
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showPromise}
          >
            <Clock />
            Promise
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showExpandable}
          >
            <Expand />
            Expandable
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showCustonIcon}
          >
            <Smile />
            Custom Icon
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showTailwindCSS}
          >
            <img
              alt="Icon"
              className="w-5 h-4 mr-2"
              src="/static/tailwindcss-logo-64px.png"
            />
            Tailwind CSS
          </Button>

          <Button
            className="bg-white text-black hover:bg-gray-100"
            onClick={showDefaultClostButton}
          >
            <X />
            Close Button
          </Button>
          <Button
            className="bg-white text-black col-span-1 hover:bg-gray-100 relative"
            onClick={showEnvelope}
          >
            <MailOpen /> Envelope
            <Badge
              variant="outline"
              className="bg-red-600 px-1.5 text-white absolute top-0 right-2 transform translate-x-1/2 -translate-y-1/2 rounded-lg"
            >
              {' '}
              New
            </Badge>
          </Button>
          <Button
            className="bg-white text-black col-span-1 hover:bg-gray-100 relative"
            onClick={showDrawer}
          >
            <PanelTopOpen /> Drawer
            <Badge
              variant="outline"
              className="bg-red-600 px-1.5 text-white absolute top-0 right-2 transform translate-x-1/2 -translate-y-1/2 rounded-lg"
            >
              {' '}
              New
            </Badge>
          </Button>
        </div>
        <CustomSyntaxHighlighter
          //  language='JSX'
          className="flex-none lg:w-1/2"
          // codeSyntax={codeSyntax}
          tabs={{
            jsx: {
              syntax: codeSyntax,
              language: 'jsx',
            },
          }}
        />
      </div>
    </>
  );
};

export default ToastDemo;
