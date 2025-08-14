"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, X, CheckCircle } from "lucide-react"
import { formatFileSize, validateDocumentFile } from "@/utils/file-utils"
import Image from "next/image"

export default function DropCVPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const error = validateDocumentFile(file)
      if (error) {
        alert(error)
        return
      }
      setCvFile(file)
    }
  }

  const removeCVFile = () => {
    setCvFile(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email || !cvFile) {
      alert("Please fill in all required fields and upload your CV")
      return
    }

    // Simulate form submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <Card className="rounded-sm text-center">
              <CardContent className="p-12">
                <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-6" />
                <h1 className="text-3xl font-bold text-text-color mb-4">Thank You!</h1>
                <p className="text-lg text-text-color/80 mb-6">
                  Your CV has been successfully submitted. Our HR team will review your application and contact you if
                  there's a suitable opportunity.
                </p>
                <div className="space-y-2 text-text-color/60">
                  <p>We typically respond within 2-3 business days.</p>
                  <p>Keep an eye on your email for updates!</p>
                </div>
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-sm"
                >
                  Back to Home
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-text-color mb-4">Drop Your CV</h2>
            <p className="text-text-color/80 max-w-2xl">
              Join the YTL Family! Explore our current job openings across different locations and departments.
            </p>
          </div>
          <Card className="rounded-sm">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-2xl font-semibold text-text -color">Submit Your Application</CardTitle>
              <CardDescription className="text-base text-text-color/80">
                Fill in your details and upload your CV. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">
                    Personal Information
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-base font-medium text-text-color">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="rounded-sm text-text-color placeholder:text-text-color/60"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-medium text-text-color">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="rounded-sm text-text-color placeholder:text-text-color/60"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium text-text-color">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="rounded-sm text-text-color placeholder:text-text-color/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-medium text-text-color">
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about yourself, your interests, or specific roles you're looking for..."
                        className="rounded-sm min-h-[120px] text-text-color placeholder:text-text-color/60"
                        rows={5}
                      />
                    </div>
                  </div>
                </div>

                {/* CV Upload Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">
                    Upload Your CV *
                  </h3>

                  <div className="bg-blue-50 p-4 rounded-sm border border-blue-200">
                    <p className="text-base text-blue-800">
                      <strong>CV Requirements:</strong>
                      <br />• PDF format preferred for best compatibility
                      <br />• Include your contact information, work experience, and education
                      <br />• Acceptable formats: PDF, DOC, DOCX
                      <br />• Maximum file size: 10MB
                    </p>
                  </div>

                  {!cvFile ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-sm p-8 text-center hover:border-primary transition-colors">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <div className="space-y-2">
                        <label htmlFor="cvFile" className="cursor-pointer">
                          <span className="text-base font-medium text-primary hover:text-primary/80">
                            Click to upload your CV
                          </span>
                          <input
                            id="cvFile"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleCVChange}
                            className="hidden"
                          />
                        </label>
                        <p className="text-base text-text-color/60">or drag and drop</p>
                        <p className="text-base text-text-color/50">Supported formats: PDF, DOC, DOCX</p>
                      </div>
                    </div>
                  ) : (
                    <div className="border border-gray-200 rounded-sm p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-8 w-8 text-primary" />
                          <div>
                            <p className="text-base font-medium text-text-color">{cvFile.name}</p>
                            <p className="text-base text-text-color/60">{formatFileSize(cvFile.size)}</p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={removeCVFile}
                          className="rounded-sm text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Privacy Notice */}
                <div className="bg-gray-50 p-4 rounded-sm border border-gray-200">
                  <h4 className="text-base font-semibold text-text-color mb-2">Privacy & Data Protection</h4>
                  <p className="text-base text-text-color/70">
                    Your personal information and CV will be kept confidential and used solely for recruitment purposes.
                    We comply with all data protection regulations and will only contact you regarding relevant job
                    opportunities.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-12 py-3 rounded-sm text-lg font-medium transition-colors duration-300"
                  >
                    Submit CV
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
