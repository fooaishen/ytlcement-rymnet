"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, X } from "lucide-react"

interface FamilyMember {
  id: number
  familyName: string
  gender: string
  relationship: string
  birthDate: string
  jobPosition: string
  companyName: string
  companyLocation: string
}

interface FamilyTabProps {
  familyMembers: FamilyMember[]
  setFamilyMembers: (members: FamilyMember[]) => void
}

export default function FamilyTab({ familyMembers, setFamilyMembers }: FamilyTabProps) {
  const addFamilyMember = () => {
    const newMember: FamilyMember = {
      id: Date.now(),
      familyName: "",
      gender: "",
      relationship: "",
      birthDate: "",
      jobPosition: "",
      companyName: "",
      companyLocation: "",
    }
    setFamilyMembers([...familyMembers, newMember])
  }

  const removeFamilyMember = (id: number) => {
    if (familyMembers.length > 1) {
      setFamilyMembers(familyMembers.filter((member) => member.id !== id))
    }
  }

  const updateFamilyMember = (id: number, field: string, value: string) => {
    setFamilyMembers(familyMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  const genderOptions = ["Male", "Female"]

  const relationshipOptions = [
    "Father",
    "Mother",
    "Spouse",
    "Son",
    "Daughter",
    "Brother",
    "Sister",
    "Grandfather",
    "Grandmother",
    "Uncle",
    "Aunt",
    "Cousin",
    "Other",
  ]

  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-text-color">
          Family Information
        </CardTitle>
        <CardDescription className="text-base text-text-color/80">
          Provide information about your family members for emergency contact and reference purposes
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-8">
          {/* Family Members */}
          <div className="space-y-6">
            {familyMembers.map((member, index) => (
              <div key={member.id} className="border border-gray-200 rounded-sm p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-semibold text-text-color">Family Member {index + 1}</h3>
                  {familyMembers.length > 1 && (
                    <X
                      className="h-5 w-5 text-red-600 cursor-pointer hover:text-red-800 transition-colors"
                      onClick={() => removeFamilyMember(member.id)}
                    />
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor={`familyName-${member.id}`} className="text-base font-medium text-text-color">
                      Family Name *
                    </Label>
                    <Input
                      id={`familyName-${member.id}`}
                      type="text"
                      value={member.familyName}
                      onChange={(e) => updateFamilyMember(member.id, "familyName", e.target.value)}
                      className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                      placeholder="Enter family name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`gender-${member.id}`} className="text-base font-medium text-text-color">
                      Gender *
                    </Label>
                    <Select
                      value={member.gender}
                      onValueChange={(value) => updateFamilyMember(member.id, "gender", value)}
                    >
                      <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                        <SelectValue placeholder="Select gender" className="text-base placeholder:text-text-color/60" />
                      </SelectTrigger>
                      <SelectContent className="text-text-color text-base">
                        {genderOptions.map((gender) => (
                          <SelectItem key={gender} value={gender.toLowerCase()} className="text-base text-text-color">
                            {gender}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`relationship-${member.id}`} className="text-base font-medium text-text-color">
                      Relationship *
                    </Label>
                    <Select
                      value={member.relationship}
                      onValueChange={(value) => updateFamilyMember(member.id, "relationship", value)}
                    >
                      <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                        <SelectValue
                          placeholder="Select relationship"
                          className="text-base placeholder:text-text-color/60"
                        />
                      </SelectTrigger>
                      <SelectContent className="text-text-color text-base">
                        {relationshipOptions.map((relationship) => (
                          <SelectItem
                            key={relationship}
                            value={relationship.toLowerCase()}
                            className="text-base text-text-color"
                          >
                            {relationship}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`birthDate-${member.id}`} className="text-base font-medium text-text-color">
                      Birth Date *
                    </Label>
                    <div className="relative">
                      <div
                        className="absolute left-0 top-0 h-full w-10 flex items-center justify-center border border-gray-300 rounded-l-sm cursor-pointer transition-colors"
                        onClick={() => {
                          try {
                            const input = document.getElementById(`birthDate-${member.id}`) as HTMLInputElement
                            if (input && typeof input.showPicker === "function") {
                              input.showPicker()
                            } else if (input) {
                              input.focus()
                              input.click()
                            }
                          } catch (error) {
                            const input = document.getElementById(`birthDate-${member.id}`) as HTMLInputElement
                            if (input) {
                              input.focus()
                            }
                          }
                        }}
                      >
                        <Calendar className="h-4 w-4 text-text-color" />
                      </div>
                      <Input
                        id={`birthDate-${member.id}`}
                        type="date"
                        value={member.birthDate}
                        onChange={(e) => updateFamilyMember(member.id, "birthDate", e.target.value)}
                        className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color pl-12 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`jobPosition-${member.id}`} className="text-base font-medium text-text-color">
                      Job Position
                    </Label>
                    <Input
                      id={`jobPosition-${member.id}`}
                      type="text"
                      value={member.jobPosition}
                      onChange={(e) => updateFamilyMember(member.id, "jobPosition", e.target.value)}
                      className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                      placeholder="Enter job position"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`companyName-${member.id}`} className="text-base font-medium text-text-color">
                      Company Name
                    </Label>
                    <Input
                      id={`companyName-${member.id}`}
                      type="text"
                      value={member.companyName}
                      onChange={(e) => updateFamilyMember(member.id, "companyName", e.target.value)}
                      className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-3">
                    <Label htmlFor={`companyLocation-${member.id}`} className="text-base font-medium text-text-color">
                      Location of Company
                    </Label>
                    <Input
                      id={`companyLocation-${member.id}`}
                      type="text"
                      value={member.companyLocation}
                      onChange={(e) => updateFamilyMember(member.id, "companyLocation", e.target.value)}
                      className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base placeholder:text-text-color/60 text-text-color"
                      placeholder="Enter company location"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Family Member Button */}
          <div className="flex justify-start">
            <Button
              variant="outline"
              onClick={addFamilyMember}
              className="rounded-sm border-gray-300 hover:text-primary hover:border-primary bg-transparent text-base text-text-color"
            >
              Add more
            </Button>
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
