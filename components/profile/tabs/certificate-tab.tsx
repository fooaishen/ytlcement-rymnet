"use client"

import { useState } from "react"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X, Calendar } from "lucide-react"

interface Certificate {
  id: number
  certificationName: string
  membershipNumber: string
  dateObtained: string
  membershipExpiry: string
  attachment: File | null
}

interface CertificateTabProps {
  certificates: Certificate[]
  setCertificates: (certificates: Certificate[]) => void
}

export default function CertificateTab({ certificates, setCertificates }: CertificateTabProps) {
  const [draggedOver, setDraggedOver] = useState<number | null>(null)

  const addCertificate = () => {
    const newCertificate: Certificate = {
      id: Date.now(),
      certificationName: "",
      membershipNumber: "",
      dateObtained: "",
      membershipExpiry: "",
      attachment: null,
    }
    setCertificates([...certificates, newCertificate])
  }

  const removeCertificate = (id: number) => {
    setCertificates(certificates.filter((cert) => cert.id !== id))
  }

  const updateCertificate = (id: number, field: keyof Certificate, value: string | File | null) => {
    setCertificates(certificates.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert)))
  }

  const handleFileUpload = (id: number, file: File | null) => {
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]

      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a valid file (PDF, JPG, PNG, DOC, DOCX)")
        return
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB")
        return
      }
    }

    updateCertificate(id, "attachment", file)
  }

  const handleDragOver = (e: React.DragEvent, id: number) => {
    e.preventDefault()
    setDraggedOver(id)
  }

  const handleDragLeave = () => {
    setDraggedOver(null)
  }

  const handleDrop = (e: React.DragEvent, id: number) => {
    e.preventDefault()
    setDraggedOver(null)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileUpload(id, files[0])
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <Card className="rounded-sm border shadow-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="text-2xl font-semibold text-text-color">Professional Certificates</CardTitle>
        <CardDescription className="text-base text-text-color/80">
          Add your professional certifications, licenses, and memberships
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="border border-gray-200 rounded-sm p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-text-color">
                Certificate {certificates.indexOf(certificate) + 1}
              </h3>
              {certificates.length >= 1 && (
                <X
                  className="h-5 w-5 text-red-600 hover:text-red-700 cursor-pointer transition-colors"
                  onClick={() => removeCertificate(certificate.id)}
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Certification Name */}
              <div className="space-y-2">
                <Label
                  htmlFor={`certificationName-${certificate.id}`}
                  className="text-base font-medium text-text-color"
                >
                  Certification Name *
                </Label>
                <Input
                  id={`certificationName-${certificate.id}`}
                  type="text"
                  value={certificate.certificationName}
                  onChange={(e) => updateCertificate(certificate.id, "certificationName", e.target.value)}
                  placeholder="e.g., Project Management Professional (PMP)"
                  className="rounded-sm border-gray-300 focus:border-primary text-base focus:ring-primary text-text-color placeholder:text-text-color/60"
                />
              </div>

              {/* Membership Number */}
              <div className="space-y-2">
                <Label htmlFor={`membershipNumber-${certificate.id}`} className="text-base font-medium text-text-color">
                  Membership/License Number
                </Label>
                <Input
                  id={`membershipNumber-${certificate.id}`}
                  type="text"
                  value={certificate.membershipNumber}
                  onChange={(e) => updateCertificate(certificate.id, "membershipNumber", e.target.value)}
                  placeholder="e.g., PMI-123456"
                  className="rounded-sm border-gray-300 focus:border-primary text-base focus:ring-primary text-text-color placeholder:text-text-color/60"
                />
              </div>

              {/* Date Obtained */}
              <div className="space-y-2">
                <Label htmlFor={`dateObtained-${certificate.id}`} className="text-base font-medium text-text-color">
                  Date Obtained *
                </Label>
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
                    onClick={() => {
                      try {
                        const input = document.getElementById(`dateObtained-${certificate.id}`) as HTMLInputElement
                        if (input && typeof input.showPicker === "function") {
                          input.showPicker()
                        } else if (input) {
                          input.focus()
                          input.click()
                        }
                      } catch (error) {
                        const input = document.getElementById(`dateObtained-${certificate.id}`) as HTMLInputElement
                        if (input) {
                          input.focus()
                        }
                      }
                    }}
                  >
                    <Calendar className="h-4 w-4 text-text-color" />
                  </div>
                  <Input
                    id={`dateObtained-${certificate.id}`}
                    type="date"
                    value={certificate.dateObtained}
                    onChange={(e) => updateCertificate(certificate.id, "dateObtained", e.target.value)}
                    className="rounded-sm border-gray-300 text-base text-text-color placeholder:text-text-color/60 focus:border-primary focus:ring-primary pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />
                </div>
              </div>

              {/* Membership Expiry */}
              <div className="space-y-2">
                <Label htmlFor={`membershipExpiry-${certificate.id}`} className="text-base font-medium text-text-color">
                  Expiry Date
                </Label>
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
                    onClick={() => {
                      try {
                        const input = document.getElementById(`membershipExpiry-${certificate.id}`) as HTMLInputElement
                        if (input && typeof input.showPicker === "function") {
                          input.showPicker()
                        } else if (input) {
                          input.focus()
                          input.click()
                        }
                      } catch (error) {
                        const input = document.getElementById(`membershipExpiry-${certificate.id}`) as HTMLInputElement
                        if (input) {
                          input.focus()
                        }
                      }
                    }}
                  >
                    <Calendar className="h-4 w-4 text-text-color" />
                  </div>
                  <Input
                    id={`membershipExpiry-${certificate.id}`}
                    type="date"
                    value={certificate.membershipExpiry}
                    onChange={(e) => updateCertificate(certificate.id, "membershipExpiry", e.target.value)}
                    className="rounded-sm border-gray-300 text-base text-text-color placeholder:text-text-color/60 focus:border-primary focus:ring-primary pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* File Upload Section */}
            <div className="mt-6">
              <Label className="text-base font-medium text-text-color mb-3 block">Certificate Attachment</Label>

              {!certificate.attachment ? (
                <div
                  className={`border-2 border-dashed rounded-sm p-8 text-center transition-colors ${
                    draggedOver === certificate.id
                      ? "border-primary bg-primary/5"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragOver={(e) => handleDragOver(e, certificate.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, certificate.id)}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="space-y-2">
                    <p className="text-base text-text-color">
                      <span className="font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-base text-text-color/60">PDF, JPG, PNG, DOC, DOCX (max 5MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    id={`file-upload-${certificate.id}`}
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null
                      handleFileUpload(certificate.id, file)
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4 rounded-sm bg-transparent"
                    onClick={() => document.getElementById(`file-upload-${certificate.id}`)?.click()}
                  >
                    Choose File
                  </Button>
                </div>
              ) : (
                <div className="border rounded-sm p-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center">
                        <Upload className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-text-color">{certificate.attachment.name}</p>
                        <p className="text-base text-text-color/60">{formatFileSize(certificate.attachment.size)}</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleFileUpload(certificate.id, null)}
                      className="rounded-sm border-red-300 text-red-600 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Add Certificate Button */}
        <div className="flex justify-start">
          <Button
            variant="outline"
            onClick={addCertificate}
            className="rounded-sm border-gray-300 hover:border-primary hover:text-primary bg-transparent text-base text-text-color"
          >
            Add more
          </Button>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-6 border-t border-gray-200">
          <Button className="rounded-sm bg-primary hover:bg-primary/90 text-white px-8 py-2 flex items-center gap-2 transition-colors duration-300 text-base min-w-[180px]">
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
