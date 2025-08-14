"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PhotoTab() {
  const [personalPhoto, setPersonalPhoto] = useState<File | null>(null)
  const [supportingDocuments, setSupportingDocuments] = useState<File[]>([])

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const validateImageFile = (file: File): string | null => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"]
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!allowedTypes.includes(file.type)) {
      return "Please upload a valid image file (JPG, PNG, GIF)"
    }

    if (file.size > maxSize) {
      return "File size must be less than 5MB"
    }

    return null
  }

  const validateDocumentFile = (file: File): string | null => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ]
    const maxSize = 10 * 1024 * 1024 // 10MB

    if (!allowedTypes.includes(file.type)) {
      return "Please upload a valid file (PDF, DOC, DOCX, JPG, PNG, GIF)"
    }

    if (file.size > maxSize) {
      return "File size must be less than 10MB"
    }

    return null
  }

  const handlePersonalPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const error = validateImageFile(file)
      if (error) {
        alert(error)
        return
      }
      setPersonalPhoto(file)
    }
  }

  const handleSupportingDocumentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      // Check total number of files (max 5)
      if (supportingDocuments.length + files.length > 5) {
        alert("You can upload a maximum of 5 supporting documents")
        return
      }

      // Validate each file
      for (const file of files) {
        const error = validateDocumentFile(file)
        if (error) {
          alert(`File "${file.name}": ${error}`)
          return
        }
      }

      setSupportingDocuments([...supportingDocuments, ...files])
    }
  }

  const removeSupportingDocument = (index: number) => {
    setSupportingDocuments(supportingDocuments.filter((_, i) => i !== index))
  }

  const removePersonalPhoto = () => {
    setPersonalPhoto(null)
  }

  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-text-color">Documents</CardTitle>
        <CardDescription className="text-base text-text-color/80">
          Upload your personal photo and supporting documents
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-8">
          {/* Personal Photo Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">Personal Photo *</h3>

            <div className="bg-blue-50 p-4 rounded-sm border border-blue-200">
              <p className="text-base text-blue-800">
                <strong>Photo Requirements:</strong>
                <br />• Professional passport-style photo
                <br />• Clear face visibility, no sunglasses or hats
                <br />• Acceptable formats: JPG, PNG, GIF
                <br />• Maximum file size: 5MB
              </p>
            </div>

            {!personalPhoto ? (
              <div className="border-2 border-dashed border-gray-300 rounded-sm p-8 text-center hover:border-primary transition-colors">
                <div className="space-y-2">
                  <label htmlFor="personalPhoto" className="cursor-pointer">
                    <span className="text-base font-medium text-primary hover:text-primary/80">
                      Click to upload your photo
                    </span>
                    <input
                      id="personalPhoto"
                      type="file"
                      accept="image/*"
                      onChange={handlePersonalPhotoChange}
                      className="hidden"
                    />
                  </label>
                  <p className="text-base text-text-color/60">or drag and drop</p>
                </div>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-sm p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-base font-medium text-text-color">{personalPhoto.name}</p>
                      <p className="text-base text-text-color/60">{formatFileSize(personalPhoto.size)}</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={removePersonalPhoto}
                    className="rounded-sm text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Supporting Documents Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">
              Supporting Documents
            </h3>

            <div className="bg-green-50 p-4 rounded-sm border border-green-200">
              <p className="text-base text-green-800">
                <strong>Recommended Documents:</strong>
                <br />• Resume/CV (PDF format preferred)
                <br />• Educational certificates and transcripts
                <br />• Professional certifications
                <br />• Work experience letters
                <br />• Portfolio or work samples (if applicable)
                <br />• Maximum 5 files, 10MB per file
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-sm p-8 text-center hover:border-primary transition-colors">
              <div className="space-y-2">
                <label htmlFor="supportingDocuments" className="cursor-pointer">
                  <span className="text-base font-medium text-primary hover:text-primary/80">
                    Click to upload documents
                  </span>
                  <input
                    id="supportingDocuments"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                    onChange={handleSupportingDocumentsChange}
                    className="hidden"
                  />
                </label>
                <p className="text-base text-text-color/60">or drag and drop multiple files</p>
                <p className="text-base text-text-color/50">Supported formats: PDF, DOC, DOCX, JPG, PNG, GIF</p>
              </div>
            </div>

            {/* Display uploaded supporting documents */}
            {supportingDocuments.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-text-color">
                  Uploaded Documents ({supportingDocuments.length}/5)
                </h4>
                {supportingDocuments.map((file, index) => (
                  <div key={index} className="border border-gray-200 rounded-sm p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="text-base font-medium text-text-color">{file.name}</p>
                          <p className="text-base text-text-color/60">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeSupportingDocument(index)}
                        className="rounded-sm text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upload Guidelines */}
          <div className="bg-gray-50 p-4 rounded-sm border border-gray-200">
            <h4 className="text-xl font-semibold text-text-color mb-2">Upload Guidelines:</h4>
            <ul className="text-base text-text-color/70 space-y-1">
              <li>• Personal photo is required for all applications</li>
              <li>• Supporting documents are optional but highly recommended</li>
              <li>• Ensure all documents are clear and readable</li>
              <li>• File names should be descriptive (e.g., "John_Doe_Resume.pdf")</li>
              <li>• All uploaded files will be kept confidential</li>
            </ul>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <Button className="rounded-sm bg-primary hover:bg-primary/90 text-white px-8 py-2 flex items-center gap-2 transition-colors duration-300 text-base min-w-[180px]">
              Save
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
