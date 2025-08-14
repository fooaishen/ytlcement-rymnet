"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Calendar, X } from "lucide-react"

interface Experience {
  id: number
  company: string
  position: string
  level: string
  startDate: string
  endDate: string
  location: string
  description: string
}

interface ExperienceTabProps {
  experience: Experience[]
  addExperience: () => void
  removeExperience: (id: number) => void
}

export default function ExperienceTab({ experience, addExperience, removeExperience }: ExperienceTabProps) {
  const [salaryValues, setSalaryValues] = useState<{
    [key: string]: { lastDrawn: string; expected: string; lastDrawnCurrency: string; expectedCurrency: string }
  }>({})

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^\d]/g, "")
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleSalaryChange = (id: number, field: "lastDrawn" | "expected", value: string) => {
    const formatted = formatCurrency(value)
    setSalaryValues((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: formatted,
      },
    }))
  }

  const handleCurrencyChange = (id: number, field: "lastDrawnCurrency" | "expectedCurrency", value: string) => {
    setSalaryValues((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }))
  }

  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-text-color mb-1.5">
              Work Experience
            </CardTitle>
            <CardDescription className="text-base">Add your previous work experience and achievements</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {experience.map((exp, index) => (
          <div key={exp.id} className="border border-gray-200 rounded-sm p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-text-color">Experience {index + 1}</h3>
              <div className="flex gap-2">
                {experience.length >= 1 && (
                  <X
                    className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer transition-colors"
                    onClick={() => removeExperience(exp.id)}
                  />
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base font-medium text-text-color">Employer</Label>
                <Input
                  placeholder="Company name"
                  defaultValue={exp.company}
                  className="border-gray-300 focus:border-primary focus:ring-primary text-base rounded-sm text-text-color placeholder:text-text-color/60"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium text-text-color">Industry</Label>
                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary text-base rounded-sm text-text-color">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="construction" className="text-base">
                      Construction & Building Materials
                    </SelectItem>
                    <SelectItem value="manufacturing" className="text-base">
                      Manufacturing
                    </SelectItem>
                    <SelectItem value="engineering" className="text-base">
                      Engineering
                    </SelectItem>
                    <SelectItem value="technology" className="text-base">
                      Technology
                    </SelectItem>
                    <SelectItem value="finance" className="text-base">
                      Finance
                    </SelectItem>
                    <SelectItem value="healthcare" className="text-base">
                      Healthcare
                    </SelectItem>
                    <SelectItem value="education" className="text-base">
                      Education
                    </SelectItem>
                    <SelectItem value="retail" className="text-base">
                      Retail
                    </SelectItem>
                    <SelectItem value="transportation" className="text-base">
                      Transportation
                    </SelectItem>
                    <SelectItem value="energy" className="text-base">
                      Energy
                    </SelectItem>
                    <SelectItem value="other" className="text-base">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-base font-medium text-text-color">Position Held</Label>
                  <Input
                    placeholder="Job title"
                    defaultValue={exp.position}
                    className="border-gray-300 focus:border-primary focus:ring-primary text-base rounded-sm text-text-color placeholder:text-text-color/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-base font-medium text-text-color">Position Level</Label>
                  <Select defaultValue={exp.level}>
                    <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary text-base rounded-sm text-text-color">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent className="text-text-color text-base">
                      <SelectItem value="intern" className="text-base">
                        Intern
                      </SelectItem>
                      <SelectItem value="junior" className="text-base">
                        Junior
                      </SelectItem>
                      <SelectItem value="senior" className="text-base">
                        Senior
                      </SelectItem>
                      <SelectItem value="lead" className="text-base">
                        Lead
                      </SelectItem>
                      <SelectItem value="manager" className="text-base">
                        Manager
                      </SelectItem>
                      <SelectItem value="senior-manager" className="text-base">
                        Senior Manager
                      </SelectItem>
                      <SelectItem value="director" className="text-base">
                        Director
                      </SelectItem>
                      <SelectItem value="senior-director" className="text-base">
                        Senior Director
                      </SelectItem>
                      <SelectItem value="vp" className="text-base">
                        Vice President
                      </SelectItem>
                      <SelectItem value="executive" className="text-base">
                        Executive
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-base font-medium text-text-color">Start Date</Label>
                  <div className="relative">
                    <div
                      className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
                      onClick={() => {
                        try {
                          const input = document.getElementById(`startDate-${exp.id}`) as HTMLInputElement
                          if (input && typeof input.showPicker === "function") {
                            input.showPicker()
                          } else if (input) {
                            input.focus()
                            input.click()
                          }
                        } catch (error) {
                          const input = document.getElementById(`startDate-${exp.id}`) as HTMLInputElement
                          if (input) {
                            input.focus()
                          }
                        }
                      }}
                    >
                      <Calendar className="h-4 w-4 text-text-color" />
                    </div>
                    <Input
                      id={`startDate-${exp.id}`}
                      type="month"
                      defaultValue={exp.startDate}
                      className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-base font-medium text-text-color">End Date</Label>
                  <div className="relative">
                    <div
                      className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
                      onClick={() => {
                        try {
                          const input = document.getElementById(`endDate-${exp.id}`) as HTMLInputElement
                          if (input && typeof input.showPicker === "function") {
                            input.showPicker()
                          } else if (input) {
                            input.focus()
                            input.click()
                          }
                        } catch (error) {
                          const input = document.getElementById(`endDate-${exp.id}`) as HTMLInputElement
                          if (input) {
                            input.focus()
                          }
                        }
                      }}
                    >
                      <Calendar className="h-4 w-4 text-text-color" />
                    </div>
                    <Input
                      id={`endDate-${exp.id}`}
                      type="month"
                      defaultValue={exp.endDate}
                      className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-base font-medium text-text-color">Last Drawn Salary</Label>
                  <div className="flex">
                    <Select
                      value={salaryValues[exp.id]?.lastDrawnCurrency || "MYR"}
                      onValueChange={(value) => handleCurrencyChange(exp.id, "lastDrawnCurrency", value)}
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
                      placeholder="0"
                      className="border-gray-300 focus:border-primary focus:ring-primary text-base rounded-sm text-text-color placeholder:text-text-color/60 rounded-l-none flex-1"
                      value={salaryValues[exp.id]?.lastDrawn || ""}
                      onChange={(e) => handleSalaryChange(exp.id, "lastDrawn", e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="space-y-2">
                  <Label className="text-base font-medium text-text-color">Expected Salary</Label>
                  <div className="flex">
                    <Select
                      value={salaryValues[exp.id]?.expectedCurrency || "MYR"}
                      onValueChange={(value) => handleCurrencyChange(exp.id, "expectedCurrency", value)}
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
                      placeholder="0"
                      className="border-gray-300 focus:border-primary focus:ring-primary text-base rounded-sm text-text-color placeholder:text-text-color/60 rounded-l-none flex-1"
                      value={salaryValues[exp.id]?.expected || ""}
                      onChange={(e) => handleSalaryChange(exp.id, "expected", e.target.value)}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        ))}
        {/* Add Experience Button */}
        <div className="flex justify-start">
          <Button
            variant="outline"
            onClick={addExperience}
            className="rounded-sm border-gray-300 hover:text-primary hover:border-primary bg-transparent text-base text-text-color"
          >
            Add more
          </Button>
        </div>
        <div className="flex justify-end pt-6 border-t border-gray-200">
          <Button className="rounded-sm bg-primary hover:bg-primary/90 text-white px-8 py-2 flex items-center gap-2 transition-colors duration-300 text-base min-w-[180px]">
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
