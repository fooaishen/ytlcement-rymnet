"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useApplicationForm } from "@/hooks/use-application-form"
import { Step1Biodata } from "./application-steps/step-1-biodata"
import { Step2Education } from "./application-steps/step-2-education"
import { Step3Employment } from "./application-steps/step-3-employment"
import { Step4Additional } from "./application-steps/step-4-additional"
import { Step5Documents } from "./application-steps/step-5-documents"
import { Step6Acknowledgement } from "./application-steps/step-6-acknowledgement"
import type { Job } from "@/lib/application-data"

interface ApplicationFormProps {
  job: Job
  onCancel: () => void
  onSubmit: (data: any) => void
}

export function ApplicationForm({ job, onCancel, onSubmit }: ApplicationFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const {
    currentStep,
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
  } = useApplicationForm()

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!applicationData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }
    if (!applicationData.nricPassport.trim()) {
      newErrors.nricPassport = "NRIC/Passport number is required"
    }
    if (!applicationData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date of birth is required"
    }
    if (!applicationData.phone.trim()) {
      newErrors.phone = "Mobile contact number is required"
    }
    if (!applicationData.email.trim()) {
      newErrors.email = "Email address is required"
    }

    return newErrors
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}

    if (!applicationData.levelOfEducation.trim()) {
      newErrors.levelOfEducation = "Level of education is required"
    }
    if (!applicationData.fieldOfStudy.trim()) {
      newErrors.fieldOfStudy = "Field of study is required"
    }
    if (!applicationData.result.trim()) {
      newErrors.result = "Result/Grade is required"
    }
    if (!applicationData.completionDate.trim()) {
      newErrors.completionDate = "Completion date is required"
    }

    return newErrors
  }

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {}

    if (!applicationData.jobSource.trim()) {
      newErrors.jobSource = "Job source is required"
    }
    if (!applicationData.hasVehicle.trim()) {
      newErrors.hasVehicle = "Vehicle possession status is required"
    }
    if (!applicationData.managementLevel.trim()) {
      newErrors.managementLevel = "Management level is required"
    }
    if (!applicationData.numberOfReports.trim()) {
      newErrors.numberOfReports = "Number of reports is required"
    }
    if (!applicationData.dealsWithPrivateMatters.trim()) {
      newErrors.dealsWithPrivateMatters = "Private matters response is required"
    }
    if (!applicationData.dealsWithCash.trim()) {
      newErrors.dealsWithCash = "Cash handling response is required"
    }
    if (!applicationData.dealsWithSecurity.trim()) {
      newErrors.dealsWithSecurity = "Security matters response is required"
    }
    if (!applicationData.professionalBodyDetails.trim()) {
      newErrors.professionalBodyDetails = "Professional body details are required"
    }
    if (!applicationData.expectedSalary.trim()) {
      newErrors.expectedSalary = "Expected salary is required"
    }

    return newErrors
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate current step
    let stepErrors: Record<string, string> = {}

    if (currentStep === 1) {
      stepErrors = validateStep1()
    } else if (currentStep === 2) {
      stepErrors = validateStep2()
    } else if (currentStep === 4) {
      stepErrors = validateStep4()
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    } else {
      setErrors({}) // Clear errors if validation passes
    }

    if (currentStep < 6) {
      handleNext()
    } else {
      // Final submission - check all acknowledgements are checked
      if (!allAcknowledgementsChecked) {
        return
      }

      // Submit the application
      onSubmit({
        applicationData,
        personalPhoto,
        supportingDocuments,
        acknowledgements,
      })
    }
  }

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Please provide your basic personal information. All fields are required."
      case 2:
        return "Please provide details about your highest educational qualification."
      case 3:
        return "Please provide details about your most recent employment. If you're a fresh graduate, you may skip this step."
      case 4:
        return "Please provide additional information and complete the declaration section."
      case 5:
        return "Please upload your personal photo and supporting documents."
      case 6:
        return "Please read and acknowledge the following statements before submitting your application."
      default:
        return ""
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Biodata applicationData={applicationData} handleInputChange={handleInputChange} errors={errors} />
      case 2:
        return (
          <Step2Education applicationData={applicationData} handleInputChange={handleInputChange} errors={errors} />
        )
      case 3:
        return <Step3Employment applicationData={applicationData} handleInputChange={handleInputChange} />
      case 4:
        return (
          <Step4Additional applicationData={applicationData} handleInputChange={handleInputChange} errors={errors} />
        )
      case 5:
        return (
          <Step5Documents
            personalPhoto={personalPhoto}
            setPersonalPhoto={setPersonalPhoto}
            supportingDocuments={supportingDocuments}
            setSupportingDocuments={setSupportingDocuments}
          />
        )
      case 6:
        return (
          <Step6Acknowledgement
            acknowledgements={acknowledgements}
            handleAcknowledgementChange={handleAcknowledgementChange}
          />
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-text-color">
          Step {currentStep} of 6: {getStepTitle()}
        </CardTitle>
        <p className="text-text-color/70">{getStepDescription()}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {renderCurrentStep()}

          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4 pt-6">
            <div>
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  className="bg-transparent w-full sm:w-auto sm:min-w-[180px] text-base"
                >
                  Previous
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="bg-transparent w-full sm:w-auto sm:min-w-[180px] text-base"
                >
                  Cancel
                </Button>
              )}
            </div>
            <Button
              type="submit"
              className="px-8 w-full sm:w-auto sm:min-w-[180px] text-base"
              disabled={(currentStep === 5 && !personalPhoto) || (currentStep === 6 && !allAcknowledgementsChecked)}
            >
              {getNextButtonText()}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
