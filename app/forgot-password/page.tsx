"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/hooks/use-auth"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // For demo purposes, we'll use a default password
      const result = await resetPassword(email, "newpassword123")
      if (result.success) {
        setIsSuccess(true)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("An error occurred while resetting password")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-2xl bg-gray-50 flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card className="shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-center text-text-color mb-2">Password Reset Successful</CardTitle>
              <CardDescription className="text-center text-text-color/60 mb-6">
                Your password has been reset to: <strong>newpassword123</strong>
                <br />
                Please login with your new password and change it immediately.
              </CardDescription>
              <Link href="/login">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Back to Sign In</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-2xl bg-gray-50 flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card className="shadow-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-text-color">Reset your password</CardTitle>
            <CardDescription className="text-center text-text-color/60">
              Enter your email address and we'll reset your password
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">{error}</div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium text-text-color">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-color/60 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-10 text-base text-text-color placeholder:text-text-color/60"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-base" disabled={isLoading}>
                {isLoading ? "Resetting..." : "Send Reset Link"}
              </Button>
            </form>

            <div>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-text-color text-base hover:bg-gray-50 bg-transparent"
                >
                 Back to Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
