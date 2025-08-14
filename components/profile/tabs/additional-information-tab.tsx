"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { jobSourceOptions, vehicleOptions, managementLevels } from "@/lib/application-data"

interface AdditionalInformationData {
  jobSource: string
  hasVehicle: string
  drivingLicense: string
  modeOfTransport: string
  managementLevel: string
  numberOfReports: string
  dealsWithPrivateMatters: string
  dealsWithCash: string
  dealsWithSecurity: string
  professionalBodyDetails: string
}

interface AdditionalInformationTabProps {
  additionalData: AdditionalInformationData
  handleInputChange: (field: keyof AdditionalInformationData, value: string) => void
}

export default function AdditionalInformationTab({ additionalData, handleInputChange }: AdditionalInformationTabProps) {
  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="text-2xl font-semibold text-text-color">Additional Information</CardTitle>
        <CardDescription className="text-base text-text-color/80">
          Provide additional information and complete the declaration section
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-8">
          {/* General Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">General Information</h3>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="jobSource" className="text-base font-medium text-text-color">
                  How did you get to know this job? *
                </Label>
                <Select
                  value={additionalData.jobSource}
                  onValueChange={(value) => handleInputChange("jobSource", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select how you found this job"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    {jobSourceOptions.map((source) => (
                      <SelectItem key={source} value={source} className="text-base">
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hasVehicle" className="text-base font-medium text-text-color">
                  Do You Possess a Vehicle? *
                </Label>
                <Select
                  value={additionalData.hasVehicle}
                  onValueChange={(value) => handleInputChange("hasVehicle", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select vehicle status"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    {vehicleOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-base">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="drivingLicense" className="text-base font-medium text-text-color">
                  Driving License (Select multiple if applicable)
                </Label>
                <Select
                  value=""
                  onValueChange={(value) => {
                    const currentOptions = additionalData.drivingLicense
                      ? additionalData.drivingLicense.split(", ").filter(Boolean)
                      : []

                    if (currentOptions.includes(value)) {
                      // Remove if already selected - allow removing all items
                      const newOptions = currentOptions.filter((item) => item !== value)
                      handleInputChange("drivingLicense", newOptions.join(", "))
                    } else {
                      // Add if not selected
                      const newOptions = [...currentOptions, value]
                      handleInputChange("drivingLicense", newOptions.join(", "))
                    }
                  }}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color min-h-[40px] h-auto">
                    <div className="flex flex-wrap gap-1 w-full">
                      {additionalData.drivingLicense ? (
                        additionalData.drivingLicense
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
                  <SelectContent className="text-text-color text-base">
                    {["A", "B", "B1", "B2", "C", "D", "E", "CDL", "Other"].map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className={`text-base ${
                          additionalData.drivingLicense?.includes(option) ? "bg-primary/10 font-medium" : ""
                        }`}
                      >
                        {additionalData.drivingLicense?.includes(option) ? "✓ " : ""}
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="modeOfTransport" className="text-base font-medium text-text-color">
                  How do you travel to work? (Select multiple if applicable)
                </Label>
                <Select
                  value=""
                  onValueChange={(value) => {
                    const currentOptions = additionalData.modeOfTransport
                      ? additionalData.modeOfTransport.split(", ").filter(Boolean)
                      : []

                    if (currentOptions.includes(value)) {
                      // Remove if already selected - allow removing all items
                      const newOptions = currentOptions.filter((item) => item !== value)
                      handleInputChange("modeOfTransport", newOptions.join(", "))
                    } else {
                      // Add if not selected
                      const newOptions = [...currentOptions, value]
                      handleInputChange("modeOfTransport", newOptions.join(", "))
                    }
                  }}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color min-h-[40px] h-auto">
                    <div className="flex flex-wrap gap-1 w-full">
                      {additionalData.modeOfTransport ? (
                        additionalData.modeOfTransport
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
                  <SelectContent className="text-text-color text-base">
                    {["Motor", "Car", "Public Transport", "Walk", "Other"].map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className={`text-base ${
                          additionalData.modeOfTransport?.includes(option) ? "bg-primary/10 font-medium" : ""
                        }`}
                      >
                        {additionalData.modeOfTransport?.includes(option) ? "✓ " : ""}
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Declaration Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">
              Role & Responsibilities
            </h3>

            <div className="bg-yellow-50 p-4 rounded-sm border border-yellow-200">
              <p className="text-base text-yellow-800">
                <strong>Important:</strong> Please answer all questions honestly. This information is required for
                security clearance and role assessment purposes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="managementLevel" className="text-base font-medium text-text-color">
                  1. Which level of management are you in? *
                </Label>
                <Select
                  value={additionalData.managementLevel}
                  onValueChange={(value) => handleInputChange("managementLevel", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select your management level"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    {managementLevels.map((level) => (
                      <SelectItem key={level} value={level} className="text-base">
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numberOfReports" className="text-base font-medium text-text-color">
                  2. Do you have any staff working directly under you? If yes, specify number: *
                </Label>
                <Input
                  id="numberOfReports"
                  type="number"
                  min="0"
                  value={additionalData.numberOfReports}
                  onChange={(e) => handleInputChange("numberOfReports", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                  placeholder="Enter number of direct reports (enter 0 if none)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dealsWithPrivateMatters" className="text-base font-medium text-text-color">
                  3. In your capacity, do you deal with Private matter (e.g. Personal, Company Policy)? *
                </Label>
                <Select
                  value={additionalData.dealsWithPrivateMatters}
                  onValueChange={(value) => handleInputChange("dealsWithPrivateMatters", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select Yes or No"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="Yes" className="text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="No" className="text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dealsWithCash" className="text-base font-medium text-text-color">
                  4. In your capacity, do you deal with Cash (e.g. Receiving or Payment)? *
                </Label>
                <Select
                  value={additionalData.dealsWithCash}
                  onValueChange={(value) => handleInputChange("dealsWithCash", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select Yes or No"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="Yes" className="text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="No" className="text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dealsWithSecurity" className="text-base font-medium text-text-color">
                  5. In your capacity, do you deal with Security matter (e.g. Computer programme, Tendering)? *
                </Label>
                <Select
                  value={additionalData.dealsWithSecurity}
                  onValueChange={(value) => handleInputChange("dealsWithSecurity", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select Yes or No"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="Yes" className="text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="No" className="text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="professionalBodyDetails" className="text-base font-medium text-text-color">
                  6. Are you a member of any professional body? If yes, please specify: *
                </Label>
                <Input
                  id="professionalBodyDetails"
                  type="text"
                  value={additionalData.professionalBodyDetails}
                  onChange={(e) => handleInputChange("professionalBodyDetails", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                  placeholder="Enter professional body name or 'None' if not applicable"
                />
              </div>
            </div>
          </div>

          {/* Compensation Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">Compensation</h3>

            <div className="space-y-6">
              <div className="space-y-2 w-1/2">
                <Label htmlFor="expectedSalary" className="text-base font-medium text-text-color">
                  1. What is your expected salary? *
                </Label>
                <div className="flex">
                  <Select value="MYR" onValueChange={() => {}}>
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
                    id="expectedSalary"
                    placeholder="0"
                    className="border-gray-300 focus:border-primary focus:ring-primary text-base rounded-sm text-text-color placeholder:text-text-color/60 rounded-l-none flex-1"
                  />
                </div>
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
