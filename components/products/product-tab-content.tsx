"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"

export default function ProductTabContent({ product }) {
  const [regionTab, setRegionTab] = useState(product.regions[0]?.id || "")

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-full flex">
          <div className="relative w-full rounded-sm overflow-hidden border border-gray-200">
            <div className="aspect-[4/3] w-full relative">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-sm border border-gray-200">
          <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
          <p className="text-text-color/80 mb-6">{product.description}</p>

          <div className="space-y-4">
            {product.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                <p className="text-text-color/80 text-sm">{feature}</p>
              </div>
            ))}
          </div>

          {product.externalLink && (
            <Button className="mt-6 w-full bg-primary hover:bg-primary/90 rounded-sm">
              <Link href={product.externalLink} target="_blank" className="flex items-center">
                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {product.regions && product.regions.length > 0 && (
        <div className="bg-white p-6 rounded-sm border border-gray-200">
          <h3 className="text-xl font-bold mb-6">Regional Availability</h3>

          <Tabs defaultValue={product.regions[0]?.id} value={regionTab} onValueChange={setRegionTab} className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mb-6 bg-gray-100 p-1 rounded-sm">
              {product.regions.map((region) => (
                <TabsTrigger
                  key={region.id}
                  value={region.id}
                  className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {region.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {product.regions.map((region) => (
              <TabsContent key={region.id} value={region.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Available Products</h4>
                    <ul className="space-y-2">
                      {region.products.map((prod, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                          <span>{prod}</span>
                        </li>
                      ))}
                    </ul>

                    {region.contactInfo && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
                        <p className="text-text-color/80 text-sm">{region.contactInfo}</p>
                      </div>
                    )}
                  </div>

                  {region.facilities && region.facilities.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Facilities</h4>
                      <div className="space-y-3">
                        {region.facilities.map((facility, index) => (
                          <div key={index} className="flex items-start">
                            <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <div>
                              <p className="font-medium">{facility.name}</p>
                              <p className="text-text-color/70 text-sm">{facility.address}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      <div className="bg-white p-6 rounded-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-6">Project Applications</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.applications.map((application, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={application.image || "/placeholder.svg"}
                  alt={application.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">{application.title}</h4>
                <p className="text-text-color/70 text-sm mb-4">{application.description}</p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {product.technicalDocuments && product.technicalDocuments.length > 0 && (
        <div className="bg-white p-6 rounded-sm border border-gray-200">
          <h3 className="text-xl font-bold mb-6">Technical Documents</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.technicalDocuments.map((doc, index) => (
              <Link
                key={index}
                href={doc.url}
                className="flex items-center p-4 border border-gray-200 rounded-sm hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mr-4">
                  <doc.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{doc.title}</p>
                  <p className="text-text-color/70 text-xs">
                    {doc.fileType} • {doc.fileSize}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
