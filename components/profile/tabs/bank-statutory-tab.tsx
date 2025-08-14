"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface BankStatutoryData {
  bank: string
  bankNumber: string
  epfNumber: string
  socsoNumber: string
  taxNumber: string
}

interface BankStatutoryTabProps {
  bankStatutoryData: BankStatutoryData
  handleInputChange: (field: string, value: string) => void
}

export default function BankStatutoryTab({ bankStatutoryData, handleInputChange }: BankStatutoryTabProps) {
  return (
    <Card className="rounded-sm border shadow-sm">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="text-2xl font-semibold text-text-color">Bank and Statutory Information</CardTitle>
        <CardDescription className="text-base text-text-color/80">
          Provide your banking details and statutory information for payroll processing
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-8">
          {/* Banking Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">Banking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bank" className="text-base font-medium text-text-color">
                  Bank Name *
                </Label>
                <Input
                  id="bank"
                  type="text"
                  value={bankStatutoryData.bank}
                  onChange={(e) => handleInputChange("bank", e.target.value)}
                  placeholder="Enter bank name"
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bankNumber" className="text-base font-medium text-text-color">
                  Bank Account Number *
                </Label>
                <Input
                  id="bankNumber"
                  type="text"
                  value={bankStatutoryData.bankNumber}
                  onChange={(e) => handleInputChange("bankNumber", e.target.value)}
                  placeholder="Enter bank account number"
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60"
                  required
                />
              </div>
            </div>
          </div>

          {/* Statutory Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-color border-b border-gray-200 pb-2">Statutory Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="epfNumber" className="text-base font-medium text-text-color">
                  EPF Number
                </Label>
                <Input
                  id="epfNumber"
                  type="text"
                  value={bankStatutoryData.epfNumber}
                  onChange={(e) => handleInputChange("epfNumber", e.target.value)}
                  placeholder="Enter EPF number"
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="socsoNumber" className="text-base font-medium text-text-color">
                  SOCSO Number
                </Label>
                <Input
                  id="socsoNumber"
                  type="text"
                  value={bankStatutoryData.socsoNumber}
                  onChange={(e) => handleInputChange("socsoNumber", e.target.value)}
                  placeholder="Enter SOCSO number"
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="taxNumber" className="text-base font-medium text-text-color">
                  Tax Number (LHDN)
                </Label>
                <Input
                  id="taxNumber"
                  type="text"
                  value={bankStatutoryData.taxNumber}
                  onChange={(e) => handleInputChange("taxNumber", e.target.value)}
                  placeholder="Enter tax number"
                  className="rounded-sm border-gray-300 focus:border-primary focus:ring-primary text-base text-text-color placeholder:text-text-color/60"
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
