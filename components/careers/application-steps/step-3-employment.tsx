"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { industryOptions, positionLevels } from "@/lib/application-data"
import type { ApplicationData } from "@/hooks/use-application-form"
import { useState } from "react"
import { Calendar } from "lucide-react"

interface Step3EmploymentProps {
  applicationData: ApplicationData
  handleInputChange: (field: keyof ApplicationData, value: string) => void
}

export function Step3Employment({ applicationData, handleInputChange }: Step3EmploymentProps) {
  const [salaryValues, setSalaryValues] = useState({
    lastDrawn: "",
    expected: "",
    lastDrawnCurrency: "MYR",
    expectedCurrency: "MYR",
  })

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^\d]/g, "")
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleSalaryChange = (field: "lastDrawn" | "expected", value: string) => {
    const formatted = formatCurrency(value)
    setSalaryValues((prev) => ({
      ...prev,
      [field]: formatted,
    }))
    handleInputChange(field === "lastDrawn" ? "lastDrawnSalary" : "expectedSalary", value.replace(/[^\d]/g, ""))
  }

  const handleCurrencyChange = (field: "lastDrawnCurrency" | "expectedCurrency", value: string) => {
    setSalaryValues((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <>
      <div className="space-y-6">
        <div>
          <label htmlFor="employer" className="block text-base font-medium text-text-color mb-2">
            Employer
          </label>
          <Input
            id="employer"
            type="text"
            value={applicationData.employer}
            onChange={(e) => handleInputChange("employer", e.target.value)}
            placeholder="Company name"
            className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-base font-medium text-text-color mb-2">
            Industry
          </label>
          <Select value={applicationData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
            <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              {industryOptions.map((industry) => (
                <SelectItem key={industry} value={industry} className="text-base text-text-color">
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="positionHeld" className="block text-base font-medium text-text-color mb-2">
              Position Held
            </label>
            <Input
              id="positionHeld"
              type="text"
              value={applicationData.positionHeld}
              onChange={(e) => handleInputChange("positionHeld", e.target.value)}
              placeholder="Job title"
              className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60"
            />
          </div>
          <div>
            <label htmlFor="positionLevel" className="block text-base font-medium text-text-color mb-2">
              Position Level
            </label>
            <Select
              value={applicationData.positionLevel}
              onValueChange={(value) => handleInputChange("positionLevel", value)}
            >
              <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                <SelectValue placeholder="Select position level" />
              </SelectTrigger>
              <SelectContent>
                {positionLevels.map((level) => (
                  <SelectItem key={level} value={level} className="text-base text-text-color">
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="startDate" className="block text-base font-medium text-text-color mb-2">
              Start Date
            </label>
            <div className="relative">
              <div
                className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
                onClick={() => {
                  try {
                    const input = document.getElementById("startDate") as HTMLInputElement
                    if (input && typeof input.showPicker === "function") {
                      input.showPicker()
                    } else if (input) {
                      input.focus()
                      input.click()
                    }
                  } catch (error) {
                    // Fallback: just focus the input if showPicker fails
                    const input = document.getElementById("startDate") as HTMLInputElement
                    if (input) {
                      input.focus()
                    }
                  }
                }}
              >
                <Calendar className="h-4 w-4 text-text-color" />
              </div>
              <Input
                id="startDate"
                type="month"
                value={applicationData.startDate}
                onChange={(e) => handleInputChange("startDate", e.target.value)}
                className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label htmlFor="endDate" className="block text-base font-medium text-text-color mb-2">
              End Date
            </label>
            <div className="relative">
              <div
                className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
                onClick={() => {
                  try {
                    const input = document.getElementById("endDate") as HTMLInputElement
                    if (input && typeof input.showPicker === "function") {
                      input.showPicker()
                    } else if (input) {
                      input.focus()
                      input.click()
                    }
                  } catch (error) {
                    // Fallback: just focus the input if showPicker fails
                    const input = document.getElementById("endDate") as HTMLInputElement
                    if (input) {
                      input.focus()
                    }
                  }
                }}
              >
                <Calendar className="h-4 w-4 text-text-color" />
              </div>
              <Input
                id="endDate"
                type="month"
                value={applicationData.endDate}
                onChange={(e) => handleInputChange("endDate", e.target.value)}
                className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>
            <p className="text-xs text-text-color/60 mt-1">Leave blank if currently employed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="lastDrawnSalary" className="block text-base font-medium text-text-color mb-2">
              Last Drawn Salary
            </label>
            <div className="flex">
              <Select
                value={salaryValues.lastDrawnCurrency}
                onValueChange={(value) => handleCurrencyChange("lastDrawnCurrency", value)}
              >
                <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary text-base rounded-sm text-text-color w-20 rounded-r-none border-r-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="text-text-color text-base">
                  <SelectItem value="MYR" className="text-base">
                    MYR
                  </SelectItem>
                  <SelectItem value="SGD" className="text-base">
                    SGD
                  </SelectItem>
                  <SelectItem value="USD" className="text-base">
                    USD
                  </SelectItem>
                  <SelectItem value="EUR" className="text-base">
                    EUR
                  </SelectItem>
                  <SelectItem value="GBP" className="text-base">
                    GBP
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="lastDrawnSalary"
                type="text"
                value={salaryValues.lastDrawn}
                onChange={(e) => handleSalaryChange("lastDrawn", e.target.value)}
                placeholder="0"
                className="border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 rounded-l-none flex-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-sm border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note for Fresh Graduates:</strong> If you don't have work experience, you can skip the employment
          fields and proceed to the next step. Focus on your educational achievements and any internship or project
          experience.
        </p>
      </div>
    </>
  )
}
