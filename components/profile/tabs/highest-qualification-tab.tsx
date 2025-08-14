"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"

const educationLevels = [
  "SPM/SPMV/O-Level",
  "STPM/A-Level/Pre-University",
  "Certificate",
  "Diploma",
  "Advanced Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate/PhD",
  "Professional Qualification",
]

const fieldsOfStudy = [
  "Accounting",
  "Architecture",
  "Business Administration",
  "Civil Engineering",
  "Computer Science",
  "Economics",
  "Electrical Engineering",
  "Finance",
  "Human Resources",
  "Information Technology",
  "Law",
  "Marketing",
  "Mechanical Engineering",
  "Medicine",
  "Project Management",
  "Other",
]

const resultOptions = [
  "First Class Honours",
  "Second Class Honours (Upper)",
  "Second Class Honours (Lower)",
  "Third Class Honours",
  "Pass",
  "Distinction",
  "Credit",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "CGPA 4.0",
  "CGPA 3.5-3.99",
  "CGPA 3.0-3.49",
  "CGPA 2.5-2.99",
  "CGPA 2.0-2.49",
  "Below CGPA 2.0",
]

interface HighestQualificationData {
  levelOfEducation: string
  fieldOfStudy: string
  result: string
  completionDate: string
}

interface HighestQualificationTabProps {
  qualificationData?: HighestQualificationData
  handleInputChange?: (field: keyof HighestQualificationData, value: string) => void
}

export default function HighestQualificationTab({
  qualificationData = {
    levelOfEducation: "",
    fieldOfStudy: "",
    result: "",
    completionDate: "",
  },
  handleInputChange = () => {},
}: HighestQualificationTabProps) {
  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-text-color">
          Highest Qualification
        </CardTitle>
        <CardDescription className="text-base text-text-color/80">
          Add your highest educational qualification and achievement
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="levelOfEducation" className="text-base font-medium text-text-color">
                Level of Education *
              </Label>
              <Select
                value={qualificationData.levelOfEducation}
                onValueChange={(value) => handleInputChange("levelOfEducation", value)}
              >
                <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                  <SelectValue className="text-text-color" placeholder="Select your highest education level" />
                </SelectTrigger>
                <SelectContent className="text-text-color text-base">
                  {educationLevels.map((level) => (
                    <SelectItem key={level} value={level} className="text-base">
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fieldOfStudy" className="text-base font-medium text-text-color">
                Field of Study *
              </Label>
              <Select
                value={qualificationData.fieldOfStudy}
                onValueChange={(value) => handleInputChange("fieldOfStudy", value)}
              >
                <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                  <SelectValue className="text-text-color" placeholder="Select your field of study" />
                </SelectTrigger>
                <SelectContent className="text-text-color text-base">
                  {fieldsOfStudy.map((field) => (
                    <SelectItem key={field} value={field} className="text-base">
                      {field}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="result" className="text-base font-medium text-text-color">
                Result/Grade *
              </Label>
              <Select value={qualificationData.result} onValueChange={(value) => handleInputChange("result", value)}>
                <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                  <SelectValue className="text-text-color" placeholder="Select your result/grade" />
                </SelectTrigger>
                <SelectContent className="text-text-color text-base">
                  {resultOptions.map((result) => (
                    <SelectItem key={result} value={result} className="text-base">
                      {result}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="completionDate" className="text-base font-medium text-text-color">
                Completion Date *
              </Label>
              <div className="relative">
                <div
                  className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
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
                  value={qualificationData.completionDate}
                  onChange={(e) => handleInputChange("completionDate", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
              </div>
            </div>
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
