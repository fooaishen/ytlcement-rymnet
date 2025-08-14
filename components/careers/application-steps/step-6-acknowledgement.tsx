"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"
import type { AcknowledgementData } from "@/hooks/use-application-form"

interface Step6AcknowledgementProps {
  acknowledgements: AcknowledgementData
  handleAcknowledgementChange: (field: keyof AcknowledgementData, checked: boolean) => void
}

export function Step6Acknowledgement({ acknowledgements, handleAcknowledgementChange }: Step6AcknowledgementProps) {
  return (
    <div className="space-y-8">
      <div className="bg-red-50 p-4 rounded-sm border border-red-200">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-red-600" />
          <p className="text-sm text-red-800 font-medium">
            <strong>Important:</strong> Please read and acknowledge all statements below before submitting your
            application.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* PDPA Agreement */}
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="pdpaAgreement"
              checked={acknowledgements.pdpaAgreement}
              onCheckedChange={(checked) => handleAcknowledgementChange("pdpaAgreement", checked as boolean)}
              className="mt-1"
            />
            <div className="space-y-2">
              <label htmlFor="pdpaAgreement" className="text-base font-medium text-text-color cursor-pointer">
                1. PDPA Agreement *
              </label>
              <p className="text-sm text-text-color/80 leading-relaxed">
                By submitting this application, you are agreeing with the Personal Data Protection Act (PDPA)
                Agreements. You consent to the collection, use, and disclosure of your personal data for the purpose of
                processing your job application and related employment matters.
              </p>
            </div>
          </div>
        </div>

        {/* Truthful Declaration */}
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="truthfulDeclaration"
              checked={acknowledgements.truthfulDeclaration}
              onCheckedChange={(checked) => handleAcknowledgementChange("truthfulDeclaration", checked as boolean)}
              className="mt-1"
            />
            <div className="space-y-2">
              <label htmlFor="truthfulDeclaration" className="text-base font-medium text-text-color cursor-pointer">
                2. Truthful Declaration *
              </label>
              <p className="text-sm text-text-color/80 leading-relaxed">
                I declare that all particulars and information provided by me in this form and the documents attached
                hereto are true and accurate in every aspect.
              </p>
            </div>
          </div>
        </div>

        {/* Voluntary Declaration */}
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="voluntaryDeclaration"
              checked={acknowledgements.voluntaryDeclaration}
              onCheckedChange={(checked) => handleAcknowledgementChange("voluntaryDeclaration", checked as boolean)}
              className="mt-1"
            />
            <div className="space-y-2">
              <label htmlFor="voluntaryDeclaration" className="text-base font-medium text-text-color cursor-pointer">
                3. Voluntary Declaration and Authorization *
              </label>
              <p className="text-sm text-text-color/80 leading-relaxed">
                I hereby declare that every statement given by me in this form is true and correct and is done
                voluntarily. I have not willfully suppressed any material fact. I authorize the Management to submit the
                said information to any person or organization for the purpose of any investigation which the Management
                may desire to make with reference thereto. I agree to indemnify the Management from all liabilities,
                demands, claims, suits, proceedings, cost and expenses of any nature in connection with the foregoing.
              </p>
            </div>
          </div>
        </div>

        {/* False Declaration Consequence */}
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="falseDeclarationConsequence"
              checked={acknowledgements.falseDeclarationConsequence}
              onCheckedChange={(checked) =>
                handleAcknowledgementChange("falseDeclarationConsequence", checked as boolean)
              }
              className="mt-1"
            />
            <div className="space-y-2">
              <label
                htmlFor="falseDeclarationConsequence"
                className="text-base font-medium text-text-color cursor-pointer"
              >
                4. False Declaration Consequence *
              </label>
              <p className="text-sm text-text-color/80 leading-relaxed">
                I also agree that if any false declaration is made by me, my contract of service may be terminated
                forthwith without notice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 p-4 rounded-sm border border-gray-200">
        <p className="text-sm text-text-color/70">
          By checking all boxes above and clicking "Submit Application", you confirm that you have read, understood, and
          agree to all the terms and conditions stated above.
        </p>
      </div>
    </div>
  )
}
