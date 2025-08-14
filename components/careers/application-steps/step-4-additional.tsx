"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { jobSourceOptions, vehicleOptions, managementLevels } from "@/lib/application-data"
import type { ApplicationData } from "@/hooks/use-application-form"

interface Step4AdditionalProps {
  applicationData: ApplicationData
  handleInputChange: (field: keyof ApplicationData, value: string) => void
  errors?: Record<string, string>
}

export function Step4Additional({ applicationData, handleInputChange, errors = {} }: Step4AdditionalProps) {
  const formatNumberWithCommas = (value: string) => {
    // Remove all non-digit characters except decimal point
    const numericValue = value.replace(/[^\d.]/g, "")

    // Split by decimal point
    const parts = numericValue.split(".")

    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    // Return formatted number (limit to 2 decimal places)
    return parts.length > 1 ? `${parts[0]}.${parts[1].slice(0, 2)}` : parts[0]
  }

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const formattedValue = formatNumberWithCommas(rawValue)
    handleInputChange("expectedSalary", formattedValue)
  }

  return (
    <>
      {/* General Information Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-text-color border-b border-gray-200 pb-2">General Information</h3>

        <div className="space-y-6">
          <div>
            <label htmlFor="jobSource" className="block text-base font-medium text-text-color mb-2">
              How did you get to know this job? *
            </label>
            <Select value={applicationData.jobSource} onValueChange={(value) => handleInputChange("jobSource", value)}>
              <SelectTrigger
                className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                  errors.jobSource ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select how you found this job" />
              </SelectTrigger>
              <SelectContent>
                {jobSourceOptions.map((source) => (
                  <SelectItem key={source} value={source} className="text-base text-text-color">
                    {source}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.jobSource && <p className="text-red-500 text-sm mt-1">{errors.jobSource}</p>}
          </div>

          <div>
            <label htmlFor="hasVehicle" className="block text-base font-medium text-text-color mb-2">
              Do You Possess a Vehicle? *
            </label>
            <Select
              value={applicationData.hasVehicle}
              onValueChange={(value) => handleInputChange("hasVehicle", value)}
            >
              <SelectTrigger
                className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                  errors.hasVehicle ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select vehicle status" />
              </SelectTrigger>
              <SelectContent>
                {vehicleOptions.map((option) => (
                  <SelectItem key={option} value={option} className="text-base text-text-color">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.hasVehicle && <p className="text-red-500 text-sm mt-1">{errors.hasVehicle}</p>}
          </div>

          <div>
            <label htmlFor="drivingLicense" className="block text-base font-medium text-text-color mb-2">
              Driving License (Select multiple if applicable)
            </label>
            <Select
              value=""
              onValueChange={(value) => {
                const currentOptions = applicationData.drivingLicense
                  ? applicationData.drivingLicense.split(", ").filter(Boolean)
                  : []

                if (currentOptions.includes(value)) {
                  // Remove if already selected
                  const newOptions = currentOptions.filter((item) => item !== value)
                  handleInputChange("drivingLicense", newOptions.join(", "))
                } else {
                  // Add if not selected
                  const newOptions = [...currentOptions, value]
                  handleInputChange("drivingLicense", newOptions.join(", "))
                }
              }}
            >
              <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color min-h-[40px] h-auto">
                <div className="flex flex-wrap gap-1 w-full">
                  {applicationData.drivingLicense ? (
                    applicationData.drivingLicense
                      .split(", ")
                      .filter(Boolean)
                      .map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-sm bg-primary/10 text-primary text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))
                  ) : (
                    <span className="text-text-color/60 text-base">Select your driving license(s)</span>
                  )}
                </div>
              </SelectTrigger>
              <SelectContent>
                {["A", "B", "B1", "B2", "C", "D", "E", "CDL", "Other"].map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className={`text-base text-text-color ${
                      applicationData.drivingLicense?.includes(option) ? "bg-primary/10 font-medium" : ""
                    }`}
                  >
                    {applicationData.drivingLicense?.includes(option) ? "✓ " : ""}
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="modeOfTransport" className="block text-base font-medium text-text-color mb-2">
              How do you travel to work? (Select multiple if applicable)
            </label>
            <Select
              value=""
              onValueChange={(value) => {
                const currentOptions = applicationData.modeOfTransport
                  ? applicationData.modeOfTransport.split(", ").filter(Boolean)
                  : []

                if (currentOptions.includes(value)) {
                  // Remove if already selected
                  const newOptions = currentOptions.filter((item) => item !== value)
                  handleInputChange("modeOfTransport", newOptions.join(", "))
                } else {
                  // Add if not selected
                  const newOptions = [...currentOptions, value]
                  handleInputChange("modeOfTransport", newOptions.join(", "))
                }
              }}
            >
              <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color min-h-[40px] h-auto">
                <div className="flex flex-wrap gap-1 w-full">
                  {applicationData.modeOfTransport ? (
                    applicationData.modeOfTransport
                      .split(", ")
                      .filter(Boolean)
                      .map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-sm bg-primary/10 text-primary text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))
                  ) : (
                    <span className="text-text-color/60 text-base">Select your mode(s) of transport</span>
                  )}
                </div>
              </SelectTrigger>
              <SelectContent>
                {["Motor", "Car", "Public Transport", "Walk", "Other"].map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className={`text-base text-text-color ${
                      applicationData.modeOfTransport?.includes(option) ? "bg-primary/10 font-medium" : ""
                    }`}
                  >
                    {applicationData.modeOfTransport?.includes(option) ? "✓ " : ""}
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Declaration Section */}
      <div className="space-y-6 mt-8">
        <h3 className="text-lg font-semibold text-text-color border-b border-gray-200 pb-2">Role & Responsibilities</h3>

        <div className="bg-yellow-50 p-4 rounded-sm border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Please answer all questions honestly. This information is required for security
            clearance and role assessment purposes.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="managementLevel" className="block text-base font-medium text-text-color mb-2">
              1. Which level of management are you in? *
            </label>
            <Select
              value={applicationData.managementLevel}
              onValueChange={(value) => handleInputChange("managementLevel", value)}
            >
              <SelectTrigger
                className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                  errors.managementLevel ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select your management level" />
              </SelectTrigger>
              <SelectContent>
                {managementLevels.map((level) => (
                  <SelectItem key={level} value={level} className="text-base text-text-color">
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.managementLevel && <p className="text-red-500 text-sm mt-1">{errors.managementLevel}</p>}
          </div>

          <div>
            <label htmlFor="numberOfReports" className="block text-base font-medium text-text-color mb-2">
              2. Do you have any staff working directly under you? If yes, specify number: *
            </label>
            <Input
              id="numberOfReports"
              type="number"
              min="0"
              value={applicationData.numberOfReports}
              onChange={(e) => handleInputChange("numberOfReports", e.target.value)}
              placeholder="Enter number of direct reports (enter 0 if none)"
              className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 ${
                errors.numberOfReports ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            />
            {errors.numberOfReports && <p className="text-red-500 text-sm mt-1">{errors.numberOfReports}</p>}
          </div>

          <div>
            <label htmlFor="dealsWithPrivateMatters" className="block text-base font-medium text-text-color mb-2">
              3. In your capacity, do you deal with Private matter (e.g. Personal, Company Policy)? *
            </label>
            <Select
              value={applicationData.dealsWithPrivateMatters}
              onValueChange={(value) => handleInputChange("dealsWithPrivateMatters", value)}
            >
              <SelectTrigger
                className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                  errors.dealsWithPrivateMatters ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select Yes or No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes" className="text-base text-text-color">
                  Yes
                </SelectItem>
                <SelectItem value="No" className="text-base text-text-color">
                  No
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.dealsWithPrivateMatters && (
              <p className="text-red-500 text-sm mt-1">{errors.dealsWithPrivateMatters}</p>
            )}
          </div>

          <div>
            <label htmlFor="dealsWithCash" className="block text-base font-medium text-text-color mb-2">
              4. In your capacity, do you deal with Cash (e.g. Receiving or Payment)? *
            </label>
            <Select
              value={applicationData.dealsWithCash}
              onValueChange={(value) => handleInputChange("dealsWithCash", value)}
            >
              <SelectTrigger
                className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                  errors.dealsWithCash ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select Yes or No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes" className="text-base text-text-color">
                  Yes
                </SelectItem>
                <SelectItem value="No" className="text-base text-text-color">
                  No
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.dealsWithCash && <p className="text-red-500 text-sm mt-1">{errors.dealsWithCash}</p>}
          </div>

          <div>
            <label htmlFor="dealsWithSecurity" className="block text-base font-medium text-text-color mb-2">
              5. In your capacity, do you deal with Security matter (e.g. Computer programme, Tendering)? *
            </label>
            <Select
              value={applicationData.dealsWithSecurity}
              onValueChange={(value) => handleInputChange("dealsWithSecurity", value)}
            >
              <SelectTrigger
                className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                  errors.dealsWithSecurity ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select Yes or No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes" className="text-base text-text-color">
                  Yes
                </SelectItem>
                <SelectItem value="No" className="text-base text-text-color">
                  No
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.dealsWithSecurity && <p className="text-red-500 text-sm mt-1">{errors.dealsWithSecurity}</p>}
          </div>

          <div>
            <label htmlFor="professionalBodyDetails" className="block text-base font-medium text-text-color mb-2">
              6. Are you a member of any professional body? If yes, please specify: *
            </label>
            <Input
              id="professionalBodyDetails"
              type="text"
              value={applicationData.professionalBodyDetails}
              onChange={(e) => handleInputChange("professionalBodyDetails", e.target.value)}
              placeholder="Enter professional body name or 'None' if not applicable"
              className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 ${
                errors.professionalBodyDetails ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            />
            {errors.professionalBodyDetails && (
              <p className="text-red-500 text-sm mt-1">{errors.professionalBodyDetails}</p>
            )}
          </div>
        </div>
      </div>

      {/* Compensation Section */}
      <div className="space-y-6 mt-8">
        <h3 className="text-lg font-semibold text-text-color border-b border-gray-200 pb-2">Compensation</h3>

        <div className="space-y-6">
          <div className="w-full sm:w-1/2 space-y-2">
            <label htmlFor="expectedSalary" className="block text-base font-medium text-text-color">
              1. What is your expected salary? *
            </label>
            <div className="flex">
              <Select
                value={applicationData.expectedSalaryCurrency || "MYR"}
                onValueChange={(value) => handleInputChange("expectedSalaryCurrency", value)}
              >
                <SelectTrigger className="w-20 rounded-r-none border-r-0 border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MYR" className="text-base text-text-color">
                    MYR
                  </SelectItem>
                  <SelectItem value="USD" className="text-base text-text-color">
                    USD
                  </SelectItem>
                  <SelectItem value="SGD" className="text-base text-text-color">
                    SGD
                  </SelectItem>
                  <SelectItem value="EUR" className="text-base text-text-color">
                    EUR
                  </SelectItem>
                  <SelectItem value="GBP" className="text-base text-text-color">
                    GBP
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="expectedSalary"
                type="text"
                value={applicationData.expectedSalary}
                onChange={handleSalaryChange}
                placeholder="0.00"
                className={`rounded-l-none border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 ${
                  errors.expectedSalary ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              />
            </div>
            {errors.expectedSalary && <p className="text-red-500 text-sm mt-1">{errors.expectedSalary}</p>}
          </div>
        </div>
      </div>
    </>
  )
}
