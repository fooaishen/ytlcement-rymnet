"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  nationality: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
  summary: string
}

interface PersonalInfoTabProps {
  formData: FormData
  handleInputChange: (field: string, value: string) => void
}

export default function PersonalInfoTab({ formData, handleInputChange }: PersonalInfoTabProps) {
  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-text-color">
          Personal Information
        </CardTitle>
        <CardDescription className="text-base text-text-color/80">
          Update your personal details and contact information
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-base font-medium text-text-color">
                First Name *
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-base font-medium text-text-color">
                Last Name *
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium text-text-color flex items-center gap-1">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-medium text-text-color flex items-center gap-1">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                placeholder="+60 12-345 6789"
              />
            </div>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-base font-medium text-text-color flex items-center gap-1">
                Date of Birth
              </Label>
              <div className="relative">
                <div
                  className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
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
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender" className="text-base font-medium text-text-color">
                Gender
              </Label>
              <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                  <SelectValue className="placeholder:text-text-color/60 text-text-color" placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="text-text-color text-base">
                  <SelectItem className="text-base" value="male">
                    Male
                  </SelectItem>
                  <SelectItem className="text-base" value="female">
                    Female
                  </SelectItem>
                  <SelectItem className="text-base" value="other">
                    Other
                  </SelectItem>
                  <SelectItem className="text-base" value="prefer-not-to-say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality" className="text-base font-medium text-text-color">
                Nationality
              </Label>
              <Input
                id="nationality"
                type="text"
                value={formData.nationality}
                onChange={(e) => handleInputChange("nationality", e.target.value)}
                className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                placeholder="e.g., Malaysian"
              />
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">Address Information</h3>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-base font-medium text-text-color">
                Street Address
              </Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                placeholder="Enter your street address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-base font-medium text-text-color">
                  City
                </Label>
                <Input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                  placeholder="City"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-base font-medium text-text-color">
                  State
                </Label>
                <Input
                  id="state"
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                  placeholder="State"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode" className="text-base font-medium text-text-color">
                  Postal Code
                </Label>
                <Input
                  id="postalCode"
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                  placeholder="12345"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country" className="text-base font-medium text-text-color">
                  Country
                </Label>
                <Input
                  id="country"
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                  placeholder="Malaysia"
                />
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">
              Professional Summary
            </h3>
            <div className="space-y-2">
              <Label htmlFor="summary" className="text-base font-medium text-text-color">
                Tell us about yourself
              </Label>
              <Textarea
                id="summary"
                value={formData.summary}
                onChange={(e) => handleInputChange("summary", e.target.value)}
                className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base min-h-[120px] placeholder:text-text-color/60"
                placeholder="Write a brief summary about your professional background, skills, and career objectives..."
              />
              <p className="text-xs text-text-color/80">
                This summary will help employers understand your background and career goals.
              </p>
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
