"use client"

import { Input } from "@/components/ui/input"
import type { ApplicationData } from "@/hooks/use-application-form"
import { Calendar } from "lucide-react"

interface Step1BiodataProps {
  applicationData: ApplicationData
  handleInputChange: (field: keyof ApplicationData, value: string) => void
  errors?: Record<string, string>
}

export function Step1Biodata({ applicationData, handleInputChange, errors = {} }: Step1BiodataProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-base font-medium text-text-color mb-2">
            Full Name *
          </label>
          <Input
            id="fullName"
            type="text"
            value={applicationData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            placeholder="Enter your full name as per IC/Passport"
            className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 ${
              errors.fullName ? "border-red-500 ring-1 ring-red-500" : ""
            }`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="nricPassport" className="block text-base font-medium text-text-color mb-2">
            NRIC / Passport Number *
          </label>
          <Input
            id="nricPassport"
            type="text"
            value={applicationData.nricPassport}
            onChange={(e) => handleInputChange("nricPassport", e.target.value)}
            placeholder="Enter your NRIC or Passport number"
            className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 ${
              errors.nricPassport ? "border-red-500 ring-1 ring-red-500" : ""
            }`}
          />
          {errors.nricPassport && <p className="text-red-500 text-sm mt-1">{errors.nricPassport}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dateOfBirth" className="block text-base font-medium text-text-color mb-2">
            Date of Birth *
          </label>
          <div className="relative">
            <div
              className={`absolute left-0 top-0 h-full w-10 flex items-center justify-center border rounded-l-sm cursor-pointer transition-colors ${
                errors.dateOfBirth ? "border-red-500" : "border-gray-300"
              }`}
              onClick={() => {
                try {
                  const input = document.getElementById("dateOfBirth") as HTMLInputElement
                  if (input && typeof input.showPicker === "function") {
                    input.showPicker()
                  } else if (input) {
                    input.focus()
                    input.click()
                  }
                } catch (error) {
                  // Fallback: just focus the input if showPicker fails
                  const input = document.getElementById("dateOfBirth") as HTMLInputElement
                  if (input) {
                    input.focus()
                  }
                }
              }}
            >
              <Calendar className="h-4 w-4 text-text-color" />
            </div>
            <Input
              id="dateOfBirth"
              type="date"
              value={applicationData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer ${
                errors.dateOfBirth ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            />
          </div>
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
        </div>
        <div>
          <label htmlFor="mobileNumber" className="block text-base font-medium text-text-color mb-2">
            Mobile Contact Number *
          </label>
          <Input
            id="mobileNumber"
            type="tel"
            value={applicationData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+60 12-345 6789"
            className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 ${
              errors.phone ? "border-red-500 ring-1 ring-red-500" : ""
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-base font-medium text-text-color mb-2">
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          value={applicationData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email address"
          className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 ${
            errors.email ? "border-red-500 ring-1 ring-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
    </>
  )
}
