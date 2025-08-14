"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface QuestionsTabProps {
  questionsData: {
    socialClubs: string
    socialClubsDetails: string
    communityWork: string
    communityWorkDetails: string
    unionActivities: string
    unionActivitiesDetails: string
    courtConviction: string
    courtConvictionDetails: string
    dismissedSuspended: string
    dismissedSuspendedDetails: string
    bankrupt: string
    bankruptDetails: string
    goodHealth: string
    goodHealthDetails: string
    chronicIllness: string
    chronicIllnessDetails: string
    physicallyHandicap: string
    physicallyHandicapDetails: string
    insurancePolicy: string
    insurancePolicyDetails: string
    friendsRelatives: string
    friendsRelativesDetails: string
    appliedBefore: string
    appliedBeforeDetails: string
    employedBefore: string
    employedBeforeDetails: string
    outsideBusiness: string
    outsideBusinessDetails: string
    workOutstation: string
    workLongHours: string
    workShifts: string
    hobbies: string
  }
  handleInputChange: (field: string, value: string) => void
}

export default function QuestionsTab({ questionsData, handleInputChange }: QuestionsTabProps) {
  const handleSave = () => {
    console.log("Saving questions data:", questionsData)
  }

  return (
    <Card className="rounded-sm border shadow-sm">
      <CardHeader className="border-b bg-gray-50/50 px-8 py-6">
        <CardTitle className="text-2xl font-semibold text-text-color">Questions</CardTitle>
        <p className="text-base text-text-color/80 mt-2">
          Please answer all questions honestly and provide additional details where requested.
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-8">
          {/* Question 1 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="socialClubs" className="text-base font-medium text-text-color">
                  1. Are you a member of any social clubs? *
                </Label>
                <Select
                  value={questionsData.socialClubs}
                  onValueChange={(value) => handleInputChange("socialClubs", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.socialClubs === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="socialClubsDetails" className="text-base font-medium text-text-color">
                    Please specify
                  </Label>
                  <Input
                    id="socialClubsDetails"
                    value={questionsData.socialClubsDetails}
                    onChange={(e) => handleInputChange("socialClubsDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="communityWork" className="text-base font-medium text-text-color">
                  2. Are you active in community work? *
                </Label>
                <Select
                  value={questionsData.communityWork}
                  onValueChange={(value) => handleInputChange("communityWork", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.communityWork === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="communityWorkDetails" className="text-base font-medium text-text-color">
                    Please specify
                  </Label>
                  <Input
                    id="communityWorkDetails"
                    value={questionsData.communityWorkDetails}
                    onChange={(e) => handleInputChange("communityWorkDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 3 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="unionActivities" className="text-base font-medium text-text-color">
                  3. Have you participated in any union / pressure group activities? *
                </Label>
                <Select
                  value={questionsData.unionActivities}
                  onValueChange={(value) => handleInputChange("unionActivities", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.unionActivities === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="unionActivitiesDetails" className="text-base font-medium text-text-color">
                    Please specify
                  </Label>
                  <Input
                    id="unionActivitiesDetails"
                    value={questionsData.unionActivitiesDetails}
                    onChange={(e) => handleInputChange("unionActivitiesDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 4 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="courtConviction" className="text-base font-medium text-text-color">
                  4. Have you been convicted in a court of law in any country? *
                </Label>
                <Select
                  value={questionsData.courtConviction}
                  onValueChange={(value) => handleInputChange("courtConviction", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.courtConviction === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="courtConvictionDetails" className="text-base font-medium text-text-color">
                    Please specify
                  </Label>
                  <Input
                    id="courtConvictionDetails"
                    value={questionsData.courtConvictionDetails}
                    onChange={(e) => handleInputChange("courtConvictionDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 5 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dismissedSuspended" className="text-base font-medium text-text-color">
                  5. Have you ever been dismissed or suspended from the service of your employment? *
                </Label>
                <Select
                  value={questionsData.dismissedSuspended}
                  onValueChange={(value) => handleInputChange("dismissedSuspended", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.dismissedSuspended === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="dismissedSuspendedDetails" className="text-base font-medium text-text-color">
                    Please specify
                  </Label>
                  <Input
                    id="dismissedSuspendedDetails"
                    value={questionsData.dismissedSuspendedDetails}
                    onChange={(e) => handleInputChange("dismissedSuspendedDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 6 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bankrupt" className="text-base font-medium text-text-color">
                  6. Are you a bankrupt / in debt? *
                </Label>
                <Select value={questionsData.bankrupt} onValueChange={(value) => handleInputChange("bankrupt", value)}>
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.bankrupt === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="bankruptDetails" className="text-base font-medium text-text-color">
                    Please specify
                  </Label>
                  <Input
                    id="bankruptDetails"
                    value={questionsData.bankruptDetails}
                    onChange={(e) => handleInputChange("bankruptDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 7 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="goodHealth" className="text-base font-medium text-text-color">
                  7. Are you in good health? *
                </Label>
                <Select
                  value={questionsData.goodHealth}
                  onValueChange={(value) => handleInputChange("goodHealth", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.goodHealth === "no" && (
                <div className="space-y-2">
                  <Label htmlFor="goodHealthDetails" className="text-base font-medium text-text-color">
                    Please Specify
                  </Label>
                  <Input
                    id="goodHealthDetails"
                    value={questionsData.goodHealthDetails}
                    onChange={(e) => handleInputChange("goodHealthDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 8 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="chronicIllness" className="text-base font-medium text-text-color">
                  8. Do you have any serious or chronic illness, injury or operation? *
                </Label>
                <Select
                  value={questionsData.chronicIllness}
                  onValueChange={(value) => handleInputChange("chronicIllness", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.chronicIllness === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="chronicIllnessDetails" className="text-base font-medium text-text-color">
                    Please specify
                  </Label>
                  <Input
                    id="chronicIllnessDetails"
                    value={questionsData.chronicIllnessDetails}
                    onChange={(e) => handleInputChange("chronicIllnessDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 9 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="physicallyHandicap" className="text-base font-medium text-text-color">
                  9. Are you physically handicap? *
                </Label>
                <Select
                  value={questionsData.physicallyHandicap}
                  onValueChange={(value) => handleInputChange("physicallyHandicap", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.physicallyHandicap === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="physicallyHandicapDetails" className="text-base font-medium text-text-color">
                    Please Add Details If "Yes"
                  </Label>
                  <Input
                    id="physicallyHandicapDetails"
                    value={questionsData.physicallyHandicapDetails}
                    onChange={(e) => handleInputChange("physicallyHandicapDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 10 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="insurancePolicy" className="text-base font-medium text-text-color">
                  10. Do you possess an insurance policy? *
                </Label>
                <Select
                  value={questionsData.insurancePolicy}
                  onValueChange={(value) => handleInputChange("insurancePolicy", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.insurancePolicy === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="insurancePolicyDetails" className="text-base font-medium text-text-color">
                    Please Add Details If "Yes"
                  </Label>
                  <Input
                    id="insurancePolicyDetails"
                    value={questionsData.insurancePolicyDetails}
                    onChange={(e) => handleInputChange("insurancePolicyDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 11 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="friendsRelatives" className="text-base font-medium text-text-color">
                  11. Do you have friends / relatives in our employment (past and present)? *
                </Label>
                <Select
                  value={questionsData.friendsRelatives}
                  onValueChange={(value) => handleInputChange("friendsRelatives", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.friendsRelatives === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="friendsRelativesDetails" className="text-base font-medium text-text-color">
                    Please Add Details If "Yes"
                  </Label>
                  <Input
                    id="friendsRelativesDetails"
                    value={questionsData.friendsRelativesDetails}
                    onChange={(e) => handleInputChange("friendsRelativesDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 12 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="appliedBefore" className="text-base font-medium text-text-color">
                  12. Have you ever applied for a job in our group of companies? *
                </Label>
                <Select
                  value={questionsData.appliedBefore}
                  onValueChange={(value) => handleInputChange("appliedBefore", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.appliedBefore === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="appliedBeforeDetails" className="text-base font-medium text-text-color">
                    Please specify
                  </Label>
                  <Input
                    id="appliedBeforeDetails"
                    value={questionsData.appliedBeforeDetails}
                    onChange={(e) => handleInputChange("appliedBeforeDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 13 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="employedBefore" className="text-base font-medium text-text-color">
                  13. Have you ever been employed by our group of companies? *
                </Label>
                <Select
                  value={questionsData.employedBefore}
                  onValueChange={(value) => handleInputChange("employedBefore", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.employedBefore === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="employedBeforeDetails" className="text-base font-medium text-text-color">
                    Please Add Details If "Yes"
                  </Label>
                  <Input
                    id="employedBeforeDetails"
                    value={questionsData.employedBeforeDetails}
                    onChange={(e) => handleInputChange("employedBeforeDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 14 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="outsideBusiness" className="text-base font-medium text-text-color">
                  14. Are you engaged in any outside business? *
                </Label>
                <Select
                  value={questionsData.outsideBusiness}
                  onValueChange={(value) => handleInputChange("outsideBusiness", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {questionsData.outsideBusiness === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="outsideBusinessDetails" className="text-base font-medium text-text-color">
                    Please Add Details If "Yes"
                  </Label>
                  <Input
                    id="outsideBusinessDetails"
                    value={questionsData.outsideBusinessDetails}
                    onChange={(e) => handleInputChange("outsideBusinessDetails", e.target.value)}
                    className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color"
                    placeholder="Please provide details"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Question 15 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="workOutstation" className="text-base font-medium text-text-color">
                  15. Are you willing to work outstation? *
                </Label>
                <Select
                  value={questionsData.workOutstation}
                  onValueChange={(value) => handleInputChange("workOutstation", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Question 16 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="workLongHours" className="text-base font-medium text-text-color">
                  16. Are you used to working long hours? *
                </Label>
                <Select
                  value={questionsData.workLongHours}
                  onValueChange={(value) => handleInputChange("workLongHours", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Question 17 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="workShifts" className="text-base font-medium text-text-color">
                  17. Are you willing to work on shifts (if applicable)? *
                </Label>
                <Select
                  value={questionsData.workShifts}
                  onValueChange={(value) => handleInputChange("workShifts", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color">
                    <SelectValue
                      className="placeholder:text-text-color/60 text-text-color"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-text-color text-base">
                    <SelectItem value="yes" className="text-text-color text-base">
                      Yes
                    </SelectItem>
                    <SelectItem value="no" className="text-text-color text-base">
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Question 18 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="hobbies" className="text-base font-medium text-text-color">
                  18. List Hobbies you enjoy most: *
                </Label>
                <Textarea
                  id="hobbies"
                  value={questionsData.hobbies}
                  onChange={(e) => handleInputChange("hobbies", e.target.value)}
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color min-h-[100px]"
                  placeholder="Please list your hobbies and interests"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <Button 
              onClick={handleSave}
              className="rounded-sm bg-primary hover:bg-primary/90 text-white px-8 py-2 flex items-center gap-2 transition-colors duration-300 text-base min-w-[180px]">
              Save
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
