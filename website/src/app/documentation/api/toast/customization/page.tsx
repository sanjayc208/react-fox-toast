'use client';
import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export default function Customization() {
    return (
        <Card
            id="customization-options"
            className="xs:max-w-[95vw] md:max-w-full"
        >
            <CardHeader>
                <CardTitle>Customization Options</CardTitle>
                <CardDescription>
                    Available options for customizing toasts
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-black font-bold">
                                Option
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Type
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Description
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Possible Values
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Default
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                position
                            </TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>
                                Determines where the toast appears on the screen
                            </TableCell>
                            <TableCell>
                                'top-left', 'top-right', 'top-center',
                                'bottom-left', 'bottom-right', 'bottom-center'
                            </TableCell>
                            <TableCell>
                                <code>'bottom-right'</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                duration
                            </TableCell>
                            <TableCell>number</TableCell>
                            <TableCell>
                                How long the toast stays visible (in
                                milliseconds)
                            </TableCell>
                            <TableCell>
                                Any positive number, or Infinity for persistent
                                toasts
                            </TableCell>
                            <TableCell>
                                <code>5000</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                isCloseBtn
                            </TableCell>
                            <TableCell>boolean</TableCell>
                            <TableCell>
                                Whether to show a close button on the toast
                            </TableCell>
                            <TableCell>true, false</TableCell>
                            <TableCell>
                                <code>true</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                expandedContent
                            </TableCell>
                            <TableCell>ReactNode</TableCell>
                            <TableCell>
                                Additional content shown when the toast is
                                expanded
                            </TableCell>
                            <TableCell>
                                Any valid React element or component
                            </TableCell>
                            <TableCell>
                                <code>undefined</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                className
                            </TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>
                                Custom CSS classes to apply to the toast
                            </TableCell>
                            <TableCell>Any valid CSS class names</TableCell>
                            <TableCell>
                                <code>''</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">icon</TableCell>
                            <TableCell>ReactNode</TableCell>
                            <TableCell>
                                Custom icon to display in the toast
                            </TableCell>
                            <TableCell>
                                Any valid React element or component
                            </TableCell>
                            <TableCell>
                                Default icon based on toast type
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                iconStyle
                            </TableCell>
                            <TableCell>React.CSSProperties</TableCell>
                            <TableCell>
                                Inline styles to apply to the toast icon
                            </TableCell>
                            <TableCell>
                                Any valid CSS properties in object format
                            </TableCell>
                            <TableCell>
                                <code>{'{}'}</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                iconClassName
                            </TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>
                                Custom CSS classes to apply to the toast icon
                            </TableCell>
                            <TableCell>
                                Any valid CSS class names or Tailwind classes
                            </TableCell>
                            <TableCell>
                                <code>''</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                expandedContentClassName
                            </TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>
                                Custom CSS classes to apply to the expanded
                                content
                            </TableCell>
                            <TableCell>
                                Any valid CSS class names or Tailwind classes
                            </TableCell>
                            <TableCell>
                                <code>''</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                expandedContentStyle
                            </TableCell>
                            <TableCell>React.CSSProperties</TableCell>
                            <TableCell>
                                Inline styles to apply to the expanded content
                            </TableCell>
                            <TableCell>
                                Any valid CSS properties in object format
                            </TableCell>
                            <TableCell>
                                <code>{'{}'}</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                closeBtnStyle
                            </TableCell>
                            <TableCell>React.CSSProperties</TableCell>
                            <TableCell>
                                Inline styles to apply to the expanded content
                            </TableCell>
                            <TableCell>
                                Any valid CSS properties in object format
                            </TableCell>
                            <TableCell>
                                <code>{'{}'}</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                isPausedOnHover
                            </TableCell>
                            <TableCell>boolean</TableCell>
                            <TableCell>
                                Whether to pause the toast timer on hover
                            </TableCell>
                            <TableCell>true, false</TableCell>
                            <TableCell>
                                <code>true</code>
                            </TableCell>
                        </TableRow>
                        {/* Add new TableRow for aria prop */}
                        <TableRow>
                            <TableCell className="font-medium">aria</TableCell>
                            <TableCell>object</TableCell>
                            <TableCell>
                                Accessibility attributes for screen readers
                            </TableCell>
                            <TableCell>
                                Object with optional 'role' and 'label' keys
                            </TableCell>
                            <TableCell>
                                <code>
                                    {
                                        '{ role: "status", label: "Notification" }'
                                    }
                                </code>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div id="customization-example" className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">
                        Usage Example:
                    </h3>
                    <CustomSyntaxHighlighter
                        className="w-full border rounded-lg overflow-x-auto shadow-lg mb-4"
                        tabs={{
                            jsx: {
                                syntax: `toast.success("Operation Successful!", {
    position: 'top-right',
    duration: 5000,
    isCloseBtn: true,
    expandedContent: <div>Additional details about the operation</div>,
    className: 'custom-toast-class',
    icon: <CustomSuccessIcon />,
    iconStyle: { color: 'green' },
    iconClassName: 'text-2xl',
    expandedContentClassName: 'bg-gray-100 p-2',
    expandedContentStyle: { maxHeight: '100px', overflow: 'auto' },
    closeBtnStyle: { backgroundColor: 'green' },
    isPausedOnHover: false,
    aria: { 
        role: 'alert',
        label: 'Important notification' 
    },
});`,
                                language: 'jsx',
                            },
                        }}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
