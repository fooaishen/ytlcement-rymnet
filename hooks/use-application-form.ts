"use client"

import { useState } from "react"

export interface ApplicationData {
  // Step 1: Biodata
  fullName: string
  nricPassport: string
  dateOfBirth: string
  phone: string
  email: string
  // Step 2: Education
  levelOfEducation: string
  fieldOfStudy: string
  result: string
  completionDate: string
  // Step 3: Employment History
  employer: string
  industry: string
  positionHeld: string
  positionLevel: string
  startDate: string
  endDate: string
  lastDrawnSalary: string
  expectedSalary: string
  // Step 4: Additional Information
  jobSource: string
  hasVehicle: string
  drivingLicense: string
  modeOfTransport: string
  // Declaration section
  managementLevel: string
  numberOfReports: string
  dealsWithPrivateMatters: string
  dealsWithCash: string
  dealsWithSecurity: string
  professionalBodyDetails: string
}

export interface AcknowledgementData {
  pdpaAgreement: boolean
  truthfulDeclaration: boolean
  voluntaryDeclaration: boolean
  falseDeclarationConsequence: boolean
}

export const useApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [personalPhoto, setPersonalPhoto] = useState<File | null>(null)
  const [supportingDocuments, setSupportingDocuments] = useState<File[]>([])

  const [acknowledgements, setAcknowledgements] = useState<AcknowledgementData>({
    pdpaAgreement: false,
    truthfulDeclaration: false,
    voluntaryDeclaration: false,
    falseDeclarationConsequence: false,
  })

  const [applicationData, setApplicationData] = useState<ApplicationData>({
    // Step 1: Biodata
    fullName: "",
    nricPassport: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    // Step 2: Education
    levelOfEducation: "",
    fieldOfStudy: "",
    result: "",
    completionDate: "",
    // Step 3: Employment History
    employer: "",
    industry: "",
    positionHeld: "",
    positionLevel: "",
    startDate: "",
    endDate: "",
    lastDrawnSalary: "",
    expectedSalary: "",
    // Step 4: Additional Information
    jobSource: "",
    hasVehicle: "",
    drivingLicense: "",
    modeOfTransport: "",
    // Declaration section
    managementLevel: "",
    numberOfReports: "",
    dealsWithPrivateMatters: "",
    dealsWithCash: "",
    dealsWithSecurity: "",
    professionalBodyDetails: "",
  })

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
    setApplicationData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAcknowledgementChange = (field: keyof AcknowledgementData, checked: boolean) => {
    setAcknowledgements((prev) => ({
      ...prev,
      [field]: checked,
    }))
  }

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getProgressPercentage = () => {
    return (currentStep / 6) * 100
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information"
      case 2:
        return "Highest Qualification"
      case 3:
        return "Employment History"
      case 4:
        return "Additional Information"
      case 5:
        return "Documents Upload"
      case 6:
        return "Acknowledgement"
      default:
        return "Application"
    }
  }

  const getNextButtonText = () => {
    switch (currentStep) {
      case 1:
        return "Next: Education"
      case 2:
        return "Next: Employment"
      case 3:
        return "Next: Additional Info"
      case 4:
        return "Next: Documents"
      case 5:
        return "Next: Acknowledgement"
      case 6:
        return "Submit Application"
      default:
        return "Next"
    }
  }

  const allAcknowledgementsChecked = Object.values(acknowledgements).every((value) => value === true)

  return {
    currentStep,
    setCurrentStep,
    personalPhoto,
    setPersonalPhoto,
    supportingDocuments,
    setSupportingDocuments,
    acknowledgements,
    applicationData,
    handleInputChange,
    handleAcknowledgementChange,
    handleNext,
    handlePrevious,
    getProgressPercentage,
    getStepTitle,
    getNextButtonText,
    allAcknowledgementsChecked,
  }
}
