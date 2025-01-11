
'use client';
import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CircleX, CheckCircle, Info, Rocket, Clock } from 'lucide-react'
import CustomSyntaxHighlighter from '@/components/modules/custom-syntax-highlighter'

export default function Types() {

  return (
  <div className="space-y-3">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
          Success Toast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
          tabs={{
            'jsx': {
              syntax: `toast.success("Operation Successful!");`,
              language: 'jsx'
            }
          }}
        />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CircleX color="#df2121" className="mr-2 h-5 w-5" />
          Error Toast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
          tabs={{
            'jsx': {
              syntax: `toast.error("Something went wrong!");`,
              language: 'jsx'
            }
          }}
        />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertCircle color='#FFA500' className="mr-2 h-5 w-5" />
          Warning Toast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
          tabs={{
            'jsx': {
              syntax: `toast.warning("This is some warning.");`,
              language: 'jsx'
            }
          }}
        />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Info className="mr-2 h-5 w-5 text-blue-500" />
          Info Toast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
          tabs={{
            'jsx': {
              syntax: `toast.info("This is some information.");`,
              language: 'jsx'
            }
          }}
        />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-yellow-500" />
          Promise Toast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
          tabs={{
            'jsx': {
              syntax: `toast.promise(
fetchData(), // Your promise function
{
loading: 'Loading data...',
success: 'Data loaded successfully!',
error: 'Failed to load data!',
}
);`,
              language: 'jsx'
            }
          }}
        />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Rocket className="mr-2 h-5 w-5 text-purple-500" />
          Custom Toast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CustomSyntaxHighlighter className="w-full border rounded-lg overflow-x-auto shadow-lg"
          tabs={{
            'jsx': {
              syntax: `toast('Customize toast here');

//or you can use toast.custom() also
toast.cusotm('Customize toast here');                   `,
              language: 'jsx'
            }
          }}
        />
      </CardContent>
    </Card>
  </div>
  )
}