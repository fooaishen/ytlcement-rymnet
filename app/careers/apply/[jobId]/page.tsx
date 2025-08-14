"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Clock } from "lucide-react"
import { jobData } from "@/lib/application-data"
import { ApplicationForm } from "@/components/careers/application-form"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function JobApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const jobId = params.jobId as string
  const job = jobData[jobId as keyof typeof jobData]
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)

  const handleCancel = () => {
    router.push("/careers")
  }

  const handleSubmit = (data: any) => {
    console.log("Application submitted:", data)
    setIsSuccessModalOpen(true)
  }

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false)
    router.push("/careers")
  }

  if (jobId && !job) {
    return (
      <main className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-text-color mb-4">Job Not Found</h1>
            <p className="text-text-color/70 mb-8">The job you're looking for doesn't exist.</p>
            <Button onClick={() => router.push("/careers")}>Back to Job Listings</Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      <section className="py-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <div>
            {/* Job Info Header - Only show if jobId exists */}
            {jobId && job && (
              <div className="mb-8">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-text-color mb-4">{job.title}</h1>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-text-color/70">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="text-base">{job.location}</span>
                    </div>
                    <div className="flex items-center text-text-color/70">
                      <Briefcase className="h-5 w-5 mr-2" />
                      <span className="text-base">{job.department}</span>
                    </div>
                    <div className="flex items-center text-text-color/70">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="text-base">{job.posted}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Application Form */}
            <ApplicationForm job={jobId ? job : null} onCancel={handleCancel} onSubmit={handleSubmit} />
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={handleSuccessModalClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-xl font-semibold text-text-color">
              Application Submitted Successfully
            </DialogTitle>
            <DialogDescription className="text-text-color/70 mt-2">
              Thank you for your application! We have received your submission and will review it carefully. Our HR team
              will get back to you within 5-7 business days.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button type="button" className="w-full" onClick={handleSuccessModalClose}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Error Modal */}
      <Dialog open={isErrorModalOpen} onOpenChange={setIsErrorModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-xl font-semibold text-text-color">Incomplete Application</DialogTitle>
            <DialogDescription className="text-text-color/70 mt-2">
              Please check all acknowledgement boxes before submitting your application. All acknowledgements are
              required to complete your submission.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="w-full bg-transparent">
                Go Back
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
