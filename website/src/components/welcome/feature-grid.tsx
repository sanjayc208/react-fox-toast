import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Feather, Zap, Smile, Paintbrush, Expand, Pause, Sliders, Layers } from 'lucide-react'

const features = [
  { title: "Lightweight", icon: Feather },
  { title: "Easy to use", icon: Zap },
  { title: "Tailwind CSS support", icon: Paintbrush },
  { title: "Emoji Support", icon: Smile },
  { title: "Customizable", icon: Sliders },
  { title: "Promise API", icon: CheckCircle },
  { title: "Expandable", icon: Expand },
  { title: "Pause on Hover", icon: Pause },
  { title: "Customize to any extent", icon: Layers },
  { title: "Custom Class support", icon: Paintbrush },
]

export default function FeatureGrid() {
  return (
    <div className="mx-auto xs:px-4 lg:px-20 md:lg:px-12 sm:lg:px-12 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Package Advantages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-3 p-4">
              <div className="p-1.5 bg-primary/10 rounded-full">
                <feature.icon className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Key advantage of our package
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

