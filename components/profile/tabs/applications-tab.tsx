"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, Calendar, Upload, FileText, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Application {
  id: number
  position: string
  department: string
  location: string
  dateApplied: string
  status: string
}

interface ApplicationsTabProps {
  applications: Application[]
}

export default function ApplicationsTab({ applications }: ApplicationsTabProps) {
  const [selectedResponses, setSelectedResponses] = useState<Record<number, string>>({})
  const [confirmationModal, setConfirmationModal] = useState<{
    isOpen: boolean
    applicationId: number | null
    response: string
    position: string
  }>({
    isOpen: false,
    applicationId: null,
    response: "",
    position: "",
  })
  const [uploadModal, setUploadModal] = useState<{
    isOpen: boolean
    applicationId: number | null
    position: string
  }>({
    isOpen: false,
    applicationId: null,
    position: "",
  })
  const [uploadedDocuments, setUploadedDocuments] = useState<Record<number, File[]>>({})
  const [medicalCheckupConfirmed, setMedicalCheckupConfirmed] = useState<Record<number, boolean>>({})
  const [medicalCheckupModal, setMedicalCheckupModal] = useState<{
    isOpen: boolean
    applicationId: number | null
    position: string
  }>({
    isOpen: false,
    applicationId: null,
    position: "",
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Interview Scheduled":
      case "Interview":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Offer Pending":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-200"
      case "Declined":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Accepted":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getDisplayStatus = (application: Application) => {
    const userResponse = selectedResponses[application.id]
    if (userResponse === "accept") {
      return "Accepted"
    } else if (userResponse === "decline") {
      return "Declined"
    }
    return application.status
  }

  const handleResponseSelect = (applicationId: number, response: string, position: string) => {
    setConfirmationModal({
      isOpen: true,
      applicationId,
      response,
      position,
    })
  }

  const confirmResponse = () => {
    if (confirmationModal.applicationId) {
      setSelectedResponses((prev) => ({
        ...prev,
        [confirmationModal.applicationId!]: confirmationModal.response,
      }))
    }
    setConfirmationModal({
      isOpen: false,
      applicationId: null,
      response: "",
      position: "",
    })
  }

  const cancelResponse = () => {
    setConfirmationModal({
      isOpen: false,
      applicationId: null,
      response: "",
      position: "",
    })
  }

  const handleSupportingDocumentsClick = (applicationId: number, position: string) => {
    setUploadModal({
      isOpen: true,
      applicationId,
      position,
    })
  }

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0 && uploadModal.applicationId) {
      const currentDocs = uploadedDocuments[uploadModal.applicationId] || []
      if (currentDocs.length + files.length > 5) {
        alert("You can upload a maximum of 5 supporting documents")
        return
      }

      setUploadedDocuments((prev) => ({
        ...prev,
        [uploadModal.applicationId!]: [...currentDocs, ...files],
      }))
    }
  }

  const removeDocument = (applicationId: number, index: number) => {
    setUploadedDocuments((prev) => ({
      ...prev,
      [applicationId]: prev[applicationId]?.filter((_, i) => i !== index) || [],
    }))
  }

  const closeUploadModal = () => {
    setUploadModal({
      isOpen: false,
      applicationId: null,
      position: "",
    })
  }

  const handleMedicalCheckupClick = (applicationId: number, position: string) => {
    setMedicalCheckupModal({
      isOpen: true,
      applicationId,
      position,
    })
  }

  const confirmMedicalCheckup = () => {
    if (medicalCheckupModal.applicationId) {
      setMedicalCheckupConfirmed((prev) => ({
        ...prev,
        [medicalCheckupModal.applicationId!]: true,
      }))
    }
    setMedicalCheckupModal({
      isOpen: false,
      applicationId: null,
      position: "",
    })
  }

  const cancelMedicalCheckup = () => {
    setMedicalCheckupModal({
      isOpen: false,
      applicationId: null,
      position: "",
    })
  }

  return (
    <>
      <Card className="rounded-sm">
        <CardHeader className="border-b border-gray-200">
          <CardTitle className="flex items-center gap-3 font-semibold text-text-color text-2xl">
            {/* <FileText className="h-7 w-7 text-primary" /> */}
            Application History
          </CardTitle>
          <CardDescription className="text-base">Track your job applications and their current status</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="bg-white p-6 rounded-sm border border-gray-200 hover:border-primary/80 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-color mb-2">{application.position}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-base text-text-color/80">
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {application.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {application.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Applied: {new Date(application.dateApplied).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Badge
                    className={`${getStatusColor(getDisplayStatus(application))} rounded-sm border py-1 px-2 text-sm`}
                  >
                    {getDisplayStatus(application)}
                  </Badge>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center sm:gap-4">
                  <div className="flex flex-col gap-2 sm:flex-row order-2 sm:order-1">
                    <Button
                      variant="outline"
                      onClick={() => handleMedicalCheckupClick(application.id, application.position)}
                      disabled={medicalCheckupConfirmed[application.id]}
                      className={`rounded-sm text-base ${
                        medicalCheckupConfirmed[application.id]
                          ? "bg-green-100 text-green-800 border-green-600 cursor-not-allowed"
                          : "border-gray-300 hover:border-primary bg-transparent text-text-color"
                      }`}
                    >
                      {medicalCheckupConfirmed[application.id] ? "Medical Checkup Completed" : "Medical Checkup"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleSupportingDocumentsClick(application.id, application.position)}
                      className="rounded-sm border-gray-300 hover:border-primary bg-transparent text-base text-text-color flex items-center gap-2"
                    >
                      Supporting Documents
                      {uploadedDocuments[application.id]?.length > 0 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">
                          {uploadedDocuments[application.id].length} uploaded
                        </span>
                      )}
                    </Button>
                  </div>
                  {!selectedResponses[application.id] && (
                    <div className="order-1 sm:order-2 w-full sm:w-auto">
                      <Select
                        value={selectedResponses[application.id] || ""}
                        onValueChange={(value) => handleResponseSelect(application.id, value, application.position)}
                      >
                        <SelectTrigger className="w-full sm:w-48 h-10 rounded-sm border-gray-300 text-text-color text-base">
                          <SelectValue className="text-text-color text-base" placeholder="Respond to Offer" />
                        </SelectTrigger>
                        <SelectContent className="text-text-color text-base">
                          <SelectItem className="text-base" value="accept">
                            Accept
                          </SelectItem>
                          <SelectItem className="text-base" value="decline">
                            Decline
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={confirmationModal.isOpen} onOpenChange={cancelResponse}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-text-color">Confirm Your Response</DialogTitle>
            <DialogDescription className="text-base text-text-color/70">
              You are about to {confirmationModal.response} the offer for{" "}
              <span className="font-medium">{confirmationModal.position}</span>. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:gap-2">
            <Button
              variant="outline"
              onClick={cancelResponse}
              className="rounded-sm border-gray-300 hover:border-primary bg-transparent text-base text-text-color"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmResponse}
              className={`rounded-sm text-base ${
                confirmationModal.response === "accept"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              {confirmationModal.response === "accept" ? "Accept Offer" : "Decline Offer"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={uploadModal.isOpen} onOpenChange={closeUploadModal}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-text-color">Upload Supporting Documents</DialogTitle>
            <DialogDescription className="text-base text-text-color/70">
              Upload supporting documents for <span className="font-medium">{uploadModal.position}</span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-sm border border-green-200">
              <p className="text-sm text-green-800">
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
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
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
                    onChange={handleDocumentUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-text-color/60">or drag and drop multiple files</p>
                <p className="text-xs text-text-color/50">Supported formats: PDF, DOC, DOCX, JPG, PNG, GIF</p>
              </div>
            </div>

            {uploadModal.applicationId && uploadedDocuments[uploadModal.applicationId]?.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-medium text-text-color">
                  Uploaded Documents ({uploadedDocuments[uploadModal.applicationId].length}/5)
                </h4>
                {uploadedDocuments[uploadModal.applicationId].map((file, index) => (
                  <div key={index} className="border border-gray-200 rounded-sm p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-text-color">{file.name}</p>
                          <p className="text-xs text-text-color/60">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeDocument(uploadModal.applicationId!, index)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={closeUploadModal}
              className="rounded-sm border-gray-300 hover:border-primary bg-transparent text-base text-text-color"
            >
              Close
            </Button>
            <Button
              onClick={closeUploadModal}
              className="rounded-sm bg-primary hover:bg-primary/90 text-white text-base"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={medicalCheckupModal.isOpen} onOpenChange={cancelMedicalCheckup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-text-color">Confirm Medical Checkup</DialogTitle>
            <DialogDescription className="text-base text-text-color/70">
              Confirm medical checkup completion for <span className="font-medium">{medicalCheckupModal.position}</span>
              ? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:gap-2">
            <Button
              variant="outline"
              onClick={cancelMedicalCheckup}
              className="rounded-sm border-gray-300 hover:border-primary bg-transparent text-base text-text-color"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmMedicalCheckup}
              className="rounded-sm text-base bg-green-600 hover:bg-green-700 text-white"
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
