"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { educationLevels, fieldsOfStudy, resultOptions } from "@/lib/application-data"
import type { ApplicationData } from "@/hooks/use-application-form"
import { Calendar } from "lucide-react"

interface Step2EducationProps {
  applicationData: ApplicationData
  handleInputChange: (field: keyof ApplicationData, value: string) => void
  errors?: Record<string, string>
}

export function Step2Education({ applicationData, handleInputChange, errors = {} }: Step2EducationProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="levelOfEducation" className="block text-base font-medium text-text-color mb-2">
            Level of Education *
          </label>
          <Select
            value={applicationData.levelOfEducation}
            onValueChange={(value) => handleInputChange("levelOfEducation", value)}
          >
            <SelectTrigger
              className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                errors.levelOfEducation ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            >
              <SelectValue placeholder="Select your highest education level" />
            </SelectTrigger>
            <SelectContent>
              {educationLevels.map((level) => (
                <SelectItem key={level} value={level} className="text-base text-text-color">
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.levelOfEducation && <p className="text-red-500 text-sm mt-1">{errors.levelOfEducation}</p>}
        </div>
        <div>
          <label htmlFor="fieldOfStudy" className="block text-base font-medium text-text-color mb-2">
            Field of Study *
          </label>
          <Select
            value={applicationData.fieldOfStudy}
            onValueChange={(value) => handleInputChange("fieldOfStudy", value)}
          >
            <SelectTrigger
              className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                errors.fieldOfStudy ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            >
              <SelectValue placeholder="Select your field of study" />
            </SelectTrigger>
            <SelectContent>
              {fieldsOfStudy.map((field) => (
                <SelectItem key={field} value={field} className="text-base text-text-color">
                  {field}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.fieldOfStudy && <p className="text-red-500 text-sm mt-1">{errors.fieldOfStudy}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="result" className="block text-base font-medium text-text-color mb-2">
            Result/Grade *
          </label>
          <Select value={applicationData.result} onValueChange={(value) => handleInputChange("result", value)}>
            <SelectTrigger
              className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color ${
                errors.result ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            >
              <SelectValue placeholder="Select your result/grade" />
            </SelectTrigger>
            <SelectContent>
              {resultOptions.map((result) => (
                <SelectItem key={result} value={result} className="text-base text-text-color">
                  {result}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.result && <p className="text-red-500 text-sm mt-1">{errors.result}</p>}
        </div>
        <div>
          <label htmlFor="completionDate" className="block text-base font-medium text-text-color mb-2">
            Completion Date *
          </label>
          <div className="relative">
            <div
              className={`absolute left-0 top-0 h-full w-10 flex items-center justify-center border rounded-l-sm cursor-pointer transition-colors ${
                errors.completionDate ? "border-red-500" : "border-gray-300"
              }`}
              onClick={() => {
                try {
                  const input = document.getElementById("completionDate") as HTMLInputElement
                  if (input && typeof input.showPicker === "function") {
                    input.showPicker()
                  } else if (input) {
                    input.focus()
                    input.click()
                  }
                } catch (error) {
                  // Fallback: just focus the input if showPicker fails
                  const input = document.getElementById("completionDate") as HTMLInputElement
                  if (input) {
                    input.focus()
                  }
                }
              }}
            >
              <Calendar className="h-4 w-4 text-text-color" />
            </div>
            <Input
              id="completionDate"
              type="date"
              value={applicationData.completionDate}
              onChange={(e) => handleInputChange("completionDate", e.target.value)}
              className={`border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60 pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer ${
                errors.completionDate ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            />
          </div>
          {errors.completionDate && <p className="text-red-500 text-sm mt-1">{errors.completionDate}</p>}
        </div>
      </div>
    </>
  )
}
